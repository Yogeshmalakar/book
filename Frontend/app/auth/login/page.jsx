import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="w-full sm:h-screen flex justify-center items-center">
        <div className=" w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[26px]  p-3  py-12 px-8">
          <h2 className="text-center text-white font-semibold">LOGIN</h2>
          <form action="">
            <div className="mt-2">
              <label htmlFor="email" className="text-white block">
                Enter Email:
              </label>
              <input
                type="text"
                id="email"
                className="form-control mt-1 p-2 rounded-md"
                placeholder="Enter email"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="text-white block">
                Enter Password:
              </label>
              <input
                type="password"
                id="password"
                className="form-control mt-1 p-2 rounded-md"
                placeholder="Password"
              />
            </div>
            <div className="mt-2 flex items-center">
              <input type="checkbox" className="form-check-input" id="check" />
              <label
                htmlFor="check"
                className="form-check-label text-white ml-2"
              >
                Remember me
              </label>
              <Link href="/" className="text-white ml-4">
                Forget password
              </Link>
            </div>
            <div className="mt-1 flex items-center"></div>
            <div className="mt-3">
              <button className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out">
                Login
              </button>
            </div>
            <div className="text-center mt-4">
              <h5 className="text-white">Don't have an account?<Link
                href="/auth/register"
                className="group text-blue-400 transition-all duration-100 ease-in-out"
              >
                Register
              </Link>
 </h5>
            </div>
            <div className="mt-3 flex items-center justify-center flex-wrap">
              
              <button
                href="#"
                class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  class="max-w-[25px]"
                  src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                  alt="Google"
                />
              </button>
              <button
                href="#"
                class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  class="max-w-[25px]"
                  src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                  alt="Linkedin"
                />
              </button>
              <button
              href="#"
              class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                class="max-w-[25px]"
                src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                alt="Facebook"
              />
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
