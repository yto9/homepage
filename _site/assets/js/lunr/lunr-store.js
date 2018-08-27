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
        "tags": ["競プロ","AtCoder","ABC104","200","isupper()","ascii"],
        "url": "https://ytoku.com/writeup/ABC104B/",
        "teaser":null},{
        "title": "C - All Green \\| AtCoder Beginner Contest 104",
        "excerpt":"C - All Green | AtCoder Beginner Contest 104 解法 以下の変数を2進表記で考え，下位bitから順に昇順に対応する点数帯をコンプリートするか否かに紐付ける．各状態で得点がGに到達していない場合はbitが0になってるもののうち最上位のものに対応する点数帯iの問題を最大問解くことでGに到達できるか試みる(問解く場合は対応bitが1のときなので含めない)． コーナーケース検討 条件に   総合スコアを G 点以上にすることは可能である。とあるので特にコーナーケースは存在しなそう．実装 2進数として扱う変数名を解説のmaskのようにわかりやすくしておくと可読性が上がる． REP (mask, (1 &lt;&lt; D)){     ...}対象の変数(ここではmask)の2進表記のbitの各桁に1が立っているか否かでの処理．今回はbitが立っている桁に対応する点数帯の問題をコンプリートしている場合の処理に割り当てている． REP(i, D){    if (mask &gt;&gt; i &amp; 1) ...    else ...}2進表記で1が立っている桁の点数体のコンプリート+rest_maxに対応する点数帯をp[rest_max]問未満解いてGに到達する場合 if (s &lt; G){    int s_m = 100 * (rest_max + 1);    if (G - s &lt;= s_m * (p[rest_max] - 1)) {        num += (G - s)/ s_m + ((G - s) % s_m != 0);    }     else continue;}A,Bをint型の正の整数とするとA/BでA/B以下の最初の整数値，A/B + (A%B!=0)でA/B以上の最初の整数値が取得できる． Submission データ構造・アルゴリズム   bit演算(&lt;&lt;,&gt;&gt;,&amp;)  int型の扱い","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC104","300","int","bit演算"],
        "url": "https://ytoku.com/writeup/ABC104C/",
        "teaser":null},{
        "title": "A - 積雪深差 \\| AtCoder Beginner Contest 001",
        "excerpt":"A - 積雪深差 | AtCoder Beginner Contest 001 解法 積雪深が名詞のように見える．問題文にある通りを計算するだけ． コーナーケース検討 サンプルケースにもあるように結果が負になる場合もそのまま出力すればいいので特に注意すべきところはなし． 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC001","100"],
        "url": "https://ytoku.com/writeup/ABC001A/",
        "teaser":null},{
        "title": "B - 視程の通報 \\| AtCoder Beginner Contest 001",
        "excerpt":"B - 視程の通報 | AtCoder Beginner Contest 001 解法 指示通りに条件分岐するだけだが入力は条件はで指定されていることに注意．境界が含むかどうかに注意． コーナーケース検討 指定された範囲ではやなど想定されていない範囲があるが，問題文にその範囲の入力はないとある．除算があるが，VVが整数値になる入力しかないとあるのでこちらも気にしないでいい． 実装 指定された範囲はそれぞれ排反なのでelse文を有効活用する．コーナーケース検討時に考えたことを踏まえ以下のように実装するととなる下限の部分はelseで賄われているのでわざわざ や などと条件を記述しなくて良い．仮にそうするならば最後のelse文をelse ifとしないと(回答としては問題がないが)途中で抜け落ちたや  が最後のelse文に含まれてしまい気持ち悪い．出力に関してはVVが1桁かどうか判定して先頭に’0’を足してもいいが，出力フォーマットを指定できるStream manipulatorsがc++のiostreamには用意されているのでそれを用いた． if (m &lt; 100) ans = 0;else if (m &lt;= 5000) ans = m * 10 / 1000;else if (m &lt;= 30000) ans = m / 1000 + 50;else if (m &lt;= 70000) ans = (m - 30000) / 5000 + 80;else ans = 89;cout &lt;&lt; setfill('0') &lt;&lt; setw(2) &lt;&lt; right &lt;&lt; ans &lt;&lt; endl;Submission データ構造・アルゴリズム   Stream manipulatorsによる出力フォーマット指定          setfill()      setw()      right()      left()      internal()      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC001","100","stream_manipulators"],
        "url": "https://ytoku.com/writeup/ABC001B/",
        "teaser":null},{
        "title": "A - 正直者 \\| AtCoder Beginner Contest 002",
        "excerpt":"A - 正直者 | AtCoder Beginner Contest 002 解法 俺も神の恵み欲しいし，高橋くんは欲望に忠実でえらい．最大値を返すだけ． コーナーケース検討 max()関数は比較する2数が同じ値でも問題ないが，互いに異なることが保証されている． 実装 Submission データ構造・アルゴリズム   max()","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC002","100","max()"],
        "url": "https://ytoku.com/writeup/ABC002A/",
        "teaser":null},{
        "title": "B - 罠 \\| AtCoder Beginner Contest 002",
        "excerpt":"B - 罠 | AtCoder Beginner Contest 002 解法   文字列を走査し母音以外を1字毎に出力するor   push_back()で子音のみの文字列を生成し出力する前者の方が早そうなので前者を採用 コーナーケース検討 この解法なら文字列に子音が含まれなくても改行が出力されるので問題ないが，問題文で最低1字の子音の存在が保証されている． 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC002","100"],
        "url": "https://ytoku.com/writeup/ABC002B/",
        "teaser":null},{
        "title": "A - AtCoder社の給料 \\| AtCoder Beginner Contest 003",
        "excerpt":"A - AtCoder社の給料 | AtCoder Beginner Contest 003 解法 得られる給料の期待値を求める．期待値は \\ コーナーケース検討 右辺を使えば誤差は出ない． 実装 Submission データ構造・アルゴリズム   等差数列の和の公式(初項1,公差1)                              ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC003","100","等差数列"],
        "url": "https://ytoku.com/writeup/ABC003A/",
        "teaser":null},{
        "title": "B - AtCoderトランプ  \\| AtCoder Beginner Contest 003",
        "excerpt":"B - AtCoderトランプ | AtCoder Beginner Contest 003 解法 敗北するケースを考える   S[i] == T[i] (両方’@’はこっち)          負けない        S[i] != T[i]          どちらも’@’じゃない場合                  負け                    どちらかが’@’                  もう一方が{‘a’,’t’,’c’,’o’,’d’,’e’,’r’}なら負けない          そうでないなら負け                    S.size()文字数分検証し敗北条件に引っかからなければ勝ちとする． コーナーケース検討 SとTの文字数が違うことは無い． 実装 string ans = \"You can win\";REP(i, S.size()) {    if (S[i] != T[i]) {        if (S[i] != '@' &amp;&amp; T[i] != '@') ans = \"You will lose\";        else if(S[i] == '@') {            if (T[i] != 'a' &amp;&amp; T[i] != 't' &amp;&amp; T[i] != 'c' &amp;&amp; T[i] != 'o' &amp;&amp; T[i] != 'd'&amp;&amp; T[i] != 'e' &amp;&amp; T[i] != 'r') ans = \"You will lose\";        }        else {            if (S[i] != 'a' &amp;&amp; S[i] != 't' &amp;&amp; S[i] != 'c' &amp;&amp; S[i] != 'o' &amp;&amp; S[i] != 'd'&amp;&amp; S[i] != 'e' &amp;&amp; S[i] != 'r') ans = \"You will lose\";        }    } }Submission 解説を見ると，連想配列を使ったいい感じの方法が紹介されていたので実装してみる．     string ans = \"You can win\";    map&lt;char,int&gt; score_mp;    score_mp['@'] = 10;    for (char c = 'a'; c &lt;= 'z'; c++) {        if (c == 'a' || c == 't' || c == 'c' || c == 'o' || c == 'd' || c == 'e' || c == 'r') {            score_mp[c] = 1;        }        else score_mp[c] = 0;    }    REP(i, S.size()) {        if (S[i] != T[i]) {            if(score_mp[S[i]] + score_mp[T[i]] &lt; 11)ans = \"You will lose\";        }     }Submission   S[i] != T[i]          どちらも’@’じゃない場合                  負け                          score_mp[S[i]] + score_mp[T[i]] &lt;= 2                                          どちらかが’@’                  もう一方が{‘a’,’t’,’c’,’o’,’d’,’e’,’r’}なら負けない                          score_mp[S[i]] + score_mp[T[i]] = 11                                そうでないなら負け                          score_mp[S[i]] + score_mp[T[i]] = 10                                          となりscore_mp[S[i]] + score_mp[T[i]]の値が11以上か否かを1文字ずつの勝敗判定に対応させることができ，ループ内の条件文がスッキリする(点数の振り方は別に10じゃなくても勝敗で分離出来ればいい)．今回は10進数を用いたがn&gt;=2進数で下記のように割り当てて11以上が勝利   00 -&gt; ‘a’,’t’,’c’,’o’,’d’,’e’,’r’以外の小文字アルファベット  01 -&gt; ‘a’,’t’,’c’,’o’,’d’,’e’,’r’  10 -&gt; ‘@’実際のコンテスト中に思いつけるかは分からないが，このような符号化が出来ないかという思考回路は持っておくと良さそうに感じた． データ構造・アルゴリズム   map  符号化          n進数を用いた符号化      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC003","100","map","符号化"],
        "url": "https://ytoku.com/writeup/ABC003B/",
        "teaser":null},{
        "title": "A - 流行 \\| AtCoder Beginner Contest 004",
        "excerpt":"A - 流行 | AtCoder Beginner Contest 004 解法 高橋くんにお金貸したい…()2 * Nを出力する． コーナーケース検討 Nの範囲的にオーバーフローはしない． 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC004","100"],
        "url": "https://ytoku.com/writeup/ABC004A/",
        "teaser":null},{
        "title": "B - 回転 \\| AtCoder Beginner Contest 004",
        "excerpt":"B - 回転 | AtCoder Beginner Contest 004 解法  は180°回転するとに対応する． コーナーケース検討 行の末尾は” “ではなく”\\n” 実装 indexに注意する．0-indexで実装するのでn = 3． REP(i, 4){    REP(j, 4){        cout &lt;&lt; board[3 - i][3 - j];        if (j != 3) cout &lt;&lt; \" \";    }    cout &lt;&lt; endl;} Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC004","100"],
        "url": "https://ytoku.com/writeup/ABC004B/",
        "teaser":null},{
        "title": "A - おいしいたこ焼きの作り方　\\| AtCoder Beginner Contest 005",
        "excerpt":"A - おいしいたこ焼きの作り方 | AtCoder Beginner Contest 005 解法 int型の除算の問題．y/xを出力する． コーナーケース検討 正の整数のみなので問題ない． 実装 Submission データ構造・アルゴリズム   int型の除算","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC005","100","int"],
        "url": "https://ytoku.com/writeup/ABC005A/",
        "teaser":null},{
        "title": "B - おいしいたこ焼きの食べ方 \\| AtCoder Beginner Contest 005",
        "excerpt":"B - おいしいたこ焼きの食べ方 | AtCoder Beginner Contest 005 解法 入力の文字がうまく表示されてなくてぎょっとするが特に問題に影響はしない．のうち最小値を返す． コーナーケース検討 Nは正の整数なので特に無い． 実装 priority_queueはデフォルトでは降順に出てくる(less())のでgreater()を指定する． priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; pq;REP(i, N) {    int tmp; cin &gt;&gt; tmp;    pq.push(tmp);}cout &lt;&lt; pq.top() &lt;&lt; endl;Submission データ構造・アルゴリズム   priority_queue          push()      pop()      top()      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC005","100","priority_queue"],
        "url": "https://ytoku.com/writeup/ABC005B/",
        "teaser":null},{
        "title": "A - 世界のFizzBuzz \\| AtCoder Beginner Contest 006",
        "excerpt":"A - 世界のFizzBuzz | AtCoder Beginner Contest 006 解法 FizzBuzzの一種．3が含まれる場合とあるが入力がひと桁のみなので単に3で割り切れるかどうかの判断のみでいい．仮に複数桁の入力を許すとしたらwhile文で10の商と余りをチェックする感じかな コーナーケース検討 特になし． 実装 Submission データ構造・アルゴリズム   FizzBuzz","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC006","100","FizzBuzz"],
        "url": "https://ytoku.com/writeup/ABC006A/",
        "teaser":null},{
        "title": "B - トリボナッチ数列 \\| AtCoder Beginner Contest 006",
        "excerpt":"B - トリボナッチ数列 | AtCoder Beginner Contest 006 解法 フィボナッチ数の3つ版．フィボナッチは人名だが項数が増えた版は冗談のような名付けになっている．実装方法はフィボナッチと同じく再帰．愚直に計算するととなってしまうが，再帰関数の返り値をメモ化することでで求められる． コーナーケース検討 10007で割った余りを出力する． 実装 配列は初期化子リスト{}で指定しなかった要素は0初期化されるので{}で全要素を0初期化出来る．また代入式はその代入される変数の変わりに使用できるのでtri()のreturn文は以下のように書ける． #define MOD 10007int memo[1000001] = {};//0-initializedint tri(int n) {    if (n &lt;= 3 || memo[n] &gt; 0) return memo[n];    return memo[n] = (tri(n - 3) + tri(n - 2) + tri(n - 1))%MOD;    // return memo[n] = (tri(n - 1) + tri(n - 2) + tri(n - 3))%MOD;}int main(int argc, char const *argv[]){    int n; cin &gt;&gt; n;    memo[3] = 1;    cout &lt;&lt; tri(n) &lt;&lt; endl;    return 0;}Submission上記のソースコードでコメントアウトしてある順で記述すると上図のように実行速度，使用メモリ量ともに増加するのでtri(x)で出来るだけメモ化された値を再利用する(xが小さい順に計算される)ようにした方が効率がいい(この問題自体はどちらでもAC)．Submission データ構造・アルゴリズム   初期化          配列                  初期化子{}                      再帰  メモ化          初期化(今回は0初期化)        余り","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC006","100","初期化","メモ化","余り"],
        "url": "https://ytoku.com/writeup/ABC006B/",
        "teaser":null},{
        "title": "A - 植木算 \\| AtCoder Beginner Contest 007",
        "excerpt":"A - 植木算 | AtCoder Beginner Contest 007 解法 n-1を出力する． コーナーケース検討 n &gt;= 1なので問題ない． 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC007","100"],
        "url": "https://ytoku.com/writeup/ABC007A/",
        "teaser":null},{
        "title": "B - 辞書式順序 \\| AtCoder Beginner Contest 007",
        "excerpt":"B - 辞書式順序 | AtCoder Beginner Contest 007 解法 |A| &gt; 1の時は|A|の末尾一文字削って，|A|==1の時はA[0]==’a’の時は-1,それ以外はA[0]-1を出力する．という方針でやったのがSubmissionだが，文字列のコピーは終端文字(‘\\0’)の扱いがセンシティブになるので出来るだけ使用は避けたい．一個目の条件に引っ張られたがそもそも”a”以外の文字列より”a”の方が小さいのでA=”a”以外の時は”a”を返すことにする． コーナーケース検討 A = “a” の場合 -1を返す． 実装 string A; cin &gt;&gt; A;if(A == \"a\") cout &lt;&lt; -1 &lt;&lt; endl;else cout &lt;&lt; \"a\" &lt;&lt; endl;Submission データ構造・アルゴリズム   string          比較演算子（== != &lt; &lt;= &gt; &gt;=）      copy()      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC007","100","string","copy()"],
        "url": "https://ytoku.com/writeup/ABC007B/",
        "teaser":null},{
        "title": "A - アルバム \\| AtCoder Beginner Contest 008",
        "excerpt":"A - アルバム | AtCoder Beginner Contest 008 解法 T - (S - 1)を出力する． コーナーケース検討 S == 1の場合も S == Tの場合も同様で問題ない． 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC008","100"],
        "url": "https://ytoku.com/writeup/ABC008A/",
        "teaser":null},{
        "title": "B - 投票 \\| AtCoder Beginner Contest 008",
        "excerpt":"B - 投票 | AtCoder Beginner Contest 008 解法 名前をkeyとしてその得票数をvalueとする連想配列を用いそこから最大valueを持つkeyを返す．特にkeyでsortする必要はないのでunordered_map&lt;string,int&gt;を利用する． コーナーケース検討 票数は必ず1以上であることが保証されている．無記名票等はなし．同数の場合はそのうち誰でもいい． 実装 unordered_map()のoperator[]は存在しないkeyにアクセスするとdefault constructorによる要素生成(今回はintなので0初期化)を行うのでmp[s]++の部分は以下のような挙動になる．   (keyが存在しない) -&gt; 0(生成) -&gt; 1(後置インクリメント)  (keyが存在) -&gt; mp[s]++(後置インクリメント)そうして得票数がmpに格納出来たので，max_element()を用いてvalueが最大値を示すiteratorを取得し，そのkeyを出力する． int N; cin &gt;&gt; N;unordered_map&lt;string, int&gt; mp;REP(i, N) {    string s; cin &gt;&gt; s;    mp[s]++;}auto it = *max_element(mp.begin(),mp.end(),[](const pair&lt;string,int&gt; &amp; p1, const pair&lt;string,int&gt; &amp; p2){    return p1.second &lt; p2.second;});cout &lt;&lt; it.first &lt;&lt; endl;Submission データ構造・アルゴリズム   unordered_map          operator[]        max_element()","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC008","100","unordered_map","max_element()"],
        "url": "https://ytoku.com/writeup/ABC008B/",
        "teaser":null},{
        "title": "A - 引越し作業 \\| AtCoder Beginner Contest 009",
        "excerpt":"A - 引越し作業 | AtCoder Beginner Contest 009 解法 出来るだけ両手を使うのが往復回数を減らすのには必要なので，両手を使う場合はN/2回．片手を使う場合はN%2回．必要な往復数はint型でN/2+N%2． コーナーケース検討 N == 1の時 0 + 1 = 1でこれを満たす． 実装 Submission データ構造・アルゴリズム   int型の扱い","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC009","100","int"],
        "url": "https://ytoku.com/writeup/ABC009A/",
        "teaser":null},{
        "title": "B - 心配性な富豪、ファミリーレストランに行く。 \\| AtCoder Beginner Contest 009",
        "excerpt":"B - 心配性な富豪、ファミリーレストランに行く。  | AtCoder Beginner Contest 009 解法 文章量の割に必要な情報が少ない．setを使い金額をuniqueに格納する．デフォルトだと昇順なのでrbegin()を用いイテレータを1つ進めたところの値を出力する． コーナーケース検討 全ての料理の金額が同じであることはない．とあるので2&lt;=Nより必ず2番目に高い料理が存在する． 実装 rbegin()を1つ進めることで2番目に高い料理の値段が得られる． set&lt;int&gt; st;REP(i, N) {    int tmp; cin &gt;&gt; tmp;    st.insert(tmp);}auto itr = st.rbegin();itr++;cout &lt;&lt; *itr &lt;&lt; endl;Submission データ構造・アルゴリズム   set          insert()      rbegin()      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC009","100"],
        "url": "https://ytoku.com/writeup/ABC009B/",
        "teaser":null},{
        "title": "A - ハンドルネーム \\| AtCoder Beginner Contest 010",
        "excerpt":"A - ハンドルネーム  | AtCoder Beginner Contest 010 解法 入力に”pp”を連結して出力する． コーナーケース検討 特になし 実装 Submission データ構造・アルゴリズム   string          連結(+)      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC010","100","string"],
        "url": "https://ytoku.com/writeup/ABC010A/",
        "teaser":null},{
        "title": "B - 花占い \\| AtCoder Beginner Contest 010",
        "excerpt":"B - 花占い | AtCoder Beginner Contest 010 解法 なぎさちゃんに軽く狂気を感じるが…枚数を3で割った余りが2または偶数ではいけない．nも$a_i$の最大値も小さいのでwhile文でカウントするだけ． コーナーケース検討 花びらが1枚のときには嫌いにはならないので条件を満たさないことはない． 実装     int count = 0;    vector&lt;int&gt; a;    REP(i, n) {        int tmp;        cin &gt;&gt; tmp;        a.push_back(tmp);    }    for (auto x: a) {        while(x % 3 == 2|| x % 2 == 0) {            count++;            x--;        }    }    cout &lt;&lt; count &lt;&lt; endl;Submission データ構造・アルゴリズム   vector          push_back()      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC010","100","vector","push_back()"],
        "url": "https://ytoku.com/writeup/ABC010B/",
        "teaser":null},{
        "title": "A - 来月は何月？ \\| AtCoder Beginner Contest 011",
        "excerpt":"A - 来月は何月？  | AtCoder Beginner Contest 011 解法 12月以外はN+1を返せばいい． コーナーケース検討 12月は1を返す． 実装 三項演算子を使った．三項演算子の返り値はexpressionなので以下のように()で括る必要がある． cout &lt;&lt; ((N != 12) ? N + 1: 1) &lt;&lt; endl;Submission データ構造・アルゴリズム   三項演算子(?)","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC011","100","三項演算子?"],
        "url": "https://ytoku.com/writeup/ABC011A/",
        "teaser":null},{
        "title": "B - 名前の確認 \\| AtCoder Beginner Contest 011",
        "excerpt":"B - 名前の確認 | AtCoder Beginner Contest 011 解法 1文字目だけ大文字であとは小文字にする． コーナーケース検討 1文字しか無い場合はサンプルケースのように大文字1文字返せばいいので特に問題はない． 実装 tolower()/toupper()は該当するasciiコードの場合以外はそのままの値を返すのでこれらを使うとスッキリ書ける． for(int i = 1; i &lt; S.size(); i++) S[i] = tolower(S[i]);S[0] = toupper(S[0]);Submission データ構造・アルゴリズム   toupper()  tolower()","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC011","100","toupper()","tolower()"],
        "url": "https://ytoku.com/writeup/ABC011B/",
        "teaser":null},{
        "title": "A - スワップ \\| AtCoder Beginner Contest 012",
        "excerpt":"A - スワップ | AtCoder Beginner Contest 012 解法 入れ替えて出力するだけ コーナーケース検討 特になし 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC012","100"],
        "url": "https://ytoku.com/writeup/ABC012A/",
        "teaser":null},{
        "title": "B - 入浴時間 \\| AtCoder Beginner Contest 012",
        "excerpt":"B - 入浴時間 | AtCoder Beginner Contest 012 解法 秒を3600や60との余りや除算を用いて変換する． コーナーケース検討 0&lt;= hh, mm , ss &lt;= 59 各値がひと桁のときは0埋め右詰めでhh:mm:ssとする． 実装 それぞれ以下のように求まる． int h = N / 3600;int m = (N % 3600) / 60;int s = N % 60;出力の整形にはsetw()，setfill()を用いる． cout &lt;&lt; setfill('0') &lt;&lt; setw(2) &lt;&lt; h &lt;&lt; \":\" &lt;&lt; setw(2) &lt;&lt; m &lt;&lt; \":\" &lt;&lt; setw(2) &lt;&lt; s &lt;&lt; endl;Submission データ構造・アルゴリズム   int型の除算  Stream manipulatorsによる出力フォーマット指定          setfill()      setw()      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC012","100","stream_manipulators","int"],
        "url": "https://ytoku.com/writeup/ABC012B/",
        "teaser":null},{
        "title": "A - A \\| AtCoder Beginner Contest 013",
        "excerpt":"A - A | AtCoder Beginner Contest 013 解法 与えられるアルファベットがA~Eなので全パターンを直打ちしてもいいが，ascii値を使って’A’との距離を計算する． コーナーケース検討 ‘A’が0ではなく1に注意． 実装 cout &lt;&lt; X - 'A' + 1 &lt;&lt; endl;Submission データ構造・アルゴリズム   ascii","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC013","100","ascii"],
        "url": "https://ytoku.com/writeup/ABC013A/",
        "teaser":null},{
        "title": "B - 錠 \\| AtCoder Beginner Contest 013",
        "excerpt":"B - 錠 | AtCoder Beginner Contest 013 解法 0-&gt;9, 9-&gt;0をまたぐ場合とまたがない場合のうち小さい方を出力する． コーナーケース検討 a!=bとなっているがあってもなくても特に影響しない 実装 絶対値を取るabs()を使えば必要な回数は0-&gt;9,9-&gt;0をまたがない場合はabs(b-a)，またぐ場合は10 - abs(b-a)となる． cout &lt;&lt; min(abs(b - a),10 - (b - a)) &lt;&lt; endl;Submission データ構造・アルゴリズム   min()  abs()","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC013","100","min()","abs()"],
        "url": "https://ytoku.com/writeup/ABC013B/",
        "teaser":null},{
        "title": "A - けんしょう先生のお菓子配り \\| AtCoder Beginner Contest 014",
        "excerpt":"A - けんしょう先生のお菓子配り | AtCoder Beginner Contest 014 解法 買い足す個数は   持っているお菓子の数が生徒数で割り切れれば          0        割り切れなければ          b - a%b        コーナーケース検討         a,bは0になることはない．         実装         cout &lt;&lt; ((a%b == 0) ? 0 : b - a%b) &lt;&lt; endl;                    Submission データ構造・アルゴリズム   int型の扱い  三項演算子(?)","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC014","100","int","三項演算子?"],
        "url": "https://ytoku.com/writeup/ABC014A/",
        "teaser":null},{
        "title": "B - 価格の合計 \\| AtCoder Beginner Contest 014",
        "excerpt":"B - 価格の合計 | AtCoder Beginner Contest 014 解法 問題文の誘導どおりにXの2進表記のi番目のbitが立っているかどうかを判定し和を取る． コーナーケース検討 価格の総和は  程度なのでintに収まる． 実装 Xの2進表記のi番目のbitが立っているかどうかをX &amp; (1 « i)で判定出来る． int a[20] = {};int sum = 0;REP(i, n){    cin &gt;&gt; a[i];}REP(i, n){    if (X &amp; (1 &lt;&lt; i)) sum += a[i]; }cout &lt;&lt; sum &lt;&lt; endl;Submission データ構造・アルゴリズム   bit演算","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC014","100","bit"],
        "url": "https://ytoku.com/writeup/ABC014B/",
        "teaser":null},{
        "title": "A - 高橋くんの研修 \\| AtCoder Beginner Contest 015",
        "excerpt":"A - 高橋くんの研修 | AtCoder Beginner Contest 015 解法 文字列のうち大きい方の文字列を返す． コーナーケース検討 同じ長さであることはないことが保証されている． 実装 stringのsize()を比較する．Submission データ構造・アルゴリズム   三項演算子(?)","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC015","100","三項演算子?"],
        "url": "https://ytoku.com/writeup/ABC015A/",
        "teaser":null},{
        "title": "B - 高橋くんの集計 \\| AtCoder Beginner Contest 015",
        "excerpt":"B - 高橋くんの集計 | AtCoder Beginner Contest 015 解法 ループでバグの合計数とバグのあるプログラムの数を集計し，上司に報告するように平均値を整数に繰り上げて出力する． コーナーケース検討 ソフトウェアのバグの合計数が0でないことは保証されている．(以下のコードで0除算になることは無い) 実装 A,Bをint型の正の整数とするとA/BでA/B以下の最初の整数値，A/B + (A%B!=0)でA/B以上の最初の整数値が取得できる． int N; cin &gt;&gt; N;int A[100];int sum = 0;int num_p = 0;REP(i,N) {    cin &gt;&gt; A[i];    if (A[i] &gt; 0) {        num_p++;        sum += A[i];    }}cout &lt;&lt; sum/num_p + (sum%num_p != 0) &lt;&lt; endl;Submission データ構造・アルゴリズム   int型の扱い","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC015","100","int"],
        "url": "https://ytoku.com/writeup/ABC015B/",
        "teaser":null},{
        "title": "A - 12月6日 \\| AtCoder Beginner Contest 016",
        "excerpt":"A - 12月6日 | AtCoder Beginner Contest 016 解法 月を日で割って余りが出るか否かで判定する． コーナーケース検討 特になし 実装 Submission データ構造・アルゴリズム   三項演算子?","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC016","100","三項演算子?"],
        "url": "https://ytoku.com/writeup/ABC016A/",
        "teaser":null},{
        "title": "B - A±B Problem \\| AtCoder Beginner Contest 016",
        "excerpt":"B - A±B Problem | AtCoder Beginner Contest 016 解法 問題分から条件は2つありそれぞれの条件を満たす場合をp,mとした時   p&amp;&amp;m  p  m  !p&amp;&amp;!mと場合分けして対応する記号を出力すればいい． コーナーケース検討 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC016","100"],
        "url": "https://ytoku.com/writeup/ABC016B/",
        "teaser":null},{
        "title": "A - プロコン \\| AtCoder Beginner Contest 017",
        "excerpt":"A - プロコン | AtCoder Beginner Contest 017 解法 割合の計算をして総和をとる． コーナーケース検討 sは10の倍数なので演算途中に小数となることはない． 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC017","100"],
        "url": "https://ytoku.com/writeup/ABC017A/",
        "teaser":null},{
        "title": "B - choku語 \\| AtCoder Beginner Contest 017",
        "excerpt":"B - choku語 | AtCoder Beginner Contest 017 解法 1文字ずつ見ていきc,o,k,u以外の文字が出てきたらNO, またcの次にはhが来ていなければNO，それ以外はYESを返す． コーナーケース検討 cが最後に来ている場合に注意． 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC017","100"],
        "url": "https://ytoku.com/writeup/ABC017B/",
        "teaser":null},{
        "title": "A - 豆まき  \\| AtCoder Beginner Contest 018",
        "excerpt":"A - 豆まき | AtCoder Beginner Contest 018 解法 全部で3人しかいないのでそのうち最大値の人が1位，最小値の人が3位，残りの人を2位とする． コーナーケース検討 三人の得点は互いに異なることが保証されている． 実装 Submission データ構造・アルゴリズム   max()  min()","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC018","100","max()","min()"],
        "url": "https://ytoku.com/writeup/ABC018A/",
        "teaser":null},{
        "title": "B - 文字列の反転 \\| AtCoder Beginner Contest 018",
        "excerpt":"B - 文字列の反転 | AtCoder Beginner Contest 018 解法 問題文どおりに番目と番目の間の文字列を反転する． コーナーケース検討 1文字目が0番目ではなく1から始まっていることに注意．またreverse()の引数の指定の仕方にも注意． 実装 入力を受けるとともに処理をすればl,rは以下のように再利用できる． string S; cin &gt;&gt; S;int N; cin &gt;&gt; N;int l, r;auto itr = S.begin();REP(i, N) {    cin &gt;&gt; l &gt;&gt; r;    reverse(itr + (l - 1), itr + r);}cout &lt;&lt; S &lt;&lt; endl;Submission データ構造・アルゴリズム   reverse()","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC018","100","reverse()"],
        "url": "https://ytoku.com/writeup/ABC018B/",
        "teaser":null},{
        "title": "A - 高橋くんと年齢 \\| AtCoder Beginner Contest 019",
        "excerpt":"A - 高橋くんと年齢 | AtCoder Beginner Contest 019 解法 小さい順にソートし2番目の値を出力する． コーナーケース検討 同じ数を許容する． 実装 同じ数を許容できるようmultiset()を用いた． multiset&lt;int&gt; mst;REP(i, 3) {    int x; cin &gt;&gt; x;    mst.insert(x);}auto itr = mst.begin();cout &lt;&lt; *++itr &lt;&lt; endl;Submission データ構造・アルゴリズム   multiset()","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC019","100","multiset()"],
        "url": "https://ytoku.com/writeup/ABC019A/",
        "teaser":null},{
        "title": "B - 高橋くんと文字列圧縮 \\| AtCoder Beginner Contest 019",
        "excerpt":"B - 高橋くんと文字列圧縮 | AtCoder Beginner Contest 019 解法 回答用の文字列を用意し，前から順に文字列を見ていき新しい文字が出てきたらそれを回答用の文字列に追加し，同じ文字の間は個数をカウントし，違う文字が出てきたらそのカウントを回答用の文字列に連結する．これを繰り返す． コーナーケース検討 特になし 実装 string s; cin &gt;&gt; s;string ans = \"\";char pre = ' ';REP(i, s.size()) {    if(s[i] != pre) {        pre = s[i];        ans += s[i];        int cnt = 1;        while(i &lt; s.size() - 1 &amp;&amp; pre == s[i + 1]) {            i++;            cnt++;        }        ans += to_string(cnt);    }}cout &lt;&lt; ans &lt;&lt; endl;Submission データ構造・アルゴリズム   to_string()","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC019","100","to_string()"],
        "url": "https://ytoku.com/writeup/ABC019B/",
        "teaser":null},{
        "title": "A - クイズ \\| AtCoder Beginner Contest 020",
        "excerpt":"A - クイズ | AtCoder Beginner Contest 020 解法 Qの値で出力を分岐するだけ． コーナーケース検討 入力はQが1か2のみ 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC020","100"],
        "url": "https://ytoku.com/writeup/ABC020A/",
        "teaser":null},{
        "title": "B - 足し算 \\| AtCoder Beginner Contest 020",
        "excerpt":"B - 足し算 | AtCoder Beginner Contest 020 解法 問題文通り計算する． コーナーケース検討 特になし． 実装 入力をstringとして取ることで，簡単に結合でき，その後stoi()を用い計算する． string A, B; cin &gt;&gt; A &gt;&gt; B;A += B;cout &lt;&lt; stoi(A)*2 &lt;&lt; endl;Submission データ構造・アルゴリズム   stoi()","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC020","100","stoi()"],
        "url": "https://ytoku.com/writeup/ABC020B/",
        "teaser":null},{
        "title": "A - 足し算 \\| AtCoder Beginner Contest 021",
        "excerpt":"A - 足し算 | AtCoder Beginner Contest 021 解法 同じ2の累乗数をいくつ使ってもいいとあるのでこの問題の範囲では1をN個とすればよいが，各2の累乗数の使用回数を1回以下と考えると2の累乗数の和でNを表すというのはNを2進数表記することなので今回はその方針で解いた． コーナーケース検討 N&lt;=10なので4bitあれば表現できる． 実装 REP(i, 4) {    if (N &amp; 1 &lt;&lt; i){        count++;    }}cout &lt;&lt; count &lt;&lt; endl;REP(i, 4) {    if (N &amp; 1 &lt;&lt; i){        cout &lt;&lt; (1 &lt;&lt; i) &lt;&lt; endl;    }}Submission データ構造・アルゴリズム   bit演算","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC021","100","bit"],
        "url": "https://ytoku.com/writeup/ABC021A/",
        "teaser":null},{
        "title": "B - 嘘つきの高橋くん \\| AtCoder Beginner Contest 021",
        "excerpt":"B - 嘘つきの高橋くん | AtCoder Beginner Contest 021 解法 最短路の可能性があるかの判定問題．町同士の位置関係や距離(重み付け)等もないので，単に1度訪れた町をもう一度経由する(グラフとして見た時に閉路)場合は最短路ではないことはわかる． コーナーケース検討 出発地点とゴール地点が，ではないことに注意． 実装 aとbは訪れているということにしておき，に以前に訪れていた場合には最短路ではないと判定．． int visited[101] = {};int a, b; cin &gt;&gt; a &gt;&gt; b;visited[a]++; visited[b]++;int K; cin &gt;&gt; K;string ans = \"YES\";REP(i, K) {    int tmp; cin &gt;&gt; tmp;    if (visited[tmp] == 1) {        ans = \"NO\";        break;    }    visited[tmp]++;}cout &lt;&lt; ans &lt;&lt; endl;Submission データ構造・アルゴリズム   最短路","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC021","100"],
        "url": "https://ytoku.com/writeup/ABC021B/",
        "teaser":null},{
        "title": "A - Best Body \\| AtCoder Beginner Contest 022",
        "excerpt":"A - Best Body | AtCoder Beginner Contest 022 解法 入力取得時に日目の体重が条件を満たしているかカウントする． コーナーケース検討 体重はなのでintに収まる． 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC022","100"],
        "url": "https://ytoku.com/writeup/ABC022A/",
        "teaser":null},{
        "title": "B - Bumble Bee \\| AtCoder Beginner Contest 022",
        "excerpt":"B - Bumble Bee | AtCoder Beginner Contest 022 解法 出てきた順に格納しておき，二度目以降の場合にはカウントしていく． コーナーケース検討 同一種類の花にn回訪れるとn-1個の花が受粉する． 実装 int N; cin &gt;&gt; N;unordered_map&lt;int, int&gt; ump;int res = 0;REP(i, N) {    int tmp; cin &gt;&gt; tmp;    if(ump[tmp] &gt; 0) res++;    ump[tmp]++;}cout &lt;&lt; res &lt;&lt; endl;Submission データ構造・アルゴリズム   unordered_map          operator[]      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC022","100","unordered_map"],
        "url": "https://ytoku.com/writeup/ABC022B/",
        "teaser":null},{
        "title": "A - 加算王 \\| AtCoder Beginner Contest 023",
        "excerpt":"A - 加算王 | AtCoder Beginner Contest 023 解法 n進数の各桁を取り扱いたい場合は，nでの商，余りを考えればいい．今回はXが10進数なので10で割った商がXの10の位で，余りが1の位になる． コーナーケース検討 2桁の入力しかないので問題ないことは保証されている． 実装 Submission データ構造・アルゴリズム   int型の扱い","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC023","100","int"],
        "url": "https://ytoku.com/writeup/ABC023A/",
        "teaser":null},{
        "title": "B - 手芸王 \\| AtCoder Beginner Contest 023",
        "excerpt":"B - 手芸王 | AtCoder Beginner Contest 023 解法 最終的に行うことは正しく生成された場合のN文字の文字列との一致検証． コーナーケース検討 手順0の場合のみ手順3nとは違う操作なので注意．手順通り行うと偶数文字になることはない． 実装 試行数を問われているので，以下のresのようにループのインデックスをループの外で宣言することでその値を利用する． int N; cin &gt;&gt; N;string S; cin &gt;&gt; S;string ans = \"b\";int res = 0;for(res = 1; ans.size() &lt; N; res++) {    if (res % 3 == 1) ans = 'a' + ans + 'c';    else if (res % 3 == 2) ans = 'c' + ans + 'a';    else ans = 'b' + ans + 'b';}if (ans == S) cout &lt;&lt; res &lt;&lt; endl;else cout &lt;&lt; -1 &lt;&lt; endl;return 0;Submission データ構造・アルゴリズム   string          比較演算子（== != &lt; &lt;= &gt; &gt;=）      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC023","100","string"],
        "url": "https://ytoku.com/writeup/ABC023B/",
        "teaser":null},{
        "title": "A - 動物園 \\| AtCoder Beginner Contest 024",
        "excerpt":"A - 動物園 | AtCoder Beginner Contest 024 解法 コーナーケース検討 割引は全員に適用される(団体数以上の人のみではない)．割引後の価格が負になることはない(より) 実装 普通に場合分けしてもいいが，以下のように書くことで(S + T &gt;= K)はtrueならばfalseならば0にキャストされるので場合分けを式の中に含めることができ，一行で書ける． cout &lt;&lt; A*S + B*T - (S + T &gt;= K)*(S + T)*C &lt;&lt; endl;Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC024","100"],
        "url": "https://ytoku.com/writeup/ABC024A/",
        "teaser":null},{
        "title": "B - 自動ドア \\| AtCoder Beginner Contest 024",
        "excerpt":"B - 自動ドア | AtCoder Beginner Contest 024 解法 の時  までの間にドアが空いている時間はなのでこの和を取ればいい． コーナーケース検討  秒間は必ず開いている．これ だと今日じゃなくないか…？と問題文だけだと思ったが，test case 3を見ると1日を溢れていてもカウントしているようなのでそこから24時間以降のドアが空いている時間の扱いを判断する．(今日がどこまでを指しているのかがあいまいなので問題文で制約をもっとかけてほしい)この問題は一度もドアが空いている間に次の人が来ない場合に最大秒なのでギリギリint型に収まるが，sumを取る場合はlong long型の使用も検討する． 実装 Submission データ構造・アルゴリズム   min()","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC024","100","min()"],
        "url": "https://ytoku.com/writeup/ABC024B/",
        "teaser":null},{
        "title": "A - 25個の文字列 \\| AtCoder Beginner Contest 025",
        "excerpt":"A - 25個の文字列 | AtCoder Beginner Contest 025 解法 stringの配列を25個用意し辞書順に格納し，指定されたindexの文字列を返す． コーナーケース検討 1-indexでNが与えられることに注意． 実装 c++でstring同士は+で連結出来るが，char同士は出来ないことに注意する．Submission データ構造・アルゴリズム   string","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC025","100","string"],
        "url": "https://ytoku.com/writeup/ABC025A/",
        "teaser":null},{
        "title": "B - 双子とスイカ割り \\| AtCoder Beginner Contest 025",
        "excerpt":"B - 双子とスイカ割り | AtCoder Beginner Contest 025 解法 “East”,”West”どちらかを正方向とし全ての指示された距離を制約に従いならA， ならBに変換しつつ足し合わせ，その正負で方角を判断する． コーナーケース検討 出力時方角があればd &gt; 0とし，0のときはフォーマットが違うことに注意． 実装 Submission データ構造・アルゴリズム 特になし ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC025","100"],
        "url": "https://ytoku.com/writeup/ABC025B/",
        "teaser":null},{
        "title": "A - 掛け算の最大値 \\| AtCoder Beginner Contest 026",
        "excerpt":"A - 掛け算の最大値 | AtCoder Beginner Contest 026 解法 ループでA通りの積(A-i)*iのパターンを取り最大値を返す． コーナーケース検討 A*0も最大値となることはないので含めてもどちらでも構わない． 実装 Submission データ構造・アルゴリズム   特になし","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC026","100"],
        "url": "https://ytoku.com/writeup/ABC026A/",
        "teaser":null},{
        "title": "B - N重丸 \\| AtCoder Beginner Contest 026",
        "excerpt":"B - N重丸 | AtCoder Beginner Contest 026 解法 与えられる半径を降順にソートし順に加算，減算を繰り返し和を取り最後に円周率をかけ出力する． コーナーケース検討 今回は問題ないが，2乗の和等を取る時にintをはみ出ないか注意する． 実装 円周率はmath.hで定義されている．M_PIを使う．また，デフォルトでは浮動小数点数は6桁(処理系依存？)しか表示されないので，小数点第6位まで表示されるようにfixed,setprecisionを用いて出力formatを指定する．Submission データ構造・アルゴリズム   Stream manipulatorsによる出力フォーマット指定          fixed      setprecision()      ","categories": ["writeup"],
        "tags": ["競プロ","AtCoder","ABC026","100"],
        "url": "https://ytoku.com/writeup/ABC026B/",
        "teaser":null}]
