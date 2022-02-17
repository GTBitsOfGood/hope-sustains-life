const prod = process.env.NODE_ENV === "production";

export default {
  baseUrl: prod ? process.env.PROD_URL : "http://localhost:3000",
  dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017",
  adminRoutes: ["admin", "resetpassword"],
  pages: {
    admin: {
      index: "/admin",
      home: "/admin/home",
      profile: "/admin/profile",
      blogs: "/admin/blogs",
      donations: "/admin/donations",
      subscribers: "/admin/subscribers",
      newBlog: "/admin/blogs/new",
    },
    index: "/",
    ourStory: "/ourstory",
    blogNews: "/blognews",
    ourWork: "/ourwork",
    joinClassroom: "/joinclassroom",
    joinLibrary: "/joinlibrary",
    donate: {
      index: "/donate",
      confirmation: "/donate/confirmation",
    },
    learnMore: "/learnmore",
    tanzania: "/about/tanzania",
    bangledesh: "/about/bangledesh",
    haiti: "/about/haiti",
    contactUs: "/contactus",
  },
  api: {
    users: "/api/users",
    blogs: "/api/blogs",
    subscribers: "/api/subscribers",
    emails: "/api/emails",
    donations: "/api/donations",
  },
};
