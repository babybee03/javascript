/*
var id = 'sora';
var pw = '0315';

var putId = prompt('아이디를 입력하세요');

if (putId == 'sora') {
    var putPw = prompt('비밀번호를 입력하세요');
    if (putPw =='0315') {
        document.write(id+"님, 안녕하세요");
    } else {
        alert('비밀번호를 다시 입력해주세요');
        location.reload();
    }
} else {   
    alert('아이디를 다시 입력해주세요');
    location.reload();
}
*/
var id = 'tree';
var pw = '1234';
var user_id = prompt('아이디는?');
var user_pw = prompt('비밀번호는?');
if (id == user_id) {
    if(pw == user_pw) {
        document.write(user_id+"님, 반갑습니다");
    } else {
        alert('비밀번호가 일치하지 않습니다.');
        location.reload();
    }
} else {
    alert('아이디가 일치하지 않습니다.');
    location.reload();
}