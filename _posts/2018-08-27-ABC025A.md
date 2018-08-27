---
layout: single
categories: writeup
title: A - 25個の文字列 \| AtCoder Beginner Contest 025
tags: 競プロ AtCoder ABC025 100 string
mathjax: true
---

[A - 25個の文字列 \| AtCoder Beginner Contest 025](https://beta.atcoder.jp/contests/abc025/tasks/abc025_a){:target="_blank"}

## 解法
stringの配列を25個用意し辞書順に格納し，指定されたindexの文字列を返す．
### コーナーケース検討
1-indexでNが与えられることに注意．
## 実装
c++でstring同士は`+`で連結出来るが，char同士は出来ないことに注意する．
[Submission](https://abc104.contest.atcoder.jp/submissions/2977590){:target="_blank"}

### データ構造・アルゴリズム
- [string](http://www.cplusplus.com/reference/string/string/)