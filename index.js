const readline  = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let memotitle_s = []; // 메모 제목 저장배열
let content_s = []; //메모 내용 저장배열
let cnt = 0; // 메모 개수
function text(){
    console.log("1.작성 / 2.조회 / 3.수정 / 4.삭제 / 5.추가기능 / 6.종료");
    rl.question("작업 번호 입력: ", function(userselect) { // rl 변수의 question 함수 사용, (질문 문자열,콜백 함수)
    const select = parseInt(userselect); // userselect 정수변환
    
    switch(select){
    case 1:
        rl.question("제목: ", function(memotitle) {  
            rl.question("작성할 내용: ", function(content) {
                memotitle_s.push(memotitle); //메모 제목 배열에 추가
                content_s.push(content); // 메모 내용 배열에 추가
                console.log(`제목:${memotitle_s}`);
                console.log(`내용:${content_s}`);
                cnt++; //메모 개수 증가
                text();
                // 입력 끝났으니 종료
            });
        });
        break;
    case 2:
        console.log("2. 조회");
        if(cnt == 0){
            console.log("조회할 메모가 없습니다.") // 메모 개수 판별 예외처리
            text();
            break;
        }
        else{
            for(let i = 0 ; i < cnt ; i ++){
                console.log(`제목:${ memotitle_s[i] } - 번호: ${i}}`);
            }
        }
        

        rl.question("확인할 메모:",function(title){
            console.log(`제목:${memotitle_s[title]}`);
            console.log(`내용:${content_s[title]}`);
            text();
        });
        break;
    case 3:
        console.log("3. 수정");
        if(cnt == 0){
            console.log("수정할 메모가 없습니다.")
            text();
        }
        else{
            rl.question("수정할 메모",function(memonum){
            rl.question("수정할 제목: ", function(memotitle) { // 선택한 순번째의 메모 배열 요소 수정
                rl.question("수정할 내용: ", function(content) { // 선택한 순번째의 메모 배열 요소 수정
                    memotitle_s[memonum] = memotitle;
                    content_s[memonum] = content; 
                    text();
                    // 입력 끝났으니 종료
                });
            });
        });
        }
        
        
        break;
    case 4:
        console.log("4. 삭제");
        if(cnt == 0){
            console.log("삭제할 메모가 없습니다.")
            text();
        }
        else{
        rl.question("삭제할 메모",function(selectmemo){
            content_s.splice(selectmemo,1); //메모 내용 삭제
            memotitle_s.splice(selectmemo,1); // 메모 제목 삭제
            cnt--; //메모 개수 감소
            text();
        });
        }
        break;
    case 5:
        console.log("5. 추가기능");
        text();
        break;
    case 6:
        console.log("6. 종료");
        rl.close();
        break;
    default:
        console.log("잘못된 입력");
        text();
        break;
    }    
});
}

text();