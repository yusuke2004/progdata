import { Link } from "react-router-dom";
import Auth from "../../components/Auth"; // 認証コンポーネントを追加（ログイン状態表示）

function Top() {
    return (
        <div className="container">
            <h1>ようこそ！</h1>
            <p>このアプリはURLプレビュー付きのツイートを投稿できるアプリです。</p>
            <Auth /> {/* ログイン・ログアウトボタン */}
            <nav>
                <Link to="/post">投稿する</Link> | 
                <Link to="/index">ツイート一覧</Link> | 
                <Link to="/login">ログインページへ</Link>
            </nav>
        </div>
    );
}

export default Top;
