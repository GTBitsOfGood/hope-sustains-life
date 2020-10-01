import urls from "../../../utils/urls";

const routes = [
  {
    name: "BLOGS",
    link: urls.pages.adminBlogs,
    auth: false,
  },
  {
    name: "DONATIONS",
    link: urls.pages.adminDonations,
    auth: false,
  },
  {
    name: "SUBSCRIBERS",
    link: urls.pages.adminSubscribers,
    auth: false,
  },
  {
    name: "Admin",
    link: urls.pages.adminEditProfile,
    auth: true,
  },
];

export default routes;
