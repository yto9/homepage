---
layout: single
categories: writeup
title: A - Rated for Me \| AtCoder Beginner Contest 104
tags: 競プロ AtCoder ABC104 100
---

[A - Rated for Me \| AtCoder Beginner Contest 104](https://abc104.contest.atcoder.jp/tasks/abc104_a){:target="_blank"}

## 解法
Rによって
- ABC/ARC/AGC
- ARC/AGC
- AGC

でレートが変動する場合があり，各々の場合に時系列的に最も早い上記の1番左にあるコンテスト名を返せば良い．
### コーナーケース検討
- 変動する可能性があれば変動するとしてよさそう(変動可能性のあるコンテストに参加したが変動しないといったようなことは考えない)
- 0 -> ABC
- 1199 -> ABC
- 1200 -> ARC
- 2799 -> ARC
- 2800 -> AGC
- 4208 -> AGC

## 実装
Rでの場合分け．\\
AGCは任意のケースでレート変動するのでデフォルトケースとして初期値に置くのが気持ち的にいいかな．
```cpp
string ans = "AGC\n";
if (R < 1200)
    ans = "ABC\n";
else if (R < 2800)
    ans = "ARC\n";
cout << ans;
```
[Submission](https://abc104.contest.atcoder.jp/submissions/2977590){:target="_blank"}

### データ構造・アルゴリズム
特になし