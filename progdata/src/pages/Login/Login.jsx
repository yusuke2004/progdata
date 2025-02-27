import { Link } from "react-router-dom";
import Auth from "../../components/Auth"; // 認証コンポーネント

function Login() {
    return (
        <div className="container">
            <h1>ログインページ</h1>
            <p>Googleアカウントでログインしてください。</p>
            
            <Auth /> {/* ログイン・ログアウトコンポーネント */}
            
            <nav>
                <Link to="/">トップへ戻る</Link> | 
                <Link to="/index">ツイート一覧</Link>
            </nav>
        </div>
    );
}

export default Login;
