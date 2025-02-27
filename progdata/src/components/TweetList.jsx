import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";

function TweetList() {
    const [tweets, setTweets] = useState([]);
    const user = auth.currentUser;

    useEffect(() => {
        const fetchTweets = async () => {
            const snapshot = await getDocs(collection(db, "tweets"));
            setTweets(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        };
        fetchTweets();
    }, []);

    const deleteTweet = async (id) => {
        await deleteDoc(doc(db, "tweets", id));
        // tweet.idではないツイートだけセットする
        setTweets(tweets.filter((tweet) => tweet.id !== id));
    };

    return (
        <div className="tweet-list">
            {tweets.map((tweet) => (
                <div key={tweet.id} className="tweet">
                    <p><strong>{tweet.userName}</strong></p>
                    {tweet.url && (
                        <div className="preview">
                            <a href={tweet.url} target="_blank" rel="noopener noreferrer">
                                {tweet.url}
                            </a>
                            {tweet.ogpImage ? (
                                <img src={tweet.ogpImage} alt="OGP Preview" referrerPolicy="no-referrer" />
                            ) : (
                                <p></p>
                            )}
                        </div>
                    )}
                    {user && tweet.userId === user.uid && (
                        <button className="delete-btn" onClick={() => deleteTweet(tweet.id)}>削除</button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default TweetList;
