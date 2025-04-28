import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function AdminAuth() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Default dummy credentials for testing
  const defaultEmail = "admin@example.com";
  const defaultPassword = "admin123";

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = sessionStorage.getItem('adminToken');
    if (token) {
      navigate("/admin/adminpanel");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the credentials match the default dummy credentials
    if (credentials.email === defaultEmail && credentials.password === defaultPassword) {
      // Simulate successful login with default credentials
      sessionStorage.setItem("adminToken", "dummy-token");

      toast.success(`${isSignup ? "Signup" : "Login"} successful! 🎉`, {
        duration: 3000,
        style: { background: "#4CAF50", color: "white" },
      });

      setTimeout(() => {
        navigate("/admin/adminpanel");
      }, 1500);

      setCredentials({ name: "", email: "", password: "" });
      return;
    }

    // If it's not the dummy login, bind the real API
    const url = "http://143.110.178.254:3001/api/adminsidelogin"; // real API endpoint

    const body = isSignup
      ? {
          admin_name: credentials.name,
          admin_email: credentials.email,
          password: credentials.password,
        }
      : {
          admin_email: credentials.email,
          password: credentials.password,
        };

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const contentType = response.headers.get("content-type");

      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server did not return JSON. Please check the API.");
      }

      const resData = await response.json();

      console.log("API Response Data:", resData);  // Debugging the API response

      if (response.ok && resData.token) {
        sessionStorage.setItem("adminToken", resData.token);

        toast.success(`${isSignup ? "Signup" : "Login"} successful! 🎉`, {
          duration: 3000,
          style: { background: "#4CAF50", color: "white" },
        });

        setTimeout(() => {
          navigate("/admin/adminpanel");
        }, 1500);

        setCredentials({ name: "", email: "", password: "" });
      } else {
        throw new Error(resData.message || `${isSignup ? "Signup" : "Login"} failed!`);
      }
    } catch (err) {
      setError(err.message);
      console.error("Error during login/signup:", err);
      toast.error(err.message || "Something went wrong.", {
        duration: 4000,
        style: { background: "#FF5252", color: "white" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/images/login.png')` }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="bg-transparent text-white ms-[-450px] p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-white border border-white rounded-full text-center mb-6">
          {isSignup ? "Admin Signup" : "Admin Login"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label className="block text-lg mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={credentials.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border text-black rounded-md"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-lg mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-black rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-black rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                <span>{isSignup ? "Signing Up..." : "Logging In..."}</span>
              </div>
            ) : (
              <span>{isSignup ? "Sign Up" : "Login"}</span>
            )}
          </button>

          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-sm underline"
          >
            {isSignup
              ? "Already have an account? Login"
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}
