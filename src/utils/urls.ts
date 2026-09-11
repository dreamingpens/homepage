export const withBase = (url: string) =>
  url.startsWith("/") && !url.startsWith("//")
    ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${url}`
    : url;
