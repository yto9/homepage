---
layout: single
categories: writeup
title: B - 高橋くんと文字列圧縮 \| AtCoder Beginner Contest 019
tags: 競プロ AtCoder ABC019 100 to_string()
mathjax: true
---

[B - 高橋くんと文字列圧縮 \| AtCoder Beginner Contest 019](https://beta.atcoder.jp/contests/abc019/tasks/abc019_2){:target="_blank"}

## 解法
回答用の文字列を用意し，前から順に文字列を見ていき新しい文字が出てきたらそれを回答用の文字列に追加し，同じ文字の間は個数をカウントし，違う文字が出てきたらそのカウントを回答用の文字列に連結する．これを繰り返す．

### コーナーケース検討
特になし
## 実装
```cpp
string s; cin >> s;
string ans = "";
char pre = ' ';
REP(i, s.size()) {
    if(s[i] != pre) {
        pre = s[i];
        ans += s[i];
        int cnt = 1;
        while(i < s.size() - 1 && pre == s[i + 1]) {
            i++;
            cnt++;
        }
        ans += to_string(cnt);
    }
}
cout << ans << endl;
```
[Submission](https://beta.atcoder.jp/contests/abc019/submissions/3016419){:target="_blank"}

### データ構造・アルゴリズム
- [to_string()](www.cplusplus.com/reference/string/to_string/)