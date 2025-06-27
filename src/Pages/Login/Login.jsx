import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.scss";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (isSignup) {
      console.log("Signing up:", data);
      // API call for sign up here
    } else {
      console.log("Logging in:", data);
      // API call for login here
    }
  };

  return (
    <div className="login-container">
      <div className="sub-contaner">
        <div className="login-left">
          <img
            src="https://res.cloudinary.com/dqprmy5ro/image/upload/v1750745819/pexels-sabir-khan-shourov-1169063-16709284_wtdyn0.jpg"
            alt="Login visual"
          />
        </div>
        <div className="login-right">
          <div className="login-form">
            <h2 className="main-heading">{isSignup ? "Sign Up" : "Login"}</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Username */}
              <input
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: "Username is required",
                })}
              />
              {errors.username && <p>{errors.username.message}</p>}

              {/* Email only for Signup */}
              {isSignup && (
                <>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </>
              )}

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).+$/,
                    message: "Must include one uppercase and one number",
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}

              <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
            </form>

            {/* Toggle Button */}
            <p className="toggle-form-text text-[14 px] p-1 flex justify-center gap-3">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                className="toggle-btn bg-amber-500 border-1 rounded-sm"
                onClick={() => setIsSignup((prev) => !prev)}
              >
                {isSignup ? "Login" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
