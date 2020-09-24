import urls from "../../../utils/urls";

const routes = [
  {
    name: "Blogs",
    link: urls.pages.adminBlogs,
    auth: false,
  },
  {
    name: "Donations",
    link: urls.pages.adminDonations,
    auth: false,
  },
  {
    name: "Subscribers",
    link: urls.pages.adminSubscribers,
    auth: false,
  },
  {
    name: "Admin",
    link: urls.pages.app.adminEditProfile,
    auth: true,
  },
];

export default routes;