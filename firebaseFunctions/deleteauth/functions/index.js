const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.auth();

exports.deleteUser = functions.firestore
  .document("users/{userId}")
  .onDelete(async (snap, context) => {
      console.log("start");
      const deletedValue = context.resource.name.toString().split("/").reverse()[0].toString().trim();
      console.log("Deleted User from Firestore: ", deletedValue);
      console.log("Deleting User for Auth");
      const res = await db.deleteUser(deletedValue);  
      console.log("Deleted User from Auth: ", res);
      console.log("end");
    });
