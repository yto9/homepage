---
layout: single
categories: writeup
title: B - AtCoderトランプ  \| AtCoder Beginner Contest 003
tags: 競プロ AtCoder ABC003 100 map() 符号化
mathjax: true
---

[B - AtCoderトランプ \| AtCoder Beginner Contest 003](https://beta.atcoder.jp/contests/abc003/tasks/abc003_2)

## 解法
敗北するケースを考える
- S[i] == T[i] (両方'@'はこっち)
    - 負けない
- S[i] != T[i]
    - どちらも'@'じゃない場合
        - 負け
    - どちらかが'@'
        - もう一方が{'a','t','c','o','d','e','r'}なら負けない
        - そうでないなら負け

S.size()文字数分検証し敗北条件に引っかからなければ勝ちとする．
    

### コーナーケース検討
SとTの文字数が違うことは無い．
## 実装
```cpp
string ans = "You can win";
REP(i, S.size()) {
    if (S[i] != T[i]) {
        if (S[i] != '@' && T[i] != '@') ans = "You will lose";
        else if(S[i] == '@') {
            if (T[i] != 'a' && T[i] != 't' && T[i] != 'c' && T[i] != 'o' && T[i] != 'd'&& T[i] != 'e' && T[i] != 'r') ans = "You will lose";
        }
        else {
            if (S[i] != 'a' && S[i] != 't' && S[i] != 'c' && S[i] != 'o' && S[i] != 'd'&& S[i] != 'e' && S[i] != 'r') ans = "You will lose";
        }
    } 
}
```
[Submission](https://beta.atcoder.jp/contests/abc003/submissions/3004603){:target="_blank"}

[解説](https://www.slideshare.net/chokudai/abc003){:target="_blank"}を見ると，連想配列を使ったいい感じの方法が紹介されていたので実装してみる．

```cpp
    string ans = "You can win";
    map<char,int> score_mp;
    score_mp['@'] = 10;
    for (char c = 'a'; c <= 'z'; c++) {
        if (c == 'a' || c == 't' || c == 'c' || c == 'o' || c == 'd' || c == 'e' || c == 'r') {
            score_mp[c] = 1;
        }
        else score_mp[c] = 0;
    }
    REP(i, S.size()) {
        if (S[i] != T[i]) {
            if(score_mp[S[i]] + score_mp[T[i]] < 11)ans = "You will lose";
        } 
    }
```
[Submission](https://beta.atcoder.jp/contests/abc003/submissions/3004753){:target="_blank"}
- S[i] != T[i]
    - どちらも'@'じゃない場合
        - 負け
            - score_mp[S[i]] + score_mp[T[i]] <= 2
    - どちらかが'@'
        - もう一方が{'a','t','c','o','d','e','r'}なら負けない
            - score_mp[S[i]] + score_mp[T[i]] = 11
        - そうでないなら負け
            - score_mp[S[i]] + score_mp[T[i]] = 10

となりscore_mp[S[i]] + score_mp[T[i]]の値が11以上か否かを1文字ずつの勝敗判定に対応させることができ，ループ内の条件文がスッキリする(点数の振り方は別に10じゃなくても勝敗で分離出来ればいい)．\\
今回は10進数を用いたがn>=2進数で下記のように割り当てて11以上が勝利
- 00 -> 'a','t','c','o','d','e','r'以外の小文字アルファベット
- 01 -> 'a','t','c','o','d','e','r'
- 10 -> '@'

       
実際のコンテスト中に思いつけるかは分からないが，このような符号化が出来ないかという思考回路は持っておくと
良さそうに感じた．


### データ構造・アルゴリズム
- [map()](http://www.cplusplus.com/reference/map/map/)
- 符号化
    - n進数を用いた符号化