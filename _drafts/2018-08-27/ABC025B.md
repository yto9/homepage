---
layout: single
categories: writeup
title: B - 双子とスイカ割り \| AtCoder Beginner Contest 025
tags: 競プロ AtCoder ABC025 100
mathjax: true
---

[B - 双子とスイカ割り \| AtCoder Beginner Contest 025](https://beta.atcoder.jp/contests/abc025/tasks/abc025_b){:target="_blank"}

## 解法
"East","West"どちらかを正方向とし全ての指示された距離を制約に従い$$d \lt A$$ならA，$$d \gt B$$ ならBに変換しつつ足し合わせ，その正負で方角を判断する．
### コーナーケース検討
出力時方角があればd > 0とし，0のときはフォーマットが違うことに注意．
## 実装

[Submission](https://beta.atcoder.jp/contests/abc025/submissions/3088703){:target="_blank"}

### データ構造・アルゴリズム
特になし