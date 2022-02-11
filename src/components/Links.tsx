import React, { useContext } from "react";
import { LinksContext } from "../contexts";

const linkStyles = "text-sm leading-tight";

export const Links: React.FC = () => {
  const { links } = useContext(LinksContext);

  return (
    <div className="mt-10 overflow-y-auto flex-1">
      <h3 className="mb-5 font-bold">Links</h3>
      <div className="space-y-4">
        {links.map((l, i) => (
          <div key={i}>
            <h4 className="font-medium text-base">{l.title}</h4>
            <div className="flex content-center">
              <span className={linkStyles}>{l.from}</span>
              <span className="leading-tight mx-2">{"->"}</span>
              <span className={linkStyles}>{l.to}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
