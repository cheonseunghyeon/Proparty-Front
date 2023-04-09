import { dbService } from "fbase";
import { doc, deleteDoc, updateDoc }from"firebase/firestore";

//리터럴
const NweetTextRef =doc(dbService, "nweets", `${nweetObj.id}`);

// delete 부분
await deleteDoc(NweetTextRef );

//update 부분
await updateDoc(NweetTextRef, {
text: newNweet,
});
