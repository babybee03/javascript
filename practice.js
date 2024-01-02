function login() {
    var id = 'sora';
    var pw = '0315';
    var mistakes = 0;

    var putId = prompt("아이디를 입력하세요");
    while (putId != id) {
        alert('아이디를 다시 입력해주세요');

        mistakes++;
        if(mistakes == 5) {
            return false;
        }
        
        putId = prompt("아이디를 입력하세요");
    }

    var putPw = prompt('비밀번호를 입력하세요');
    while (putPw != pw) {
        alert('비밀번호가 일치하지 않습니다.');

        mistakes++;
        if(mistakes == 5) {
            return false;
        }

        putPw = prompt("비밀번호를 입력하세요");
    }

    return true;
}

var success = login();
if(success) {
    document.write("반갑습니다");
} else {
    document.write("로그인 제대로 좀 해라");
}
