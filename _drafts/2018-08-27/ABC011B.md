---
layout: single
categories: writeup
title: B - 名前の確認 \| AtCoder Beginner Contest 011
tags: 競プロ AtCoder ABC011 100 toupper() tolower()
mathjax: true
---

[B - 名前の確認 \| AtCoder Beginner Contest 011](https://beta.atcoder.jp/contests/abc011/tasks/abc011_2){:target="_blank"}

## 解法
1文字目だけ大文字であとは小文字にする．
### コーナーケース検討
1文字しか無い場合はサンプルケースのように大文字1文字返せばいいので特に問題はない．
## 実装
tolower()/toupper()は該当するasciiコードの場合以外はそのままの値を返すのでこれらを使うとスッキリ書ける．
```cpp
for(int i = 1; i < S.size(); i++) S[i] = tolower(S[i]);
S[0] = toupper(S[0]);
```
[Submission](https://beta.atcoder.jp/contests/abc011/submissions/3014919){:target="_blank"}

### データ構造・アルゴリズム
- [toupper()](http://www.cplusplus.com/reference/cctype/toupper/)
- [tolower()](http://www.cplusplus.com/reference/cctype/tolower/)