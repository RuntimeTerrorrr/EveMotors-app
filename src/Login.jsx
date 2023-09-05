import Logo from './assets/Logo/logoWhite.png'
import UserSignIn from './services/UserSignIn.service.js';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        UserSignIn(formdata)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                }
                navigate("/dashboard");

            })
            .catch((error) => {
                console.error(error);
            });

    };
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-5 w-auto"
                        src={Logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin(e);
                    }}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="mt-1 w-full rounded-md border border-gray-300 bg-white text-sm  shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="login" className="text-[#F5F5F5] underline">Forgot Password?</a>.
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="mt-1 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                                className="inline-block shrink-0 rounded-md border border-gray-700 bg-prime px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-gray-700"
                                onClick={handleLogin}
                                type='submit'
                            >
                                Log in
                            </button>

                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                Not a member? {' '}
                                <Link to="register" className="text-white">Sign up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;