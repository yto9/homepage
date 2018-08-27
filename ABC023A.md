---
layout: single
categories: writeup
title: A - 加算王 \| AtCoder Beginner Contest 023
tags: 競プロ AtCoder ABC023 100 int
mathjax: true
---

[A - 加算王 \| AtCoder Beginner Contest 023](https://beta.atcoder.jp/contests/abc023/tasks/abc023_a)

## 解法
n進数の各桁を取り扱いたい場合は，nでの商，余りを考えればいい．今回はXが10進数なので10で割った商がXの10の位で，余りが1の位になる．
### コーナーケース検討
2桁の入力しかないので問題ないことは保証されている．
## 実装

[Submission](https://beta.atcoder.jp/contests/abc023/submissions/3059045){:target="_blank"}

### データ構造・アルゴリズム
- int型の扱い