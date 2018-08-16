---
layout: single
categories: writeup
title: B - 錠 \| AtCoder Beginner Contest 013
tags: 競プロ AtCoder ABC013 100 min() abs()
mathjax: true
---

[B - 錠 \| AtCoder Beginner Contest 013](https://beta.atcoder.jp/contests/abc013/tasks/abc013_2)

## 解法
0->9, 9->0をまたぐ場合とまたがない場合のうち小さい方を出力する．
### コーナーケース検討
a!=bとなっているがあってもなくても特に影響しない
## 実装
絶対値を取るabs()を使えば必要な回数は0->9,9->0をまたがない場合はabs(b-a)，またぐ場合は10 - abs(b-a)となる．
```cpp
cout << min(abs(b - a),10 - (b - a)) << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc013/submissions/3015386){:target="_blank"}

### データ構造・アルゴリズム
- min()
- abs()