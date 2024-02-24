import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="prose mx-auto px-4 pb-8 pt-4 xl:prose-lg">{children}</main>
  );
}

export default layout;
