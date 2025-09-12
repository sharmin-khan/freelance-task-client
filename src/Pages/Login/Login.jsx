import React, { use, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import loginAnimation from "../../assets/images/loginAnimation.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { logInUser, signInWithGoogle } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "All fields required",
        text: "Please fill in both email and password.",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Password Too Short",
        text: "Password must be at least 6 characters.",
      });
      return;
    }

    logInUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successfully",
          text: "Welcome back!",
          timer: 1500,
          showConfirmButton: false,
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Enter valid email and password.",
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Google Log In Successfully",
          text: "Welcome to your account!",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Log In Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-20 overflow-x-hidden">
    
       {/* Animation (only on large devices) */}
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
        <Lottie
          animationData={loginAnimation}
          loop={true}
          className="max-w-md w-full h-[500px] shadow-2xl rounded-2xl"
        />
      </div>
      {/*form*/}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Login Now
          </h2>

          <label className="label mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered w-full mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <label className="label mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered w-full mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <button
            type="submit"
            className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white w-full text-lg mb-3 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>

          <div className="divider text-gray-400">OR</div>

          <div className="text-center mb-3">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="btn bg-white text-black border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 w-full"
            >
              {/* Google SVG */}
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>

          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
     </div>
   
  );
};

export default Login;
