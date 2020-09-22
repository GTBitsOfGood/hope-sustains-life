const prod = process.env.NODE_ENV === "production";

export default {
  baseUrl: prod ? process.env.PROD_URL : "http://localhost:3000",
  dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017",
  pages: {
    index: "/",
    ssr: "/ssr",
    login: "/login",
    admin: "/admin",
    adminHome: "/admin/home",
    ourStory: "/ourstory",
    blogNews: "/blognews",
    hundredPromise: "/hundredPromise",
    ourWork: "/ourwork",
    joinClassroom: "/joinclassroom",
    joinLibrary: "/joinlibrary",
    donate: "/donate",
    newBlogPage: "/admin/blogs/new",
    app: {
      home: "/app",
    },
  },
  api: {
    example: "/api/example",
    user: {
      signUp: "/api/user/sign-up",
      login: "/api/user/login",
      logout: "/api/user/logout",
      getCurrent: "/api/user/get-current",
    },
  },
};
