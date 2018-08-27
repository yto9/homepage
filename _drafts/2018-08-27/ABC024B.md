---
layout: single
categories: writeup
title: B - 自動ドア \| AtCoder Beginner Contest 024
tags: 競プロ AtCoder ABC024 100 min()
mathjax: true
---

[B - 自動ドア \| AtCoder Beginner Contest 024](https://beta.atcoder.jp/contests/abc024/tasks/abc024_b){:target="_blank"}

## 解法
$$A_i (i \ge 2) $$の時 $$A_{i-1} \sim A_i$$ までの間にドアが空いている時間は$$min(T, A_i - A_{i-1})$$なのでこの和を取ればいい．
### コーナーケース検討
$$A_N \sim T$$ 秒間は必ず開いている．\\
これ$$ A \ge 86400 $$ だと今日じゃなくないか…？と問題文だけだと思ったが，test case 3を見ると1日を溢れていてもカウントしているようなのでそこから24時間以降のドアが空いている時間の扱いを判断する．(`今日`がどこまでを指しているのかがあいまいなので問題文で制約をもっとかけてほしい)
\\
この問題は一度もドアが空いている間に次の人が来ない場合に最大$$N * T \le 10^{10} $$秒なのでギリギリint型に収まるが，sumを取る場合はlong long型の使用も検討する．
## 実装

[Submission](https://beta.atcoder.jp/contests/abc024/submissions/3088464){:target="_blank"}

### データ構造・アルゴリズム
- [min()](http://www.cplusplus.com/reference/algorithm/min/)