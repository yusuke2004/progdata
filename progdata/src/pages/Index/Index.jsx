import { Link } from "react-router-dom";
import TweetList from "../../components/TweetList"; // ツイート一覧表示コンポーネント

function Index() {
    return (
        <div className="container">
            <h1>ツイート一覧 (OGP付き)</h1>
            <nav>
                <Link to="/">トップへ</Link> | 
                <Link to="/post">投稿する</Link>
            </nav>
            <TweetList /> {/* ツイート一覧を表示 */}
        </div>
    );
}

export default Index;
