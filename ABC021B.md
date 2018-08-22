---
layout: single
categories: writeup
title: B - 嘘つきの高橋くん \| AtCoder Beginner Contest 021
tags: 競プロ AtCoder ABC021 100
mathjax: true
---

[B - 嘘つきの高橋くん \| AtCoder Beginner Contest 021](https://beta.atcoder.jp/contests/abc021/tasks/abc021_2)

## 解法
最短路の可能性があるかの判定問題．町同士の位置関係や距離(重み付け)等もないので，単に1度訪れた町をもう一度経由する(グラフとして見た時に閉路)場合は最短路ではないことはわかる．

### コーナーケース検討
出発地点とゴール地点が$$P_1$$，$$P_K$$ではないことに注意．
## 実装
aとbは訪れているということにしておき，$$P_i$$に$$P_i$$以前に訪れていた場合には最短路ではないと判定．$$O(K)$$．
```cpp
int visited[101] = {};
int a, b; cin >> a >> b;
visited[a]++; visited[b]++;
int K; cin >> K;
string ans = "YES";
REP(i, K) {
    int tmp; cin >> tmp;
    if (visited[tmp] == 1) {
        ans = "NO";
        break;
    }
    visited[tmp]++;
}
cout << ans << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc021/submissions/3058198){:target="_blank"}

### データ構造・アルゴリズム
- 最短路