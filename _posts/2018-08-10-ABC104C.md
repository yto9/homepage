---
layout: single
categories: writeup
title: C - All Green \| AtCoder Beginner Contest 104
tags: 競プロ AtCoder ABC104 300 int bit
mathjax: true
---

[C - All Green \| AtCoder Beginner Contest 104](https://abc104.contest.atcoder.jp/tasks/abc104_c)

## 解法
$$2^{D}$$以下の変数を2進表記で考え，下位bitから順に昇順に対応する点数帯をコンプリートするか否かに紐付ける．\\
各状態で得点がGに到達していない場合はbitが0になってるもののうち最上位のものに対応する点数帯iの問題を最大$$p_i - 1$$問解くことでGに到達できるか試みる($$p_i$$問解く場合は対応bitが1のときなので含めない)．

### コーナーケース検討
条件に
- 総合スコアを G 点以上にすることは可能である。
とあるので特にコーナーケースは存在しなそう．

## 実装
2進数として扱う変数名を[解説](https://abc104.contest.atcoder.jp/editorial)の`mask`のようにわかりやすくしておくと可読性が上がる．
```cpp
REP (mask, (1 << D)){
     ...
}
```
対象の変数(ここでは`mask`)の2進表記のbitの各桁に1が立っているか否かでの処理．
今回はbitが立っている桁に対応する点数帯の問題をコンプリートしている場合の処理に割り当てている．
```cpp
REP(i, D){
    if (mask >> i & 1) ...
    else ...
}
```
2進表記で1が立っている桁の点数体のコンプリート+`rest_max`に対応する点数帯をp[rest_max]問未満解いてGに到達する場合
```cpp
if (s < G){
    int s_m = 100 * (rest_max + 1);
    if (G - s <= s_m * (p[rest_max] - 1)) {
        num += (G - s)/ s_m + ((G - s) % s_m != 0);
    } 
    else continue;
}
```
A,Bをint型の正の整数とするとA/BでA/B以下の最初の整数値，A/B + (A%B!=0)でA/B以上の最初の整数値が取得できる．

[Submission](https://abc104.contest.atcoder.jp/submissions/2977532){:target="_blank"}

### データ構造・アルゴリズム
- bit演算(`<<`,`>>`,`&`)
- int型の扱い 