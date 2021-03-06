import React, { useEffect, useState } from "react";

import { dbService, storageService } from "fbase";
import Nweet from "components/Nweet";
import NweetFactory from "../components/NweetFactory";

const Home = ({ userObj }) => {
  // console.log(userObj);

  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      nweetArray.sort(function (a, b) {
        return b.createAt - a.createAt;
      });
      setNweets(nweetArray);
    });
  }, []);

  return (
    <div>
      <NweetFactory userObj={userObj} />
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
