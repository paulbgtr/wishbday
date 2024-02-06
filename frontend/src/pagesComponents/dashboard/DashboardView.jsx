import { ContactList } from "./ContactList";
import { BirthdayList } from "./BirthdayList";

export const DashboardView = ({ contacts }) => {
  return (
    <div>
      <h1 className="mb-3 text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-8">
        <ContactList contacts={contacts} />
        <BirthdayList contacts={contacts} />
      </div>
    </div>
  );
};
