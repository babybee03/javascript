var arr_01 = ["사당", "교대", "방배", "강남"];
var arr_02 = ["신사", "압구정", "옥수"];
var result = arr_01.join("-");
console.log(result);

result = arr_01.concat(arr_02);
console.log(result);

result = arr_01.slice(1, 3);
console.log(result);

arr_01.sort();
console.log(arr_01);

arr_02.reverse();
console.log(arr_02);