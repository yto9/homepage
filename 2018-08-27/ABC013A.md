---
layout: single
categories: writeup
title: A - A \| AtCoder Beginner Contest 013
tags: 競プロ AtCoder ABC013 100 ascii
mathjax: true
---

[A - A \| AtCoder Beginner Contest 013](https://beta.atcoder.jp/contests/abc013/tasks/abc013_1){:target="_blank"}

## 解法
与えられるアルファベットがA~Eなので全パターンを直打ちしてもいいが，ascii値を使って'A'との距離を計算する．
### コーナーケース検討
'A'が0ではなく1に注意．

## 実装
```cpp
cout << X - 'A' + 1 << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc013/submissions/3015261){:target="_blank"}

### データ構造・アルゴリズム
- ascii