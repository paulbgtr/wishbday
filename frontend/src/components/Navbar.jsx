import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { isLoading, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const res = await fetch("http://localhost:3000/auth/sign-out", {
      credentials: "include",
    });

    return res.status === 200 && navigate("/sign-in");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="text-xl btn btn-ghost">wishbday</a>
      </div>
      {!isLoading && (
        <div className="navbar-end">
          {isLoggedIn ? (
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a href="/settings">Settings</a>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>Sign Out</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <a href="/sign-in" className="btn btn-primary">
              Sign In
            </a>
          )}
        </div>
      )}
    </div>
  );
};
