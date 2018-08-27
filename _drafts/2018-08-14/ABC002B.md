---
layout: single
categories: writeup
title: B - 罠 \| AtCoder Beginner Contest 002 
tags: 競プロ AtCoder ABC002 100
mathjax: true
---

[B - 罠 \| AtCoder Beginner Contest 002](https://beta.atcoder.jp/contests/abc002/tasks/abc002_2){:target="_blank"}

## 解法
- 文字列を走査し母音以外を1字毎に出力する

or

- push_back()で子音のみの文字列を生成し出力する

前者の方が早そうなので前者を採用

### コーナーケース検討
この解法なら文字列に子音が含まれなくても改行が出力されるので問題ないが，問題文で最低1字の子音の存在が保証されている．

## 実装

[Submission](https://beta.atcoder.jp/contests/abc002/submissions/3001990){:target="_blank"}

### データ構造・アルゴリズム
特になし