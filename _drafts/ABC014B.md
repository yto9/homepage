---
layout: single
categories: writeup
title: B - 価格の合計 \| AtCoder Beginner Contest 014
tags: 競プロ AtCoder ABC014 100 bit
mathjax: true
---

[B - 価格の合計 \| AtCoder Beginner Contest 014](https://beta.atcoder.jp/contests/abc014/tasks/abc014_2)

## 解法
問題文の誘導どおりにXの2進表記のi番目のbitが立っているかどうかを判定し和を取る．
### コーナーケース検討
価格の総和は $$ \sum_{i=0}^{n-1} a_{i} < 1000 * 2^{20} < 2^{31} $$ 程度なのでintに収まる． 
## 実装
Xの2進表記のi番目のbitが立っているかどうかをX & (1 << i)で判定出来る．
```cpp
int a[20] = {};
int sum = 0;
REP(i, n){
    cin >> a[i];
}
REP(i, n){
    if (X & (1 << i)) sum += a[i]; 
}
cout << sum << endl;
```

[Submission](https://beta.atcoder.jp/contests/abc014/submissions/3015505){:target="_blank"}

### データ構造・アルゴリズム
- bit演算