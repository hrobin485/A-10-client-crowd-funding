import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import registerLottieData from '../../assets/lottie/register.json';
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    // Password validation
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return passwordRegex.test(password);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value || '';  // Optional field
        const password = form.password.value;

        // Password validation
        if (!validatePassword(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Password Error',
                text: 'Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.',
            });
            return;
        }

        setLoading(true);
        
        try {
            const result = await createUser(email, password);
            console.log(result.user);
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful!',
                text: 'Welcome! You have been successfully registered.',
            });
            navigate('/'); // Redirect to homepage
        } catch (error) {
            console.error(error.message);
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.message || 'An error occurred. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen my-5 rounded-xl dark:bg-gray-800 dark:text-gray-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Left Side: Lottie Animation */}
                <div className="text-center lg:text-left w-3/6">
                    <Lottie animationData={registerLottieData} loop autoPlay />
                </div>

                {/* Right Side: Registration Form */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl dark:bg-gray-800">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control dark:text-gray-100">
                            <label className="label">
                                <span className="label-text dark:text-gray-100">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered dark:text-black"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-gray-100">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered dark:text-black"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-gray-100">Photo URL (Optional)</span>
                            </label>
                            <input
                                type="url"
                                name="photoURL"
                                placeholder="Enter photo URL (optional)"
                                className="input input-bordered dark:text-black"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-gray-100">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full dark:text-black"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <input
                                        type="checkbox"
                                        className="toggle-checkbox"
                                        checked={showPassword}
                                        onChange={() => setShowPassword(!showPassword)}
                                    />
                                    <label className="ml-2">Show Password</label>
                                </div>
                            </div>
                            <label className="label">
                                <span className="label-text-alt dark:text-gray-100">
                                    Note: Must have an uppercase, a lowercase letter, & be at least 6 characters long.
                                </span>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary" disabled={loading}>
                                {loading ? 'Registering...' : 'Register'}
                            </button>
                            <div className="form-control mt-4">
                                <p className="text-sm">
                                    Already have an account? <Link to="/signIn" className="text-blue-500">Login</Link>
                                </p>
                            </div>
                        </div>
                    </form>

                    {/* Social Login */}
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;
