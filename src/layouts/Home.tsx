import React, { useState } from "react";
import { Form, Links } from "../components";
import { LinksContext } from "../contexts";
import { LinkType } from "../types/link";

export const HomeLayout = () => {
  const [links, setLinks] = useState<LinkType[]>([]);

  const addLink = (link: LinkType) => {
    setLinks((prev) => [...prev, link]);
  };

  const removeLink = (linkId: string) => {
    setLinks((prev) => [...prev].filter((l) => l.id !== linkId));
  };

  return (
    <LinksContext.Provider value={{ links, addLink, removeLink }}>
      <Form />
      <Links />
    </LinksContext.Provider>
  );
};
