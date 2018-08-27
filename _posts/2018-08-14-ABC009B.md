---
layout: single
categories: writeup
title: B - 心配性な富豪、ファミリーレストランに行く。 \| AtCoder Beginner Contest 009
tags: 競プロ AtCoder ABC009 100
mathjax: true
---

[B - 心配性な富豪、ファミリーレストランに行く。  \| AtCoder Beginner Contest 009](https://beta.atcoder.jp/contests/abc009/tasks/abc009_2){:target="_blank"}

## 解法
文章量の割に必要な情報が少ない．\\
set<int>を使い金額をuniqueに格納する．デフォルトだと昇順なのでrbegin()を用いイテレータを1つ進めたところの値を出力する．

### コーナーケース検討
全ての料理の金額が同じであることはない．とあるので2<=Nより必ず2番目に高い料理が存在する．

## 実装
rbegin()を1つ進めることで2番目に高い料理の値段が得られる．
```cpp
set<int> st;
REP(i, N) {
    int tmp; cin >> tmp;
    st.insert(tmp);
}
auto itr = st.rbegin();
itr++;
cout << *itr << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc009/submissions/3006296){:target="_blank"}

### データ構造・アルゴリズム
- [set](http://www.cplusplus.com/reference/set/)
    - [insert()](http://www.cplusplus.com/reference/set/set/insert/)
    - [rbegin()](http://www.cplusplus.com/reference/set/set/rbegin/)