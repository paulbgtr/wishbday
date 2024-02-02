import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        setIsLoading(true);

        const res = await fetch("http://localhost:3000/auth/me", {
          credentials: "include",
        });

        if (res.status === 200) {
          setIsLoggedIn(true);
        }

        console.log(res);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

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
            <button onClick={handleSignOut}>Sign Out</button>
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
