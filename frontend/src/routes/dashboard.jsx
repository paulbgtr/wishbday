import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import useAuth from "../hooks/useAuth";
import { Loading } from "../components/Loading";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { userProfile } = useAuth();
  const [isDashboardEmpty, setIsDashboardEmpty] = useState(true);

  useEffect(() => {
    if (!userProfile.id) {
      setIsLoading(false);
      return;
    }

    const fetchContacts = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/users/${userProfile.id}/contacts`
        );
        const resData = await res.json();

        if (resData.contacts.length > 0) {
          setIsDashboardEmpty(false);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchContacts();
  }, [userProfile]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout navbar>
      {isDashboardEmpty ? (
        <div className="hero">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold">
                Echo, echo, echo... it&apos;s too quiet around here!
              </h2>
              <p className="py-6">
                Kickstart the fun by adding some contacts. Let&apos;s transform
                this ghost town into a lively gathering, shall we?
              </p>
              <a href="/contacts/add-contact" className="btn btn-primary">
                Bring on the Crowd
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>Hel</div>
      )}
    </Layout>
  );
};

export default Dashboard;
