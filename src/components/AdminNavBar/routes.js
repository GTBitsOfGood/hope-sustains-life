import urls from "../../../utils/urls";

const routes = [
  {
    name: "Blogs",
    link: urls.pages.adminBlogs,
    auth: false,
    atEnd: false,
  },
  {
    name: "Donations",
    link: urls.pages.adminDonations,
    auth: false,
    atEnd: false,
  },
  {
    name: "Subscribers",
    link: urls.pages.adminSubscribers,
    auth: false,
    atEnd: true,
  },
  {
    name: "Admin",
    link: urls.pages.app.adminEditProfile,
    auth: true,
  },
];

export default routes;