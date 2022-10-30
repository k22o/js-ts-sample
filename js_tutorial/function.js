// functionの定義

// function命令
function add1(n1, n2) {
    return n1 + n2;
}

// Functionコンストラクタの利用
let add2 = new Function('n1', 'n2', 'return Number(n1) + Number(n2);');

// 関数リテラル
let add3 = function(n1, n2) {
    return n1 + n2;
}

//アロー関数
let add4 = (n1, n2) => {
    return n1 + n2;
}