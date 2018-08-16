---
layout: single
categories: writeup
title: B - 高橋くんの集計 \| AtCoder Beginner Contest 015
tags: 競プロ AtCoder ABC015 100 int
mathjax: true
---

[B - 高橋くんの集計 \| AtCoder Beginner Contest 015](https://beta.atcoder.jp/contests/abc015/tasks/abc015_2)

## 解法
ループでバグの合計数とバグのあるプログラムの数を集計し，上司に報告するように平均値を整数に繰り上げて出力する．
### コーナーケース検討
ソフトウェアのバグの合計数が0でないことは保証されている．(以下のコードで0除算になることは無い)
## 実装
A,Bをint型の正の整数とするとA/BでA/B以下の最初の整数値，A/B + (A%B!=0)でA/B以上の最初の整数値が取得できる．
```cpp
int N; cin >> N;
int A[100];
int sum = 0;
int num_p = 0;
REP(i,N) {
    cin >> A[i];
    if (A[i] > 0) {
        num_p++;
        sum += A[i];
    }
}
cout << sum/num_p + (sum%num_p != 0) << endl;
```

[Submission](https://beta.atcoder.jp/contests/abc015/submissions/3015794){:target="_blank"}

### データ構造・アルゴリズム
- int型の扱い