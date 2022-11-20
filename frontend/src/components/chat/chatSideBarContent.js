const sideBarNav = [
  "Create avatar",
  "Generated avatars",
  "Profile",
  "Support",
  "Settings",
  "Chat",
];

const chatSideBarContent = sideBarNav.map((nav) => ({
  name: nav,
  imageUrl: nav.toLowerCase().split(" ").join("-") + ".svg",
}));

export default chatSideBarContent;
