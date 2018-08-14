---
layout: single
categories: writeup
title: B - 投票 \| AtCoder Beginner Contest 008
tags: 競プロ AtCoder ABC008 100 unordered_map() max_element()
mathjax: true
---

[B - 投票 \| AtCoder Beginner Contest 008](https://beta.atcoder.jp/contests/abc008/tasks/abc008_2)

## 解法
名前をkeyとしてその得票数をvalueとする連想配列を用いそこから最大valueを持つkeyを返す．\\
特にkeyでsortする必要はないのでunordered_map<string,int>を利用する．


### コーナーケース検討
票数は必ず1以上であることが保証されている．\\
無記名票等はなし．\\
同数の場合はそのうち誰でもいい．

## 実装
unordered_map()のoperator`[]`は存在しないkeyにアクセスするとdefault constructorによる要素生成(今回はintなので0初期化)を行うのでmp[s]++の部分は以下のような挙動になる．\\
- (keyが存在しない) -> 0(生成) -> 1(後置インクリメント)
- (keyが存在) -> mp[s]++(後置インクリメント)

そうして得票数がmpに格納出来たので，max_element()を用いてvalueが最大値を示すiteratorを取得し，そのkeyを出力する．
```cpp
int N; cin >> N;
unordered_map<string, int> mp;
REP(i, N) {
    string s; cin >> s;
    mp[s]++;
}
auto it = *max_element(mp.begin(),mp.end(),[](const pair<string,int> & p1, const pair<string,int> & p2){
    return p1.second < p2.second;
});
cout << it.first << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc008/submissions/3005877){:target="_blank"}

### データ構造・アルゴリズム
- unordered_map()
    - operator[]
- max_element()