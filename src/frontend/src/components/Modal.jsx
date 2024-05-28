import React, { useState } from 'react';
import logo from './G2LL.svg';
import { IoClose } from 'react-icons/io5';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const loginImg = "https://imgur.com/lZDCpNR.png";

const Modal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
      <div className="relative w-full h-full bg-white dark:bg-stone-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-cyan-950 dark:text-black"
          aria-label="Close"
        >
          <IoClose />
        </button>
        <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-200">
          <div className="container h-full p-10 text-cyan-950">
            <div className="flex h-full flex-wrap items-center justify-center text-cyan-950 dark:text-neutral-200">
              <div className="h-full flex justify-center items-center">
                <div className="block rounded-lg bg-white shadow-xl dark:bg-white w-full p-4 max-w-screen-xl mx-auto mt-27 h-screen">
                  <div className="g-0 lg:flex lg:flex-wrap h-full">
                    {/* Left column container */}
                    <div className="px-4 md:px-0 lg:w-7/12 h-full flex flex-col justify-center">
                      <div className="md:mx-6 md:p-12">
                        {/* Logo */}
                        <div className="text-center">
                          <img
                            className="mx-auto w-36" // Adjusted width to make logo smaller
                            src={logo}
                            alt="G2 Learning Language"
                          />
                          <h3 className="mb-11 mt-2 pb-1 text-xl font-extrabold text-cyan-950">
                            Welcome back to G2 Learning Language
                          </h3>
                        </div>

                        <form>
                          <p className="mb-4 font-bold text-cyan-950">Please login to your account</p>
                          {/* Email input */}
                          <div className="relative mb-6">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="block mb-2 text-neutral-500 dark:text-neutral-400"
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear text-black dark:text-black dark:placeholder:text-neutral-300"
                              id="exampleFormControlInput1"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          {/* Password input */}
                          <div className="relative mb-6">
                            <label
                              htmlFor="exampleFormControlInput11"
                              className="block mb-2 text-neutral-500 dark:text-neutral-400"
                            >
                              Password
                            </label>
                            <input
                              type={showPassword ? "text" : "password"}
                              className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear text-black dark:text-black dark:placeholder:text-neutral-300"
                              id="exampleFormControlInput11"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-3 flex items-center text-neutral-500 dark:text-neutral-400 focus:outline-none"
                              onClick={() => setShowPassword(!showPassword)}
                              style={{ top: '75%', transform: 'translateY(-60%)' }}
                            >
                              {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                          </div>

                          {/* Submit button */}
                          <div className="mb-12 pb-1 pt-1 text-center">
                            <button
                              className="animate-slidein700 opacity-0 py-2 hover:bg-blue-600 hover:text-white justify-center whitespace-nowrap dark:bg-blue-600 dark:text-white dark:border-slate-600 dark:hover:bg-blue-700 dark:hover:text-white shadow focus:ring-blue-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                              type="button"
                              style={{
                                background: 'linear-gradient(to right, #54D9D1, #2B75E1, #5EA8E7, #1C41CD)',
                              }}
                            >
                              Log in
                            </button>

                            {/* Forgot password link */}
                            <a className="text-cyan-950" href="#!">Forgot password?</a>
                          </div>

                          {/* Register button */}
                          <div className="flex items-center justify-between pb-6">
                            <p className="mb-0 me-2 text-cyan-950">Don't have an account?</p>
                            <button
                              type="button"
                              className="bg-blue-700 inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* Right column container with background, description, and image */}
                    <div className="lg:w-5/12 h-full flex flex-col" style={{ background: 'linear-gradient(to right, #54D9D1, #2B75E1, #5EA8E7, #1C41CD)' }}>
                      <div className="px-4 py-4 text-white md:mx-6 md:p-8 flex-shrink-0">
                        <h4 className="mb-2 text-l font-semibold">
                          We are more than a learning language website
                        </h4>
                        <p className="text-sm mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </p>
                      </div>
                      <div className="flex-grow flex justify-center items-center mt-[-20px]">
                        <img src={loginImg} alt="Login" className="w-full h-auto object-cover" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
