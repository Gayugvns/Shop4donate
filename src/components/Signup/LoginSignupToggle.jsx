import { jwtDecode } from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function LoginSignupToggle() {
    const [isSignUp, setIsSignUp] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();

    const password = watch('password');

    // Redirect if token already exists
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            navigate('/profile');
        }
    }, [navigate]);

    const handleSignupOrLogin = async (data) => {
        const url = isSignUp
            ? 'http://143.110.178.254:3001/api/visitors_signup'
            : 'http://143.110.178.254:3001/api/visitors_login';

        const body = isSignUp
            ? {
                user_name: data.username,
                user_email: data.email,
                password: data.password,
                contact_number: data.phonenumber,
            }
            : {
                user_email: data.email,
                password: data.password,
            };

        try {
            setLoading(true);
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const resData = await response.json();

            if (response.ok && resData.token) {
                const decodedToken = jwtDecode(resData.token);
                sessionStorage.setItem('token', resData.token);
                sessionStorage.setItem('tokenExpiry', decodedToken.exp.toString());

                alert(`${isSignUp ? 'Signup' : 'Login'} successful!`);
                navigate('/profilepage');
            } else {
                throw new Error(resData.message || `${isSignUp ? 'Signup' : 'Login'} failed!`);
            }
        } catch (err) {
            setError(err.message);
            console.error(err);
            reset();  // Reset form fields on error
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (data) => {
        console.log(isSignUp ? 'Sign Up Data:' : 'Login Data:', data);
        await handleSignupOrLogin(data);
    };

    return (
        <div
            className="relative min-h-150vh w-full flex items-center justify-center overflow-hidden"
            style={{
                background: 'radial-gradient(circle at 30% 30%, #1e3c72, #2a5298, #0f2027)',
            }}
        >
            <div className="absolute inset-0 overflow-hidden -z-10">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full mt-5 mb-5 bg-gradient-to-br from-[#1e3c72] to-[#2a5298] shadow-xl"
                        style={{
                            width: `${80 + Math.random() * 100}px`,
                            height: `${80 + Math.random() * 100}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            transform: `translate(-50%, -50%)`,
                            filter: 'blur(1px)',
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 w-[600px] h-[550px] mt-5 mb-5 bg-white/10 backdrop-blur-xl rounded-full p-10 flex flex-col items-center justify-center text-white shadow-2xl border border-white/20">
                <h2 className="text-3xl font-light mb-6">{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4 px-6">
                    {isSignUp && (
                        <div>
                            <input
                                {...register('username', { required: 'Username is required' })}
                                placeholder="Username"
                                className="w-full py-2 px-4 rounded bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            {errors.username && <p className="text-red-300 text-xs mt-1">{errors.username.message}</p>}
                        </div>
                    )}

                    <div>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            placeholder="Email Address"
                            className="w-full py-2 px-4 rounded bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {isSignUp && (
                        <div>
                            <input
                                placeholder="Phone Number"
                                type="tel"
                                {...register('phonenumber', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Enter a valid 10-digit phone number',
                                    },
                                })}
                                className="w-full border p-2 rounded bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            {errors.phonenumber && (
                                <p className="text-red-300 text-xs mt-1">{errors.phonenumber.message}</p>
                            )}
                        </div>
                    )}

                    <div>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Minimum 6 characters',
                                },
                            })}
                            placeholder="Password"
                            className="w-full py-2 px-4 rounded bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        {errors.password && <p className="text-red-300 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    {isSignUp && (
                        <div>
                            <input
                                type="password"
                                {...register('confirmPassword', {
                                    required: 'Please confirm your password',
                                    validate: (value) => value === password || 'Passwords do not match',
                                })}
                                placeholder="Confirm Password"
                                className="w-full py-2 px-4 rounded bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-300 text-xs mt-1">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full mt-4 font-semibold py-2 rounded-full transition ${
                            loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-white text-black hover:bg-gray-200'
                        }`}
                    >
                        {loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Login'}
                    </button>

                    {error && <p className="text-red-400 text-sm text-center mt-2">{error}</p>}
                </form>

                <div className="mt-6">
                    <button
                        onClick={() => {
                            setIsSignUp(!isSignUp);
                            setError(null);
                        }}
                        className="text-white/80 text-sm underline hover:text-white"
                    >
                        {isSignUp ? 'Already have an account? Sign In' : 'New here? Create one'}
                    </button>
                </div>
            </div>
        </div>
    );
}
