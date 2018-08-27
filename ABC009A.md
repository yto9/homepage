---
layout: single
categories: writeup
title: A - 引越し作業 \| AtCoder Beginner Contest 009
tags: 競プロ AtCoder ABC009 100 int
mathjax: true
---

[A - 引越し作業 \| AtCoder Beginner Contest 009](https://beta.atcoder.jp/contests/abc009/tasks/abc009_1){:target="_blank"}

## 解法
出来るだけ両手を使うのが往復回数を減らすのには必要なので，両手を使う場合はN/2回．片手を使う場合はN%2回．
必要な往復数はint型でN/2+N%2．
### コーナーケース検討
N == 1の時 0 + 1 = 1でこれを満たす．
## 実装

[Submission](https://beta.atcoder.jp/contests/abc009/submissions/3006076){:target="_blank"}

### データ構造・アルゴリズム
- int型の扱い