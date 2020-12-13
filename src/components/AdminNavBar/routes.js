import urls from "../../../utils/urls";

const routes = [
  {
    name: "BLOGS",
    link: urls.pages.admin.blogs,
    auth: false,
  },
  {
    name: "SUBSCRIBERS",
    link: urls.pages.admin.subscribers,
    auth: false,
  },
  {
    name: "Admin",
    link: urls.pages.admin.profile,
    auth: true,
  },
];

export default routes;
