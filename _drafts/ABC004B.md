---
layout: single
categories: writeup
title: B - 回転 \| AtCoder Beginner Contest 004
tags: 競プロ AtCoder ABC004 100
mathjax: true
---

[B - 回転 \| AtCoder Beginner Contest 004](https://beta.atcoder.jp/contests/abc004/tasks/abc004_2){:target="_blank"}

## 解法
$$ c_{ij} (0 \le i,j \le n) $$ は180°回転すると$$ c_{(n-i)(n-j)} (0 \le i,j \le n) $$に対応する．
### コーナーケース検討
行の末尾は" "ではなく"\n"
## 実装
indexに注意する．0-indexで実装するのでn = 3．
```cpp
REP(i, 4){
    REP(j, 4){
        cout << board[3 - i][3 - j];
        if (j != 3) cout << " ";
    }
    cout << endl;
} 
```
[Submission](https://beta.atcoder.jp/contests/abc004/submissions/3004860){:target="_blank"}

### データ構造・アルゴリズム
特になし