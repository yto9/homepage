---
layout: single
categories: writeup
title: A - 高橋くんと年齢 \| AtCoder Beginner Contest 019
tags: 競プロ AtCoder ABC019 100 multiset()
mathjax: true
---

[A - 高橋くんと年齢 \| AtCoder Beginner Contest 019](https://beta.atcoder.jp/contests/abc019/tasks/abc019_1)

## 解法
小さい順にソートし2番目の値を出力する．
### コーナーケース検討
同じ数を許容する．
## 実装
同じ数を許容できるようmultiset()を用いた．
```cpp
multiset<int> mst;
REP(i, 3) {
    int x; cin >> x;
    mst.insert(x);
}
auto itr = mst.begin();
cout << *++itr << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc019/submissions/3016337){:target="_blank"}

### データ構造・アルゴリズム
- [multiset()](http://www.cplusplus.com/reference/set/multiset/)