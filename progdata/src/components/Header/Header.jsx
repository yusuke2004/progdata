import { Link } from "react-router-dom";
import "./Header.css"; // ヘッダー用のCSSを適用

function Header() {
  return (
    <header className="header">
      <h1 className="logo">My App</h1>
      <nav>
        <ul>
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="/post">投稿</Link></li>
          <li><Link to="/index">一覧</Link></li>
          <li><Link to="/login">ログイン</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
