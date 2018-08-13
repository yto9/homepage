---
layout: single
categories: writeup
title: A - AtCoder社の給料 \| AtCoder Beginner Contest 003
tags: 競プロ AtCoder ABC003 100 等差数列
mathjax: true
---

[A - AtCoder社の給料 \| AtCoder Beginner Contest 003](https://beta.atcoder.jp/contests/abc003/tasks/abc003_1)

## 解法
得られる給料の期待値を求める．\\
期待値は$$E(n) = \sum_{k=1}^{n} \frac{k * 10000}{n} = \frac{10000n(n + 1)}{2n} = 5000(n+1)$$ 
\\


### コーナーケース検討
右辺を使えば誤差は出ない．
## 実装

[Submission](https://beta.atcoder.jp/contests/abc003/submissions/3002917){:target="_blank"}

### データ構造・アルゴリズム
- 等差数列の和の公式(初項1,公差1)
    - $$\sum_{k=1}^{n}k = \frac{n(1+n)}{2}$$