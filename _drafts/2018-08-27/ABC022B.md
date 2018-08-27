---
layout: single
categories: writeup
title: B - Bumble Bee \| AtCoder Beginner Contest 022
tags: 競プロ AtCoder ABC022 100 unordered_map
mathjax: true
---

[B - Bumble Bee \| AtCoder Beginner Contest 022](https://beta.atcoder.jp/contests/abc022/tasks/abc022_b){:target="_blank"}

## 解法
出てきた順に格納しておき，二度目以降の場合にはカウントしていく．

### コーナーケース検討
同一種類の花にn回訪れるとn-1個の花が受粉する．

## 実装
```cpp
int N; cin >> N;
unordered_map<int, int> ump;
int res = 0;
REP(i, N) {
    int tmp; cin >> tmp;
    if(ump[tmp] > 0) res++;
    ump[tmp]++;
}
cout << res << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc022/submissions/3058958){:target="_blank"}

### データ構造・アルゴリズム
- [unordered_map](http://www.cplusplus.com/reference/unordered_map/unordered_map/)
    - [operator[]](http://www.cplusplus.com/reference/unordered_map/unordered_map/operator[]/)