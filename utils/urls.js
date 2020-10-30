const prod = process.env.NODE_ENV === "production";

export default {
  baseUrl: prod ? process.env.PROD_URL : "http://localhost:3000",
  dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017",
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
    hundredPromise: "/hundredpromise",
    ourWork: "/ourwork",
    joinClassroom: "/joinclassroom",
    joinLibrary: "/joinlibrary",
    donate: "/donate",
    learnMore: "/learnmore",
    tanzania: "/about/tanzania",
    bangledesh: "/about/bangledesh",
    haiti: "/about/haiti",
    contactUs: "/contactus",
  },
  api: {
    user: {
      signUp: "/api/user/sign-up",
      login: "/api/user/login",
      logout: "/api/user/logout",
      getCurrent: "/api/user/get-current",
      updateCurrent: "/api/user/update-current",
    },
    blogs: {
      index: "/api/blogs",
      publish: "/api/blogs/publish",
    },
    subscribers: {
      index: "/api/subscribers",
    },
    email: {
      contactUs: "/api/email/contact-us",
    },
  },
};
