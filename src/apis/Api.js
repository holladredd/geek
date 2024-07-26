import axios from "axios";
//  for json server

// class Api {
//   constructor() {
//     this.instance = axios.create({
//       baseURL: "http://localhost:3000",
//     });
//   }

// for mongodb server

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:4321",
    });
  }

  // Live server connection
  // class Api {
  //   constructor() {
  //     this.instance = axios.create({
  //       baseURL: "https://geekserver.onrender.com",
  //     });
  //   }
  getBooks() {
    return this.instance.get("/books");
  }
  getRatings() {
    return this.instance.get("/ratings");
  }
  getComments() {
    return this.instance.get("/comments");
  }
  getGenres() {
    return this.instance.get("/genres");
  }
  getBackgroundImages() {
    return this.instance.get("/backgroundimages");
  }
  createBooks() {
    return this.instance.post("/books");
  }
  createGenres() {
    return this.instance.post("/genres");
  }
  createUsers(userData) {
    return this.instance.post("/users", userData);
  }
  getUsers(formData) {
    return this.instance.post("/users/login", formData);
  }
  PostComment(usercomment) {
    return this.instance.post("/comments", { ...usercomment });
  }
}
export default Api;
