'use client';
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '@/firebase/firebaseConfig'; // adjust if paths differ
import { signInWithPopup } from 'firebase/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div
      className="flex justify-center mt-[150px] items-center min-h-screen"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #1e3c72, #2a5298, #0f2027)',
      }}
    >
      <div className="relative mb-[150px] w-full max-w-sm">
        {/* Glass Card */}
        <div className="relative z-10 p-6 pt-20 rounded-3xl mt-[150px] shadow-lg bg-white/20 backdrop-blur-md border border-white/30 text-white">
          
          {/* Profile Icon */}
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center shadow-md border-4 border-white/30">
              <FaUser className="text-white text-3xl" />
            </div>
          </div>

          {/* Form Fields */}
          <form className="space-y-4 mt-2">
            <div className="relative">
              <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-100" />
              <input
                type="email"
                placeholder="Email ID"
                value={email}
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

            {/* Remember + Forgot */}
            <div className="flex justify-between text-xs text-blue-100">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-400" />
                Remember me
              </label>
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>
          </form>
        </div>

        {/* Neon Glow Login Button */}
        <button
  type="submit"
  className="w-[240px] py-2 text-white text-center font-semibold mt-[-1px] rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:opacity-90 transition z-20 relative mx-auto block"
>
  LOGIN
</button>

        {/* Glass Shadow Below */}
        <div className="absolute top-full w-full h-6 bg-white/10 backdrop-blur-md rounded-b-3xl shadow-inner"></div>

        {/* Social Login */}
        <div className="text-center mt-6 text-sm text-white z-10 relative">
          OR
          <button
            type="button"
            className="w-full mt-3 flex justify-center items-center gap-3 py-2 bg-white text-blue-900 font-medium rounded-xl shadow hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
          <div className="mt-3">
            Don’t have an account?{' '}
            <a href="/signup" className="underline hover:text-white">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
