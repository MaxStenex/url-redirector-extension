import { LinkType } from "../types/link";

export const getLinksFromLocalStorage = (): LinkType[] => {
  return JSON.parse(localStorage.getItem("savedLinks") || "[]");
};

const saveLinksToLocalStorage = (links: LinkType[]) => {
  localStorage.setItem("savedLinks", JSON.stringify(links));
};

export const addLinkToLocalStorage = (link: LinkType) => {
  const savedLinks = getLinksFromLocalStorage();

  saveLinksToLocalStorage([...savedLinks, link]);
};

export const removeLinkFromLocalStorage = (linkId: string) => {
  const savedLinks = getLinksFromLocalStorage();

  const filteredLinks = savedLinks.filter((l) => l.id !== linkId);

  saveLinksToLocalStorage(filteredLinks);
};
