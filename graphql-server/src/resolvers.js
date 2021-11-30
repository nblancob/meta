"use strict";
const connectDB = require("./database");
const { ObjectId } = require("mongodb");
module.exports = {
  Query: {
    getProjects: async () => {
      let db;
      let Projects = [];
      try {
        db = await connectDB();
        Projects = await db.collection("Projects").find().toArray();
      } catch (error) {
        console.log(error);
      }
      return Projects;
    },
    getActiveProjects: async () => {
      let db;
      let Projectsact = [];
      try {
        db = await connectDB();
        Projectsact = await db
          .collection("Projects")
          .find({ state: true })
          .toArray();
      } catch (error) {
        console.log(error);
      }
      return Projectsact;
    },
    getProjectByID: async (root, { id }) => {
      let db;
      let Project;
      try {
        db = await connectDB();
        Project = await db
          .collection("Projects")
          .findOne({ _id: ObjectId(id) });
      } catch (error) {
        console.log(error);
      }
      return Project;
    },
    getAdvances: async () => {
      let db;
      let Advances = [];
      try {
        db = await connectDB();
        Advances = await db.collection("Advances").find().toArray();
      } catch (error) {
        console.log(error);
      }
      return Advances;
    },
  },
  Mutation: {
    createAdvance: async (root, { input }) => {
      const newAdvance = Object.assign(input);
      let db;
      let Advances;
      try {
        db = await connectDB();
        Advances = db.collection("Advances").insertOne(newAdvance);
      } catch (error) {
        console.log(error);
      }
      return newAdvance;
    },
    addAdvance: async (root, { id, input }) => {
      let db;
      let Project;
      try {
        db = await connectDB();
        await db
          .collection("Projects")
          .updateOne({ _id: ObjectId(id) }, { $push: input });
        Project = await db
          .collection("Projects")
          .findOne({ _id: ObjectId(id) });
      } catch (error) {
        console.log(error);
      }
      return Project;
    },
    editAdvance: async (root, { id, input }) => {
      let db;
      let Advance;
      try {
        db = await connectDB();
        await db
          .collection("Advances")
          .updateOne({ _id: ObjectId(id) }, { $set: input });
        Advance = await db
          .collection("Advances")
          .findOne({ _id: ObjectId(id) });
      } catch (error) {
        console.log(error);
      }
      return Advance;
    },
  },
};
