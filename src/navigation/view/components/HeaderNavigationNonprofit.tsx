import Link from 'next/link'
import React from "react";
import Button from "../../../common/view/components/atoms/Button";

export default function HeaderNavigationNonprofit() {
  return (
    <Link href="/challenges/new" passHref>
      <Button isLink>Launch challenge</Button>
    </Link>
  );
}
