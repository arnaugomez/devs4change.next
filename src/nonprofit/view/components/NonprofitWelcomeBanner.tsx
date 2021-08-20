import Link from "next/link";
import React from "react";
import Button from "../../../common/view/components/atoms/Button";
import { User } from "../../../user/domain/User";

interface Props {
  user: User;
}

export default function NonprofitWelcomeBanner({ user }: Props) {
  return (
    <section className="rounded p-4 border border-brand-700 text-brand-900 space-y-3 bg-brand-200">
      <h3 className="text-xl font-display font-bold pb-4 text-center text-brand-800">
        Welcome to devs4change, {user.displayName}
      </h3>
      <p>
        In devs4change,{" "}
        <strong>
          nonprofits create challenges so that developers can apply and work
          together on them.
        </strong>
      </p>
      <p>
        Example challenges are: create a mobile app for members of an NGO,
        create a landing page for a fundraising campain, set up a blog...
      </p>
      <p>
        What are you waiting for? <strong>Create your first challenge!</strong>
      </p>
      <div className="flex justify-center pt-4">
        <Link href="/challenges/new" passHref>
          <Button isLink>
            Create a Challenge
          </Button>
        </Link>
      </div>
    </section>
  );
}
