import React, { useContext } from "react";
import { LinksContext } from "../contexts";

const linkStyles = "text-sm leading-tight";

export const Links: React.FC = () => {
  const { links, removeLink } = useContext(LinksContext);

  return (
    <div className="mt-10 overflow-y-auto flex-1">
      <h3 className="mb-5 font-bold">Links</h3>
      <div className="space-y-4">
        {links.length === 0 ? (
          <span>No added links</span>
        ) : (
          links.map((l) => (
            <div key={l.id} className="border-indigo-900 border rounded py-2 px-3">
              <h4 className="font-medium text-base">{l.title}</h4>
              <div className="flex content-center">
                <span className={linkStyles}>{l.from}</span>
                <span className="leading-tight mx-2">{"->"}</span>
                <span className={linkStyles}>{l.to}</span>
              </div>
              <div className="flex">
                <button
                  className="btn bg-red-400 text-white border-2 
                border-red-400 py-1 px-4 mt-3 hover:text-red-500 hover:bg-white 
                transition-all"
                  onClick={() => removeLink(l.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
