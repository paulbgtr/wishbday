export const BirthdayList = ({ contacts }) => {
  return (
    <div className="shadow-md card bg-base-100">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Nearest Birthdays</h2>
          <a className="text-gray-400 hover:opacity-80" href="/birthdays">
            View All
          </a>
        </div>
        <div className="grid justify-center gap-3">
          {contacts.map((contact) => (
            <div key={contact.id}>
              <h3 className="font-bold">{contact.name}</h3>
              <span>{contact.wishDate.split("T")[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
