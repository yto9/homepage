---
layout: single
categories: writeup
title: B - 花占い \| AtCoder Beginner Contest 010
tags: 競プロ AtCoder ABC010 100 vector push_back()
mathjax: true
---

[B - 花占い \| AtCoder Beginner Contest 010](https://beta.atcoder.jp/contests/abc010/tasks/abc010_2)

## 解法
なぎさちゃんに軽く狂気を感じるが…\\
枚数を3で割った余りが2または偶数ではいけない．\\
nも$a_i$の最大値も小さいのでwhile文でカウントするだけ．

### コーナーケース検討
花びらが1枚のときには嫌いにはならないので条件を満たさないことはない．
## 実装
```cpp
    int count = 0;
    vector<int> a;
    REP(i, n) {
        int tmp;
        cin >> tmp;
        a.push_back(tmp);
    }
    for (auto x: a) {
        while(x % 3 == 2|| x % 2 == 0) {
            count++;
            x--;
        }
    }
    cout << count << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc010/submissions/3006540){:target="_blank"}

### データ構造・アルゴリズム
- [vector](http://www.cplusplus.com/reference/vector/vector/)
    - [push_back()](http://www.cplusplus.com/reference/vector/vector/push_back/)