import React from "react";

export const Header = () => {
  return (
    <section className="max-w-xl">
      <h2 className="mb-4 text-5xl font-black">
        Never Miss a Birthday Wish Again!
      </h2>
      <p className="text-md">
        Effortlessly schedule personalized email messages for all your contacts.
        Celebrate every special day, on time, every time, with{" "}
        <span className="font-bold">wishbday!</span>
      </p>
      <div className="flex gap-2 mt-4">
        <a href="/dashboard" className="btn btn-primary">
          Get Started
        </a>
        <a
          href="https://github.com/paulbgtr/wishbday"
          className="btn btn-primary"
        >
          ⭐ Star on GitHub
        </a>
      </div>
    </section>
  );
};
