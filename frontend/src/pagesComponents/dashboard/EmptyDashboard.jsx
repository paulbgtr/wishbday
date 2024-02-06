export const EmptyDashboard = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold">
            Echo, echo, echo... it&apos;s too quiet around here!
          </h2>
          <p className="py-6">
            Kickstart the fun by adding some contacts. Let&apos;s transform this
            ghost town into a lively gathering, shall we?
          </p>
          <a href="/contacts/add-contact" className="btn btn-primary">
            Bring on the Crowd
          </a>
        </div>
      </div>
    </div>
  );
};
