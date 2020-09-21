import mongoDB from "../index";

export async function getBlogs() {
  await mongoDB();

  /* Get the blogs from the database and return them */
}

export async function createBlog({ title, body }) {
  if (title == null || body == null) {
    throw new Error("Title and body must be provided");
  }

  await mongoDB();

  /* Create new blog and save it */
}
