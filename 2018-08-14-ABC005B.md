---
layout: single
categories: writeup
title: B - おいしいたこ焼きの食べ方 \| AtCoder Beginner Contest 005
tags: 競プロ AtCoder ABC005 100 priority_queue
mathjax: true
---

[B - おいしいたこ焼きの食べ方 \| AtCoder Beginner Contest 005](https://beta.atcoder.jp/contests/abc005/tasks/abc005_2){:target="_blank"}

## 解法
入力の文字がうまく表示されてなくてぎょっとするが特に問題に影響はしない．
$$T_i (1 \le i \le n)$$のうち最小値を返す．

### コーナーケース検討
Nは正の整数なので特に無い．
## 実装
priority_queueはデフォルトでは降順に出てくる(less())のでgreater()を指定する．
```cpp
priority_queue<int, vector<int>, greater<int>> pq;
REP(i, N) {
    int tmp; cin >> tmp;
    pq.push(tmp);
}
cout << pq.top() << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc005/submissions/3005071){:target="_blank"}

### データ構造・アルゴリズム
- [priority_queue](http://www.cplusplus.com/reference/queue/priority_queue/)
    - [push()](http://www.cplusplus.com/reference/queue/priority_queue/push/)
    - [pop()](http://www.cplusplus.com/reference/queue/priority_queue/pop/)
    - [top()](http://www.cplusplus.com/reference/queue/priority_queue/top/)