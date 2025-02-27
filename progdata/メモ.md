```bash
git init # リポジトリを作成
git status # 現在のブランチとファイルの状態を確認
git branch # ブランチの一覧を表示
```

# git で保存して GitHub にアップロードする方法
```bash
git add .
git commit -m "コミット"
git push origin main
```

# 例）add_buttonというブランチを作成、移動、追加
```bash
# git branch add_button # 作成
# git checkout add_button # 移動

git checkout -b add_button # 作成＆移動

git checkout master # add,commitしたあとmasterに移動
git merge add_button # 追加
```

# フォルダ
/assets: 画像・フォント・グローバルCSSを配置
/components: 再利用可能なUIコンポーネント（ボタン、ナビバーなど）
/pages: 再利用可能なUIコンポーネント（ボタン、ナビバーなど）
/context: グローバルな状態管理（例: Firebaseの認証情報）
/hooks: カスタムフックを作成（例: useAuth.js）
firebase.js: Firebaseの設定
App.jsx: react-router-dom でページ遷移を管理
main.jsx: ReactDOM で App.jsx をレンダリング

