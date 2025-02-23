// Firestoreはコレクション→ドキュメント→フィールドという階層構造で保存されている
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tweets, setTweets] = useState([]);

  /* useEffectは副作用を実行するためのreactフック（APIからデータを取得、イベントリスナーを追加、タイマーをセット）
    第二引数の空の配列は「コンポーネントが初めて画面に表示されたときだけ実行」 */
  useEffect(() => {

    // getDocsでFirestoreのdbにあるTweetsコレクションからすべてのドキュメントを取得 
    getDocs(collection(db, "tweets"))
      .then((snapshot) => {
        const newTweets = [];
        snapshot.forEach((document) => {
          newTweets.push({
            id: document.id,
            // ドキュメントに保存されているデータを展開（textなど）
            ...document.data(),
          });
        });
        /* UserStateで定義したリストを更新→画面が自動で更新
            ツイートリストが最新のFirestoreデータに変更 */
        setTweets(newTweets);
      });
  }, []);

  const postTweet = () => {
    const tweet = {
      text: "こんにちは、ツイートの本文です。",
    };
    // addDocでtweetのデータをFirestoreのdbにあるtweetsコレクションに追加
    addDoc(collection(db, "tweets"), { ...tweet, })
    .then((ref) => {
      // newTweets配列に既存のデータをコピー
      const newTweets = [...tweets];
      newTweets.push({
        // 新しいドキュメントのidとデータを追加
        id: ref.id,
        ...tweet,
      });
      setTweets(newTweets);
    });
  };

  return (
    <div>
      <button onClick={postTweet}>ツイート</button>
      <div>
        {/* map:配列の各要素を変換して新しい配列を返すメソッド */}
        {tweets.map((tweet) => (
          /* key:Reactが要素を一意に識別するために必要
            key={tweet.id} によって各ツイートが持つFirestoreのIDをユニークキーとして指定 */
          <p key={tweet.id}>{tweet.text}</p>
        ))}
      </div>
    </div>
  );
}

export default App;