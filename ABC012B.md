---
layout: single
categories: writeup
title: B - 入浴時間 \| AtCoder Beginner Contest 012
tags: 競プロ AtCoder ABC012 100 setw() setfill() int
mathjax: true
---

[B - 入浴時間 \| AtCoder Beginner Contest 012](https://beta.atcoder.jp/contests/abc012/tasks/abc012_2){:target="_blank"}

## 解法
秒を3600や60との余りや除算を用いて変換する．

### コーナーケース検討
0<= hh, mm , ss <= 59 \\
各値がひと桁のときは0埋め右詰めでhh:mm:ssとする．

## 実装
それぞれ以下のように求まる．
```cpp
int h = N / 3600;
int m = (N % 3600) / 60;
int s = N % 60;
```
出力の整形にはsetw()，setfill()を用いる．
```cpp
cout << setfill('0') << setw(2) << h << ":" << setw(2) << m << ":" << setw(2) << s << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc012/submissions/3015152){:target="_blank"}

### データ構造・アルゴリズム
- int型の除算
- [setfill()](http://www.cplusplus.com/reference/iomanip/setfill/)
- [setw()](http://www.cplusplus.com/reference/iomanip/setw/)