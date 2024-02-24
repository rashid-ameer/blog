import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="prose xl:prose-lg mx-auto pb-8 pt-4">{children}</main>
  );
}

export default layout;
