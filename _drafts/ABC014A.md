---
layout: single
categories: writeup
title: A - けんしょう先生のお菓子配り \| AtCoder Beginner Contest 014
tags: 競プロ AtCoder ABC014 100 int 三項演算子?
---

[A - けんしょう先生のお菓子配り \| AtCoder Beginner Contest 014](https://beta.atcoder.jp/contests/abc014/tasks/abc014_1){:target="_blank"}

## 解法
買い足す個数は
- 持っているお菓子の数が生徒数で割り切れれば
    - 0
- 割り切れなければ
    - b - a%b
### コーナーケース検討
a,bは0になることはない．
## 実装
```cpp
cout << ((a%b == 0) ? 0 : b - a%b) << endl;
```

[Submission](https://beta.atcoder.jp/contests/abc014/submissions/3015459){:target="_blank"}

### データ構造・アルゴリズム
- int型の扱い
- 三項演算子(?)