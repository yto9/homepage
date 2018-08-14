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
        "tags": ["競プロ","AtCoder","ABC001","100","setfill()","setw()","right()","left()","internal()"],
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
        "teaser":null}]
