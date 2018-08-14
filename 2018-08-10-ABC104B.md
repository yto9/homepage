---
layout: single
categories: writeup
title: B - AcCepted \| AtCoder Beginner Contest 104
tags: 競プロ AtCoder ABC104 200 isupper() ascii
---


[B - AcCepted \| AtCoder Beginner Contest 104](https://abc104.contest.atcoder.jp/tasks/abc104_b)

## 解法
- 1文字目'A'判定
- 2文字目以降に大文字は1文字のみ
- その大文字は'C'である必要がありかつ2文字目でも末尾でもない

### コーナーケース検討
2個目の条件が示す範囲は
- 4文字のとき
    - ..X.
- 10文字のとき
    - ..XXXXXXX.

## 実装
条件より大文字があるならば，2文字目でも末尾でもだめでありかつ'C'でなければ"WA\n"．
```cpp
FOR(i, 1, S.size()){
    if (isupper(S[i])){
        if (i == 1 || i == S.size() - 1 || S[i] != 'C'){
            res = "WA\n";
        }
        cnt++;
    }
}
```
[Submission](https://abc104.contest.atcoder.jp/submissions/2968299){:target="_blank"}

### データ構造・アルゴリズム
- alphabetの大文字/小文字
    - [isupper()](http://www.cplusplus.com/reference/locale/isupper/)
    - ascii
