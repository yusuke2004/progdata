import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";

function PostForm() {
    const [inputTweet, setInputTweet] = useState("");
    const user = auth.currentUser;
    const navigate = useNavigate();

    // ツイートのテキストからURLを抽出するための処理
    const extractUrl = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        // テキスト内のURLを探し、最初に見つかったURLを取得
        const match = text.match(urlRegex);
        // matchにURLが見つかれば最初のURL（match[0]）を返す。なければnullを返す。
        // trueの場合?の後の値、falseの場合:の後の値を返す。
        return match ? match[0] : null;
    };

    const API_KEY = "6e3528e34823faa803be1678990d6df2";
    // レビュー表示する画像のURLを取得
    const fetchOGPImage = async (url) => {
        try {
            // **Googleスプレッドシートのサムネイルを取得**
            if (url.includes("docs.google.com/spreadsheets/d/")) {
                const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
                if (fileIdMatch) {
                    return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w320`;
                }
            }
    
            // **Qiita の OGP画像を取得**
            if (url.includes("qiita.com")) {
                const apiUrl = `https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(url)}`;
                const response = await fetch(apiUrl);
                const data = await response.json();
    
                if (data.image) {
                    return data.image; // ✅ QiitaのOGP画像を取得
                }
            }
    
            // **通常のサイトのOGP画像を取得**
            const ogpApiUrl = `https://api.linkpreview.net/?key=YOUR_API_KEY&q=${encodeURIComponent(url)}`;
            const ogpResponse = await fetch(ogpApiUrl);
            const ogpData = await ogpResponse.json();
    
            if (ogpData.image) {
                return ogpData.image;
            }
    
            // **OGP画像が取得できなかった場合、ファビコンを取得**
            const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${new URL(url).hostname}`;
            const faviconResponse = await fetch(faviconUrl);
    
            if (!faviconResponse.ok) {
                return "";
            }
    
            return faviconUrl;
        } catch (error) {
            console.error("OGP取得エラー:", error);
            return "";
        }
    };
    
    
    

    const postTweet = async () => {
        if (!inputTweet || !user) return;

        const url = extractUrl(inputTweet);
        const ogpImage = url ? await fetchOGPImage(url) : "";

        const newTweet = {
            // URLが含まれてる場合、そのURLを除いた部分を表示
            text: inputTweet.replace(url, "").trim() || "",
            userName: user.displayName,
            userId: user.uid,
            createdAt: new Date(),
            url: url || "",
            ogpImage: "",
        };

        // Firebaseにツイートを追加し、ドキュメントIDを取得
        const docRef = await addDoc(collection(db, "tweets"), newTweet);
        // dbにあるtweetsコレクション内のidを参照、ogpImageを更新。
        if (ogpImage) {
            await updateDoc(doc(db, "tweets", docRef.id), { ogpImage });
        }
        setInputTweet("");
        navigate("/index");
    };

    return (
        <div className="tweet-form">
            <input
                type="text"
                placeholder="今何してる？（URLを含めるとプレビュー表示）"
                value={inputTweet}
                onChange={(e) => setInputTweet(e.target.value)}
            />
            <button onClick={postTweet}>投稿</button>
        </div>
    );
}

export default PostForm;
