import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleFetch = async (email, password) => {
    const res = await fetch("http://localhost:3000/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return res;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      return setIsError(true);
    }

    setIsError(false);

    const res = await handleFetch(email, password);

    if (res.status == 200) {
      navigate("/sign-in");
    }
  };

  return (
    <div className="min-h-screen hero">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <div className="shadow-xl card w-96 bg-base-100">
            <form
              onSubmit={handleSubmit}
              className="items-center text-center card-body"
            >
              <h2 className="card-title">Sign Up</h2>
              <p className="text-sm">
                Create a new account or{" "}
                <a href="/sign-in" className="link">
                  sign in
                </a>
              </p>
              <label className="w-full max-w-xs form-control">
                <div className="label">
                  <span className="label-text">Your email</span>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full max-w-xs input input-bordered"
                />
              </label>
              <label className="w-full max-w-xs form-control">
                <div className="label">
                  <span className="label-text">Your password</span>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full max-w-xs input input-bordered"
                />
              </label>
              <label className="w-full max-w-xs form-control">
                <div className="label">
                  <span className="label-text">Repeat your password</span>
                </div>
                <input
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => {
                    setRepeatPassword(e.target.value);
                  }}
                  className="w-full max-w-xs input input-bordered"
                />
              </label>
              {isError && (
                <p className="text-sm text-error">Passwords do not match</p>
              )}
              <div className="mt-3 card-actions">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
