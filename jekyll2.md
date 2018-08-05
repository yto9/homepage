---
layout: single
category: logs
title: jekyllを用いたサイト構築記 vol.2
---

[前回]()は，localhostからjekyllを用いたサイトを閲覧できるように開発環境を構築した．
![hello world](/images/hello.png)
既にjekyllのテンプレートを利用して記事が書ける状態になっているが，このままではインターネット経由で閲覧することは出来ない．
今回は[github pages](https://pages.github.com/)を利用してインターネット上に公開する手順をまとめる．

## 前提要件
- githubのアカウント
- (独自ドメイン)

githubのアカウントを持ってない人は[こちら](https://github.com/)から
## この記事での到達点
- jekyllで構築したサイトを公開


## 今回の作業log
- githubでこのサイト用に`yto9.github.io`というrepositoryを作成 
- `yto9.github.io`repositoryに`jekyll build`で作成したサイトをpush
- github pagesを用いて {githubのusername}.github.ioに公開(静的ホスティング)

この記事で加える変更は以上なので，これでわかる人は以下は読まなくて問題ない．

## 解説
今回の作業は，一般に[deploy]()と呼ばれる作業である．
アプリケーションの開発・実行環境には主に開発(develop/local)環境と(staging環境)と本番(release)環境があり，
〇〇環境にdeployすると言われる．ここで重要なのは環境が変わるだけでありコンテンツはただコピーされるだけということである．

今回はgithub pagesによる静的ホスティングサービスを本番環境として，githubにpushすることでdeployするという流れになる．


### 調査ログ
[前回]()はlocalhostからサイトが見れるように`jekyll serve`コマンドを利用した．
今回はインターネット経由で参照出来るドメインからサイトが見れるように静的ホスティングサービスを利用する．

githubの[help](https://help.github.com/articles/user-organization-and-project-pages/)を見てみると，github pageでは
- user/organization page
    - `<username>.github.io`に公開
- project page
    - `<username>.github.io/<projectname>`に公開

の2通りの公開方法があるようで，今回は特定のプロジェクトと言うよりは自身のポートフォリオ的なサイトを作っているのでuser pageとして公開する．
![github.io](/images/after_setting.png)
githubでは\<username\>.github.ioというrepository名のmasterブランチはuser pageとしてデフォルトして認識されるようになっている(画像のように緑色になっていれば適切に設定されている)．
そのため，[前回]()`jekyll build`で生成された_siteディレクトリの中身をそのままmasterブランチにpushすることで`<username>.github.io`に公開される．

![github pages](/images/github_pages.png)

### 独自ドメインと紐付ける(おまけ)
[Setting up an apex domain](https://help.github.com/articles/setting-up-an-apex-domain/#configuring-a-records-with-your-dns-provider)のページを参考に独自ドメインをgithub pagesに紐付ける．

お名前ドットコムで取得したドメインなのでその設定コンソールから以下のようにAレコードを追加(ここは会社・プラン毎に設定できる項目や方法が違うのでそれぞれのサービスでの設定方法を参照)．
![domain A](/images/A.png)

このようにterminalから設定が反映されたか確認できる．
![before A](/images/before_arecord.png)
![after A](/images/after_arecord.png)
無事新しいレコードの浸透が終わると以下のように{{site.url}}のドメインに紐付いたことが確認できる．
![redirect](/images/redirect.png)

## 参考文献
[github pages](https://pages.github.com/) /
[github help](https://help.github.com/categories/github-pages-basics/)
<!-- 静的ホスティングってサーバーとしてはどんな機構が動いてるんだろう(ex.README.mdにアクセスするとダウンローダが動く) -->
<!-- deployとか環境の話 -->
<!-- CNAMEってなんだろ -->