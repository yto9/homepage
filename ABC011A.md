---
layout: single
categories: writeup
title: A - 来月は何月？ \| AtCoder Beginner Contest 011
tags: 競プロ AtCoder ABC011 100 三項演算子?
mathjax: true
---

[A - 来月は何月？  \| AtCoder Beginner Contest 011](https://beta.atcoder.jp/contests/abc011/tasks/abc011_1)

## 解法
12月以外はN+1を返せばいい．

### コーナーケース検討
12月は1を返す．

## 実装
三項演算子を使った．三項演算子の返り値はexpressionなので以下のように()で括る必要がある． 
```cpp
cout << ((N != 12) ? N + 1: 1) << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc011/submissions/3014836){:target="_blank"}

### データ構造・アルゴリズム
- [三項演算子(?)](http://www.cplusplus.com/forum/articles/14631/)