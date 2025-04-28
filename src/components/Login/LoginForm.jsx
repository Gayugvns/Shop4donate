import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router
import { FaUser, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { jwtDecode } from 'jwt-decode';

export default function LoginForm() {
  const [user_email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (user_email, password) => {

    console.log(user_email, password);
    const response = await fetch('http://143.110.178.254:3001/api/visitors_login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_email
        , password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      const decodedToken = jwtDecode(token);
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('tokenExpiry', decodedToken.exp.toString());
      console.log('Login successful!');
      return true;
    } else {
      throw new Error('Login failed!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(user_email, password);
      alert('Login successful!');
      setError(null);
      navigate('/signup'); // route to /home
    } catch (err) {
      setError(err.message);
    }
  };


  const handleSignupRedirect = () => {
    navigate('/signup'); // temp redirect
  };

  return (
    <div
      className="flex justify-center mt-[150px] items-center min-h-screen"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #1e3c72, #2a5298, #0f2027)',
      }}
    >
      <div className="relative mb-[150px] w-full max-w-sm">
        <div className="relative z-10 p-6 pt-20 rounded-3xl mt-[150px] shadow-lg bg-white/20 backdrop-blur-md border border-white/30 text-white">
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center shadow-md border-4 border-white/30">
              <FaUser className="text-white text-3xl" />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm mb-2">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="relative">
              <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-100" />
              <input
                type="email"
                placeholder="Email ID"
                value={user_email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-blue-950/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-100"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-100" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-blue-950/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-100"
              />
            </div>

            <div className="flex justify-between text-xs text-blue-100">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-400" />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white text-center font-semibold rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:opacity-90 transition z-20 relative"
            >
              LOGIN
            </button>
          </form>
        </div>

        <div className="absolute top-full w-full h-6 bg-white/10 backdrop-blur-md rounded-b-3xl shadow-inner"></div>

        <div className="text-center mt-6 text-sm text-white z-10 relative">
          OR
          
          <div className="mt-3">
            Don’t have an account?{' '}
            <button
              onClick={handleSignupRedirect}
              className="underline hover:text-white"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
