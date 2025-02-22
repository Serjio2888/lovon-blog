import React from "react";
import Support from "@/components/Support";

const SupportPage = () => {
  return (
    <main>
      <Support formId={process.env.FORM_ID!} />
    </main>
  );
};

export default SupportPage;
