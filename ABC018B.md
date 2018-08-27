---
layout: single
categories: writeup
title: B - 文字列の反転 \| AtCoder Beginner Contest 018
tags: 競プロ AtCoder ABC018 100 reverse()
mathjax: true
---

[B - 文字列の反転 \| AtCoder Beginner Contest 018](https://beta.atcoder.jp/contests/abc018/tasks/abc018_2){:target="_blank"}

## 解法
問題文どおりに$$l_i$$番目と$$ r_i $$番目の間の文字列を反転する．
### コーナーケース検討
1文字目が0番目ではなく1から始まっていることに注意．\\
またreverse()の引数の指定の仕方にも注意．
## 実装
入力を受けるとともに処理をすればl,rは以下のように再利用できる．
```cpp
string S; cin >> S;
int N; cin >> N;
int l, r;
auto itr = S.begin();
REP(i, N) {
    cin >> l >> r;
    reverse(itr + (l - 1), itr + r);
}
cout << S << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc018/submissions/3016208){:target="_blank"}

### データ構造・アルゴリズム
- [reverse()](http://www.cplusplus.com/reference/algorithm/reverse/)