export const validateLink = (linkURL: string): boolean => {
  try {
    const url = new URL(linkURL);

    return url.protocol === "http:" || url.protocol === "https:";
  } catch (error) {
    return false;
  }
};
