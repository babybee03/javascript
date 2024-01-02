var id = 'jordy';
var password = '0315';

var putId = prompt('당신의 아이디를 입력하세요');


if (putId == 'jordy') {
    var putPw = prompt('당신의 비밀번호를 입력하세요');
    if (putPw == '0315') {
        document.write(id,'님, 로그인되었습니다');
    } else {
        alert('비밀번호가 일치하지 않습니다.');
        location.reload();
    }
} else {
    alert('아이디가 일치하지 않습니다.');
    location.reload();
}
