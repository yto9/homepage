---
layout: single
categories: writeup
title: B - 手芸王 \| AtCoder Beginner Contest 023
tags: 競プロ AtCoder ABC023 100 string
mathjax: true
---

[B - 手芸王 \| AtCoder Beginner Contest 023](https://beta.atcoder.jp/contests/abc023/tasks/abc023_b){:target="_blank"}

## 解法
最終的に行うことは正しく生成された場合のN文字の文字列との一致検証．
### コーナーケース検討
手順0の場合のみ手順3nとは違う操作なので注意．\\
手順通り行うと偶数文字になることはない．
## 実装
試行数を問われているので，以下の`res`のようにループのインデックスをループの外で宣言することでその値を利用する．
```cpp
int N; cin >> N;
string S; cin >> S;
string ans = "b";
int res = 0;
for(res = 1; ans.size() < N; res++) {
    if (res % 3 == 1) ans = 'a' + ans + 'c';
    else if (res % 3 == 2) ans = 'c' + ans + 'a';
    else ans = 'b' + ans + 'b';
}
if (ans == S) cout << res << endl;
else cout << -1 << endl;
return 0;
```
[Submission](https://beta.atcoder.jp/contests/abc023/submissions/3088066){:target="_blank"}

### データ構造・アルゴリズム
- [string](http://www.cplusplus.com/reference/string/string/)
    - [比較演算子（== != < <= > >=）](http://www.cplusplus.com/reference/string/string/operators/)