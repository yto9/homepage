---
layout: single
categories: writeup
title: B - N重丸 \| AtCoder Beginner Contest 026
tags: 競プロ AtCoder ABC026 100
mathjax: true
---

[B - N重丸 \| AtCoder Beginner Contest 026](https://beta.atcoder.jp/contests/abc026/tasks/abc026_b){:target="_blank"}

## 解法
与えられる半径を降順にソートし順に加算，減算を繰り返し和を取り最後に円周率をかけ出力する．
### コーナーケース検討
今回は問題ないが，2乗の和等を取る時にintをはみ出ないか注意する．
## 実装
円周率はmath.hで定義されている．M_PIを使う．また，デフォルトでは浮動小数点数は6桁(処理系依存？)しか表示されないので，小数点第6位まで表示されるように`fixed`,`setprecision`を用いて出力formatを指定する．
[Submission](https://beta.atcoder.jp/contests/abc026/submissions/3088945){:target="_blank"}

### データ構造・アルゴリズム
- [Stream manipulators](http://www.cplusplus.com/reference/library/manipulators/)による出力フォーマット指定
    - [fixed](http://www.cplusplus.com/reference/ios/fixed/)
    - [setprecision()](http://www.cplusplus.com/reference/iomanip/setprecision/)