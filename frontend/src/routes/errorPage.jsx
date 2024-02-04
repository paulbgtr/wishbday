export const ErrorPage = () => {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">
            Oops... The page that you are looking for doesn&apos; exist
          </p>
          <a href="/dashboard" className="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
