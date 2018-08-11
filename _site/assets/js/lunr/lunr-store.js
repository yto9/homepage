var store = [{
        "title": "AtCoder Beginner Contest 104",
        "excerpt":"日程 2018/08/05 21:00:00 ~ 2018/08/05 22:40:00 100min コンテスト中に考えていたこと A (-04:06 AC) 時系列: ABC -&gt; ARC -&gt; AGC 境界条件未満に注意しよう 変動可能性のあるコンテストに参加したが変動しないといったようなことは考えないでいいんだよな…？ B (04:06 - 20:11 WA) 2個目の条件境界注意しないとな…　条件1&amp;&amp;2&amp;&amp;3のみ”AC”, ほとんどは”WA”っぽいな これどういう順で適用するのが綺麗に書けるんだろう C (20:11 - 99:39 WA) 総問題数は 愚直に全探索するとすべての問題について解くか否かで状態数は必要な最低問題数が知りたいんだから，ある点数帯をコンプリートしない場合は点数の高い順のはずこれ点数が100点刻みな必要あるか…？completeボーナスを含めた各得点帯一問を解く期待値のpriority queueを作って   大きい順にp[i]個ずつの単位でGを超えなければ解く．  超える場合は残っているもののうち単独での点数が最も高いものをp[i]未満使った場合と比較して少ない方を採用って感じの貪欲っぽい感じで行けると思ったが…WA(期待値が同じ値になる場合とかの考慮ができてないからWAなんだろうな)TLEはなんでだろう(-&gt;TLEはfor文が無限ループになってた)同じ方針で解き直してみたら他にもバグを埋め込んでいたがそれを取り除いてもこの方針だとそもそもサンプルケースのような1問あたりの期待値が低いがそのゴールに到達するにはそっちを解いたほうがいい場合が考慮出来てないのでこれが限界ぽかった． D 見てない 結果 performance: 161 (自己最低)rank: 1819位 所感 うーむやばい笑(笑えない)B問題の後ろから2文字目という条件を誤実装していた…WA出ているのに気づいたのがCを提出した終了30秒前というね…そしてCも解けたわけではないという…次からCの問題読み終わったらstatusの確認しよう(自戒). 現状 ついにratingが3桁になってしまった…今まで気が向いた時に参加して特に解き直しとかしてなかったけど反省しよう.これからはchokudaiさんのブログにあるように取り組んだけど解けなかった問題は復習してwriteupにまとめよう…そしてお盆はC問題埋めてとりあえず水色復帰したい気持ち. 学び 今まで”Yes”/”No”とかで出力する時に bool flag = true;... 処理 ...if (flag) cout &lt;&lt; \"Yes\\n\";else cout &lt;&lt; \"No\\n\";としていたけど解説にあるように string ans = \"Yes\\n\";... 処理 ...cout &lt;&lt; ans;にした方がコードがスッキリする． ","categories": ["logs"],
        "tags": ["競プロ","AtCoder","ABC104"],
        "url": "https://ytoku.com/logs/ABC104/",
        "teaser":null},{
        "title": "A - Rated for Me \\| AtCoder Beginner Contest 104",
        "excerpt":"A - Rated for Me | AtCoder Beginner Contest 104 解法 Rによって   ABC/ARC/AGC  ARC/AGC  AGCでレートが変動する場合があり，各々の場合に時系列的に最も早い上記の1番左にあるコンテスト名を返せば良い． コーナーケース検討   変動する可能性があれば変動するとしてよさそう(変動可能性のあるコンテストに参加したが変動しないといったようなことは考えない)  0 -&gt; ABC  1199 -&gt; ABC  1200 -&gt; ARC  2799 -&gt; ARC  2800 -&gt; AGC  4208 -&gt; AGC実装 Rでの場合分け．AGCは任意のケースでレート変動するのでデフォルトケースとして初期値に置くのが気持ち的にいいかな． string ans = \"AGC\\n\";if (R &lt; 1200)    ans = \"ABC\\n\";else if (R &lt; 2800)    ans = \"ARC\\n\";cout &lt;&lt; ans;Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC104","100"],
        "url": "https://ytoku.com/writeup/ABC104A/",
        "teaser":null},{
        "title": "B - AcCepted \\| AtCoder Beginner Contest 104",
        "excerpt":"B - AcCepted | AtCoder Beginner Contest 104 解法   1文字目’A’判定  2文字目以降に大文字は1文字のみ  その大文字は’C’である必要がありかつ2文字目でも末尾でもないコーナーケース検討 2個目の条件が示す範囲は   4文字のとき          ..X.        10文字のとき          ..XXXXXXX.      実装 条件より大文字があるならば，2文字目でも末尾でもだめでありかつ’C’でなければ”WA\\n”． FOR(i, 1, S.size()){    if (isupper(S[i])){        if (i == 1 || i == S.size() - 1 || S[i] != 'C'){            res = \"WA\\n\";        }        cnt++;    }}Submission データ構造・アルゴリズム   alphabetの大文字/小文字          isupper()      ascii      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC104","200"],
        "url": "https://ytoku.com/writeup/ABC104B/",
        "teaser":null},{
        "title": "C - All Green \\| AtCoder Beginner Contest 104",
        "excerpt":"C - All Green | AtCoder Beginner Contest 104 解法 以下の変数を2進表記で考え，下位bitから順に昇順に対応する点数帯をコンプリートするか否かに紐付ける．各状態で得点がGに到達していない場合はbitが0になってるもののうち最上位のものに対応する点数帯iの問題を最大問解くことでGに到達できるか試みる(問解く場合は対応bitが1のときなので含めない)． コーナーケース検討 条件に   総合スコアを G 点以上にすることは可能である。とあるので特にコーナーケースは存在しなそう．実装 2進数として扱う変数名を解説のmaskのようにわかりやすくしておくと可読性が上がる． REP (mask, (1 &lt;&lt; D)){     ...}対象の変数(ここではmask)の2進表記のbitの各桁に1が立っているか否かでの処理．今回はbitが立っている桁に対応する点数帯の問題をコンプリートしている場合の処理に割り当てている． REP(i, D){    if (mask &gt;&gt; i &amp; 1) ...    else ...}2進表記で1が立っている桁の点数体のコンプリート+rest_maxに対応する点数帯をp[rest_max]問未満解いてGに到達する場合 if (s &lt; G){    int s_m = 100 * (rest_max + 1);    if (G - s &lt;= s_m * (p[rest_max] - 1)) {        num += (G - s)/ s_m + ((G - s) % s_m != 0);    }     else continue;}A,Bをint型の正の整数とするとA/BでA/B以下の最初の整数値，A/B + (A%B!=0)でA/B以上の最初の整数値が取得できる． Submission データ構造・アルゴリズム   bit演算(&lt;&lt;,&gt;&gt;,&amp;)  int型の扱い","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC104","300","int","bit"],
        "url": "https://ytoku.com/writeup/ABC104C/",
        "teaser":null}]
