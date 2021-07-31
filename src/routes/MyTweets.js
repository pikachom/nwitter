import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import Nweet from "components/Nweet";

const MyTweets = ({ userObj }) => {
  // console.log(userObj.uid);
  const [myTweets, setMyTweets] = useState([]);

  // useEffect(() => {
  //   dbService
  //     .collection("nweets")
  //     .where("creatorId", "==", userObj.uid)
  //     .orderBy("createdAt", "desc")
  //     .onSnapshot((snapshot) => {
  //       const myTweetArray = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       console.log(
  //         dbService
  //           .collection("nweets")
  //           .where("creatorId", "==", userObj.uid)
  //           .orderBy("createdAt", "desc")
  //           .get()
  //       );
  //       console.log(myTweetArray);
  //       setMyTweets(myTweetArray);
  //     });
  // }, []);

  const getMyTweets = async () => {
    const nweets = await dbService
      .collection("nweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createAt", "desc")
      .get();
    // console.log(nweets.docs.map((doc) => doc.data()));
    const myTweetArray = nweets.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setMyTweets(myTweetArray);
  };
  useEffect(() => {
    getMyTweets();
  }, []);

  return (
    <div>
      {myTweets.map((myTweet) => (
        <Nweet
          key={myTweet.id}
          nweetObj={myTweet}
          isOwner={myTweet.creatorId === userObj.uid}
        />
      ))}
    </div>
  );
};

export default MyTweets;
