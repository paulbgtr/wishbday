import { useState } from "react";

export const AddContactForm = ({ userEmail }) => {
  const [sendingEmail, setSendingEmail] = useState(userEmail);
  const [contactName, setContactName] = useState("");
  const [wishTitle, setWishTitle] = useState("");
  const [wishBody, setWishBody] = useState("");
  const [wishDate, setWishDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="w-full max-w-xs form-control">
        <div className="label">
          <span className="label-text">Your Email</span>
        </div>
        <input
          type="text"
          value={sendingEmail}
          placeholder="Type here"
          className="w-full max-w-xs input input-bordered"
          disabled
        />
      </label>
      <label className="w-full max-w-xs form-control">
        <div className="label">
          <span className="label-text">Contact Name</span>
        </div>
        <input
          type="text"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          placeholder="Type here"
          className="w-full max-w-xs input input-bordered"
        />
      </label>
      <label className="w-full max-w-xs form-control">
        <div className="label">
          <span className="label-text">Title of the Wish</span>
        </div>
        <input
          type="text"
          value={wishTitle}
          onChange={(e) => setWishTitle(e.target.value)}
          placeholder="Type here"
          className="w-full max-w-xs input input-bordered"
        />
      </label>
      <label className="w-full max-w-xs form-control">
        <div className="label">
          <span className="label-text">Text of the Wish</span>
        </div>
        <input
          type="text"
          value={wishBody}
          onChange={(e) => setWishBody(e.target.value)}
          placeholder="Type here"
          className="w-full max-w-xs input input-bordered"
        />
      </label>
      <label className="w-full max-w-xs form-control">
        <div className="label">
          <span className="label-text">Date of the Wish</span>
        </div>
        <input
          type="date"
          value={wishDate}
          onChange={(e) => setWishDate(e.target.value)}
          placeholder="Type here"
          className="w-full max-w-xs input input-bordered"
        />
      </label>
      <button className="mt-3 btn btn-primary">Add Contact</button>
    </form>
  );
};
