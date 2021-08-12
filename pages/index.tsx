import AdvantagesTriad from "../src/landing/view/components/AdvantagesTriad";
import Hero from "../src/landing/view/components/Hero";
import { useLoginRedirect } from "../src/user/view/hooks/useLoginRedirect";

export default function Landing() {
  useLoginRedirect();
  return (
    <>
      <Hero />
      <AdvantagesTriad />
      {/*TODO: Add very simple CTA with two buttons: Join and I am a non-profit */}
    </>
  );
}
