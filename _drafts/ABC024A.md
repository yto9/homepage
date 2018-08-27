---
layout: single
categories: writeup
title: A - 動物園 \| AtCoder Beginner Contest 024
tags: 競プロ AtCoder ABC024 100
mathjax: true
---

[A - 動物園 \| AtCoder Beginner Contest 024](https://beta.atcoder.jp/contests/abc024/tasks/abc024_a){:target="_blank"}

## 解法

### コーナーケース検討
割引は全員に適用される(団体数以上の人のみではない)．
割引後の価格が負になることはない($$C \le S \le T$$より)
## 実装
普通に場合分けしてもいいが，以下のように書くことで(S + T >= K)はtrueならばfalseならば0にキャストされるので場合分けを式の中に含めることができ，一行で書ける．
```cpp
cout << A*S + B*T - (S + T >= K)*(S + T)*C << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc024/submissions/3088213){:target="_blank"}

### データ構造・アルゴリズム
特になし