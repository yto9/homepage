---
layout: single
categories: writeup
title: B - AcCepted \| AtCoder Beginner Contest 104
tags: 競プロ AtCoder ABC104 200
---


## 問題文

> 文字列 S が与えられます。S のそれぞれの文字は英大文字または英小文字です。 S が次の条件すべてを満たすか判定してください。
>
>   - S の先頭の文字は大文字の A である。
>   - S の先頭から 3 文字目と末尾から 2 文字目の間（両端含む）に大文字の C がちょうど 1 個含まれる。
>   - 以上の A, C を除く S のすべての文字は小文字である。

## 制約
実行時間: 2s \\
メモリ: 1024MB
- 4 ≤ \|S\| ≤ 10 （\|S\| は文字列 S の長さ）
- S のそれぞれの文字は英大文字または英小文字である。





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
