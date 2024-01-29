import React from "react";
import { Card } from "./Card";

export const Features = () => {
  return (
    <section>
      <div className="mb-5 text-center">
        <h2 className="text-3xl font-bold">Wait... What&apos;s wishbday?</h2>
        <p>
          A simple yet powerful tool to help you remember the birthdays of your
          loved ones.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Card
          title="As Free as in Freedom"
          description="No hidden fees, no premium plans, no ads, no BS."
        />
        <Card
          title="As Simple as Cake"
          description="Just add your contacts and schedule your messages. That's it!"
        />
        <Card
          title="As Secure as Fort Knox"
          description="Your data is encrypted and stored securely. We don't share it with
            any third parties."
        />
        <Card
          title="As Open as the Sky"
          description="The source code is available on GitHub. Feel free to contribute!"
        />
      </div>
    </section>
  );
};
