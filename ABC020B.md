---
layout: single
categories: writeup
title: B - 足し算 \| AtCoder Beginner Contest 020
tags: 競プロ AtCoder ABC020 100 stoi()
mathjax: true
---

[B - 足し算 \| AtCoder Beginner Contest 020](https://beta.atcoder.jp/contests/abc020/tasks/abc020_2)

## 解法
問題文通り計算する．

### コーナーケース検討
特になし．
## 実装
入力をstringとして取ることで，簡単に結合でき，その後stoi()を用い計算する．
```cpp
string A, B; cin >> A >> B;
A += B;
cout << stoi(A)*2 << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc020/submissions/3016462){:target="_blank"}

### データ構造・アルゴリズム
- [stoi()](http://www.cplusplus.com/reference/string/stoi/)