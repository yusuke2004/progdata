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