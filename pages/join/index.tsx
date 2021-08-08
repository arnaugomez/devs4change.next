import React, { useState } from "react";
import InputText from "../../src/common/view/components/forms/InputText";
import LoginFormCard from "../../src/user/view/components/LoginFormCard";

export default function Join() {
  const [email, setEmail] = useState("");

  return (
    <LoginFormCard title="Join">
      <InputText
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </LoginFormCard>
  );
}
