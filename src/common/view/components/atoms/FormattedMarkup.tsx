import { polyfill } from "interweave-ssr";
polyfill();
import React from "react";
import Interweave from "interweave";
import { UrlMatcher, EmailMatcher } from "interweave-autolink";

export interface Props {
  markup: string;
}

export default function FormattedMarkup({ markup }: Props) {
  return (
    <article>
      <Interweave
        content={markup}
        matchers={[new UrlMatcher("url"), new EmailMatcher("email")]}
      />
    </article>
  );
}
