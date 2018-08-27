---
layout: single
categories: writeup
title: A - 足し算 \| AtCoder Beginner Contest 021
tags: 競プロ AtCoder ABC021 100 bit
mathjax: true
---

[A - 足し算 \| AtCoder Beginner Contest 021](https://beta.atcoder.jp/contests/abc021/tasks/abc021_a)

## 解法
同じ2の累乗数をいくつ使ってもいいとあるのでこの問題の範囲では1をN個とすればよいが，各2の累乗数の使用回数を1回以下と考えると2の累乗数の和でNを表すというのはNを2進数表記することなので今回はその方針で解いた．

### コーナーケース検討
N<=10なので4bitあれば表現できる．

## 実装
```cpp
REP(i, 4) {
    if (N & 1 << i){
        count++;
    }
}
cout << count << endl;
REP(i, 4) {
    if (N & 1 << i){
        cout << (1 << i) << endl;
    }
}
```
[Submission](https://beta.atcoder.jp/contests/abc021/submissions/3057986){:target="_blank"}

### データ構造・アルゴリズム
- bit演算