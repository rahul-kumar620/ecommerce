import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const LoginForm = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation logic
    const newErrors = {};
    if (!employeeId.trim()) newErrors.employeeId = "Employee ID is required.";
    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Minimum 6 characters required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with login logic here (API call, etc.)
      console.log("Form submitted:", { employeeId, password });
    }
  };

  return (
    <form className="form_class" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="employeeId">Employee ID</label>
        <input
          type="text"
          id="employeeId"
          placeholder="Employee Id"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        {errors.employeeId && (
          <div className="text-danger error_message_login">
            {errors.employeeId}
          </div>
        )}
      </div>

      <div className="password_class">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <div className="text-danger error_message_login">
            {errors.password}
          </div>
        )}
      </div>

      <div>
        <Link className="forgot_p" to="/account/forgot-password">
          Forgot password?
        </Link>
      </div>

      <button type="submit" className="login_btn">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
