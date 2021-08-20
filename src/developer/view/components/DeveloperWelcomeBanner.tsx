import Link from "next/link";
import React from "react";
import Button from "../../../common/view/components/atoms/Button";
import { User } from "../../../user/domain/User";

interface Props {
  user: User;
}

export default function DeveloperWelcomeBanner({ user }: Props) {
  return (
    <section className="rounded p-4 border border-cta text-cta-800 space-y-3 bg-cta-200">
      <h3 className="text-xl font-display font-bold pb-4 text-center">
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
        What are you waiting for? <strong>Choose your first challenge!</strong>
      </p>
      <div className="flex justify-center pt-4">
        <Link href="/challenges" passHref>
          <Button color="cta" isLink>
            Explore challenges
          </Button>
        </Link>
      </div>
    </section>
  );
}
