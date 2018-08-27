---
layout: single
categories: writeup
title: B - 辞書式順序 \| AtCoder Beginner Contest 007
tags: 競プロ AtCoder ABC007 100 string copy()
mathjax: true
---

[B - 辞書式順序 \| AtCoder Beginner Contest 007](https://beta.atcoder.jp/contests/abc007/tasks/abc007_2)

## 解法
|A| > 1の時は|A|の末尾一文字削って，|A|==1の時はA[0]=='a'の時は-1,それ以外はA[0]-1を出力する．という方針でやったのが[Submission](https://beta.atcoder.jp/contests/abc007/submissions/3005613){:target="_blank"}だが，文字列のコピーは終端文字('\0')の扱いがセンシティブになるので出来るだけ使用は避けたい．\\
一個目の条件に引っ張られたがそもそも"a"以外の文字列より"a"の方が小さいのでA="a"以外の時は"a"を返すことにする．
### コーナーケース検討
A = "a" の場合 -1を返す．
## 実装
```cpp
string A; cin >> A;
if(A == "a") cout << -1 << endl;
else cout << "a" << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc007/submissions/3005668){:target="_blank"}

### データ構造・アルゴリズム
- [string](http://www.cplusplus.com/reference/string/string/)
    - [比較演算子（== != < <= > >=）](http://www.cplusplus.com/reference/string/string/operators/)
    - [copy()](http://www.cplusplus.com/reference/string/string/copy/)