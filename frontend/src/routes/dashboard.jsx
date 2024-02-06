import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import useAuth from "../hooks/useAuth";
import { Loading } from "../components/Loading";
import { EmptyDashboard } from "../pagesComponents/dashboard/EmptyDashboard";
import { DashboardView } from "../pagesComponents/dashboard/DashboardView";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { userProfile } = useAuth();
  const [isDashboardEmpty, setIsDashboardEmpty] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (!userProfile.id) {
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
          setContacts(resData.contacts);
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
        <EmptyDashboard />
      ) : (
        <DashboardView contacts={contacts} />
      )}
    </Layout>
  );
};

export default Dashboard;
