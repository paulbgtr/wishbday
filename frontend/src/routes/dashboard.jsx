import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Layout } from "../components/Layout";

const Dashboard = () => {
  const { isLoggedIn, isLoading } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/sign-in");
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout navbar>
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
    </Layout>
  );
};

export default Dashboard;
