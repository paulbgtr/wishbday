import { Layout } from "../components/Layout";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Loading } from "../components/Loading";
import { AddContactForm } from "../pagesComponents/addContact/AddContactForm";

const AddContact = () => {
  const navigate = useNavigate();

  const { isLoggedIn, isLoading, userProfile } = useAuth();

  const { email } = userProfile;

  if (!isLoggedIn) {
    navigate("/sign-in");
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Layout navbar>
      <section>
        <h1 className="text-xl font-bold">Add Contact</h1>
        <AddContactForm userEmail={email} />
      </section>
    </Layout>
  );
};

export default AddContact;
