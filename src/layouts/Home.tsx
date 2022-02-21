import React, { useState } from "react";
import { Form, Links } from "../components";
import { LinksContext } from "../contexts";
import { LinkType } from "../types/link";
import {
  addLinkToLocalStorage,
  getLinksFromLocalStorage,
  removeLinkFromLocalStorage,
} from "../utils/localStorage";

export const HomeLayout = () => {
  const [links, setLinks] = useState<LinkType[]>(getLinksFromLocalStorage());

  const addLink = (link: LinkType) => {
    addLinkToLocalStorage(link);
    setLinks((prev) => [...prev, link]);
  };

  const removeLink = (linkId: string) => {
    removeLinkFromLocalStorage(linkId);
    setLinks((prev) => [...prev].filter((l) => l.id !== linkId));
  };

  return (
    <LinksContext.Provider value={{ links, addLink, removeLink }}>
      <Form />
      <Links />
    </LinksContext.Provider>
  );
};
