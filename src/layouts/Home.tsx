import React, { useState } from "react";
import { Form, Links } from "../components";
import { LinksContext } from "../contexts";
import { LinkType } from "../types/link";

export const HomeLayout = () => {
  const [links, setLinks] = useState<LinkType[]>([]);

  const addLink = (link: LinkType) => {
    setLinks((prev) => [...prev, link]);
  };

  return (
    <LinksContext.Provider value={{ links, addLink }}>
      <Form />
      <Links />
    </LinksContext.Provider>
  );
};
