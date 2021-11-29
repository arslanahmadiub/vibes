const functions = require("firebase-functions");
const moment = require('moment');

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.scheduledFunction=functions.pubsub.schedule("every 59 minutes").onRun(
    async (context) => {
        console.log("start");
        
        const collection = "users";

        const collectionListUsers = await db.collection(collection).get();

        collectionListUsers.docs.forEach(async (item) => {
            try{
                var itemData = item.data();
                if (itemData.expiry.toString().toLowerCase().trim().search("manual") == -1){
                    const createdate = itemData.createDate;
                    const expiry = itemData.expiry.toString().toLowerCase().trim();

                    const createdate_converted =  moment.duration(createdate).asHours();
                    const current_date_converted = moment.duration(moment.now()).asHours();
                    const expiry_converted = parseInt(expiry.split(" ")[0]);
                    
                    const difference = current_date_converted - createdate_converted;

                    if (difference > expiry_converted){
                        console.log("Deleting: ", itemData.userId, createdate, expiry, createdate_converted, current_date_converted, expiry_converted, difference);
                        const res = await db.collection(collection).doc(itemData.userId).delete();
                        console.log("Deletion response: ", res);
                    }

                }
                else{
                    console.log("Manual: ", itemData);
                }
            }catch(err){
                console.log("Error: ", err);
            }
        });

        console.log("end");

        return null;
    });
