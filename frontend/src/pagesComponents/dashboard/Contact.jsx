export const Contact = ({ contactName, wishTitle, wishBody }) => {
  if (wishTitle.length > 20) {
    wishTitle = wishTitle.substring(0, 20) + "...";
  }

  if (wishBody.length > 100) {
    wishBody = wishBody.substring(0, 100) + "...";
  }

  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">{contactName}</h3>
        <p>{wishTitle}</p>
        <p>{wishBody}</p>
      </div>
    </div>
  );
};
