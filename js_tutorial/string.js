var str_obj = new String("Hello");  //stringオブジェクト
var str_obj2 = "konnitiha";          //これでもオッケー
var str_obj3 = "red・blue・green"
var len     = str_obj.length;       //長さの取得
var str     = str_obj.toString();   //strへの変換
var type    = str_obj.valueOf();    //オブジェクトにおける方の取得
var type2   = typeof(str_obj);      //これだとobjectとしか返ってこない
var str2    = str_obj.concat(",World","!"); //文字列結合
var cut_str = str_obj.slice(1,3);           //ある地点の切り出し
var charact = str_obj.charAt(3);        //文字を取得
var lower   = str_obj.toLowerCase();    //全て小文字に
var upper   = str_obj.toUpperCase();    //全て大文字に
var find_idx= str_obj.indexOf("ll");    //文字がある位置
var array_char = str_obj3.split("・");   //ある文字を区切りとして配列化する
var join_array = array_char.join("、");  //、を挟んで結合

console.log("str_obj ... " + str_obj);
console.log("length  ... " + len);
console.log("str     ... " + str);
console.log("type    ... " + type);
console.log("type2   ... " + type2);
console.log("str2    ... " + str2);
console.log("1,3     ... " + cut_str);
console.log("3       ... " + charact);
console.log("lower   ... " + lower);
console.log("upper   ... " + upper);
console.log("idx ll  ... " + find_idx);
console.log("array_char ... " + array_char);
console.log("join_array ... " + join_array);

//unicode
var char_a = "あ".codePointAt(0)
console.log("あ のコード ... " + char_a);
console.log("16進数で ... " + char_a.toString(16));
console.log("12354は　... " + String.fromCodePoint(12354));
console.log("aab1(16)は　... " + "{\u2042}");//16進数文字コードはリテラルが存在
//utf-16 16bitで文字を表現できる
console.log("\uD867\uDE3D");

//検索・置換
console.log(str_obj2.indexOf("nn"));
console.log(str_obj2.lastIndexOf("a"));
console.log(str_obj2.replace("a","b"));
