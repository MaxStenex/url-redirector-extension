import { createContext } from "react";
import { LinkType } from "../types/link";

type ContextType = {
  links: LinkType[];
  addLink: (link: LinkType) => void;
};

export const LinksContext = createContext<ContextType>({
  links: [],
  addLink: () => {},
});
