---
layout: single
categories: writeup
title: B - 視程の通報 \| AtCoder Beginner Contest 001
tags: 競プロ AtCoder ABC104 100
mathjax: true
---


[B - 視程の通報 \| AtCoder Beginner Contest 001](https://beta.atcoder.jp/contests/abc001/tasks/abc001_2)
## 解法
指示通りに条件分岐するだけだが入力は$$m$$条件は$$km$$で指定されていることに注意．\\
境界が含むかどうかに注意．

### コーナーケース検討
指定された範囲では$$5km \lt m \lt 6km $$や$$30km \lt m \lt 35km $$など想定されていない範囲があるが，問題文にその範囲の入力はないとある．\\
除算があるが，VVが整数値になる入力しかないとあるのでこちらも気にしないでいい．

## 実装
指定された範囲はそれぞれ排反なのでelse文を有効活用する．\\
コーナーケース検討時に考えたことを踏まえ以下のように実装すると$$ kagen \le m \le jougen$$となる下限の部分はelseで賄われているのでわざわざ$$ 6000 \le m \le 30000$$ や $$ 30000 \le m \le 70000$$などと条件を記述しなくて良い．\\
仮にそうするならば最後のelse文をelse if$$(70000 \lt m)$$としないと(回答としては問題がないが)途中で抜け落ちた$$ 5000 \lt m \lt 6000 $$や $$30000 \lt m \lt 35000 $$ が最後のelse文に含まれてしまい気持ち悪い．\\
出力に関してはVVが1桁かどうか判定して先頭に'0'を足してもいいが，出力フォーマットを指定できるStream manipulatorsがc++のiostreamには用意されているのでそれを用いた．
```cpp
if (m < 100) ans = 0;
else if (m <= 5000) ans = m * 10 / 1000;
else if (m <= 30000) ans = m / 1000 + 50;
else if (m <= 70000) ans = (m - 30000) / 5000 + 80;
else ans = 89;
cout << setfill('0') << setw(2) << right << ans << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc001/submissions/3001460){:target="_blank"}

### データ構造・アルゴリズム
- [Stream manipulators](http://www.cplusplus.com/reference/library/manipulators/)による出力フォーマット指定
    - [setfill()](http://www.cplusplus.com/reference/iomanip/setfill/)
    - [setw()](http://www.cplusplus.com/reference/iomanip/setw/)
    - [right()](http://www.cplusplus.com/reference/ios/right/)
    - [left()](http://www.cplusplus.com/reference/ios/left/)
    - [internal()](http://www.cplusplus.com/reference/ios/internal/)