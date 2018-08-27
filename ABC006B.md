---
layout: single
categories: writeup
title: B - トリボナッチ数列 \| AtCoder Beginner Contest 006
tags: 競プロ AtCoder ABC006 100 初期化 メモ化 余り
mathjax: true
---

[B - トリボナッチ数列 \| AtCoder Beginner Contest 006](https://beta.atcoder.jp/contests/abc006/tasks/abc006_2){:target="_blank"}

## 解法
[フィボナッチ数](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%9C%E3%83%8A%E3%83%83%E3%83%81%E6%95%B0#%E9%A0%85%E6%95%B0%E3%81%AE%E5%A4%89%E6%9B%B4)の3つ版．フィボナッチは人名だが項数が増えた版は冗談のような名付けになっている．\\
実装方法はフィボナッチと同じく再帰．愚直に計算すると$$O(n!)$$となってしまうが，再帰関数の返り値をメモ化することで$$O(n)$$で求められる．
### コーナーケース検討
10007で割った余りを出力する．
## 実装
配列は初期化子リスト{}で指定しなかった要素は0初期化されるので{}で全要素を0初期化出来る．また代入式はその代入される変数の変わりに使用できるのでtri()のreturn文は以下のように書ける．
```cpp
#define MOD 10007
int memo[1000001] = {};//0-initialized
int tri(int n) {
    if (n <= 3 || memo[n] > 0) return memo[n];
    return memo[n] = (tri(n - 3) + tri(n - 2) + tri(n - 1))%MOD;
    // return memo[n] = (tri(n - 1) + tri(n - 2) + tri(n - 3))%MOD;
}
int main(int argc, char const *argv[])
{
    int n; cin >> n;
    memo[3] = 1;
    cout << tri(n) << endl;
    return 0;
}
```
[Submission](https://beta.atcoder.jp/contests/abc006/submissions/3005254){:target="_blank"}\\
上記のソースコードでコメントアウトしてある順で記述すると
![tribonacchi](/images/tribonacchi.png)
上図のように実行速度，使用メモリ量ともに増加するのでtri(x)で出来るだけメモ化された値を再利用する(xが小さい順に計算される)ようにした方が効率がいい(この問題自体はどちらでもAC)．\\
[Submission](https://beta.atcoder.jp/contests/abc006/submissions/3005257){:target="_blank"}

### データ構造・アルゴリズム
- [初期化](https://msdn.microsoft.com/ja-jp/library/w7wd1177.aspx)
    - 配列
        - 初期化子{}
- 再帰
- メモ化
    - 初期化(今回は0初期化)
- 余り