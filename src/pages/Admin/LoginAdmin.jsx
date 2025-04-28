import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = ({ setAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    if (email && password) {
      setAuthenticated(true);
      localStorage.setItem('auth', 'true');
      navigate('/admin');
    }
  };

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{showSignup ? 'Signup' : 'Login'}</h5>
          </div>
          <div className="modal-body">
            {showSignup ? (
              <div>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>
                <button className="btn btn-primary w-100" onClick={() => setShowSignup(false)}>
                  Signup
                </button>
                <p className="mt-2 text-center">
                  Already have an account?{' '}
                  <a href="#" onClick={() => setShowSignup(false)}>Login</a>
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary w-100" onClick={handleLogin}>
                  Login
                </button>
                <p className="mt-2 text-center">
                  Don't have an account?{' '}
                  <a href="#" onClick={() => setShowSignup(true)}>Signup</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;