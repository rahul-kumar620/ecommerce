import { useForm } from "react-hook-form";
import "./Login.scss";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("submiting the form", data);
  }
  return (
    <>
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
              <h2 className="main-heading">Account Login</h2>
              {/* form section */}
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

                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
