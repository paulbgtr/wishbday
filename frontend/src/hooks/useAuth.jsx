import { useState, useEffect } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        setIsLoading(true);

        const res = await fetch("http://localhost:3000/auth/me", {
          credentials: "include",
        });

        if (res.status === 200) {
          const resData = await res.json();
          const { user } = resData;

          setUserProfile(user);

          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        console.error(err);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  return { isLoggedIn, isLoading, userProfile };
};

export default useAuth;
