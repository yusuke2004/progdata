import { Link } from "react-router-dom";
import PostForm from "../../components/PostForm"; // 投稿フォームコンポーネント

function Post() {
    return (
        <div className="container">
            <h1>投稿ページ</h1>
            <nav>
                <Link to="/">トップへ</Link> | 
                <Link to="/index">ツイート一覧</Link>
            </nav>
            <PostForm /> {/* 投稿フォームを表示 */}
        </div>
    );
}

export default Post;
