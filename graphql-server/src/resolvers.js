'use strict'
const connectDB = require("./database");
module.exports = {
  Query: {
    getProjects: async () => {
      let db;
      let Projects = [];
      try {
        db = await connectDB();
        Projects = await db.collection('Projects').find().toArray();
      } catch (error) {
        console.log(error);
      }
      return Projects;
    },
  },
};
