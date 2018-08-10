---
categories: writeup
---
## rules

### 出力が"Yes\n","No\n"などの文字列の時
```cpp
if (flag) cout << "Yes\n";
else cout << "No\n";
```
ではなく

```cpp
string ans = "No\n";
if (flag) ans = "Yes\n";
cout << ans;
```
のようにするとデバッグしやすいしif文も減ってコードがスッキリする．

