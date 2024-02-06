import { Contact } from "./Contact";

export const ContactList = ({ contacts }) => {
  contacts = contacts.slice(-2);

  return (
    <div className="shadow-xl card">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Your Contacts</h2>
          <a className="text-gray-400 hover:opacity-80" href="/contacts">
            View All
          </a>
        </div>
        <div className="grid justify-around">
          {contacts.map((contact) => (
            <>
              <Contact
                key={contact.id}
                contactName={contact.name}
                wishTitle={contact.wishTitle}
                wishBody={contact.wishBody}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
