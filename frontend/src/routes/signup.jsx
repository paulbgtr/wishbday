const SignUp = () => {
  return (
    <div className="min-h-screen hero">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <div className="shadow-xl card w-96 bg-base-100">
            <div className="items-center text-center card-body">
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
                  className="w-full max-w-xs input input-bordered"
                />
              </label>
              <label className="w-full max-w-xs form-control">
                <div className="label">
                  <span className="label-text">Your password</span>
                </div>
                <input
                  type="password"
                  className="w-full max-w-xs input input-bordered"
                />
              </label>
              <label className="w-full max-w-xs form-control">
                <div className="label">
                  <span className="label-text">Repeat your password</span>
                </div>
                <input
                  type="password"
                  className="w-full max-w-xs input input-bordered"
                />
              </label>
              <div className="mt-3 card-actions">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
