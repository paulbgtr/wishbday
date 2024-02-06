export const DashboardView = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <h2>{contact.name}</h2>
          <p>{contact.email}</p>
        </div>
      ))}
    </div>
  );
};
