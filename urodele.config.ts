export const config = {
  github: {
    login: "asharebox", // github login name, not user name
    repo: "asharebox.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "asharebox",
    brand: "bluefigca ",
    description: "Less is more",
  },
  footer: {
    copyright: "©  asharebox  ·  since 2026    ·",
    copyrightUrl: "https://asharebox.github.io",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
