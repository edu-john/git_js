/* 
    로또 번호 추천
*/

const _ = require('lodash')
const axios = require('axios')

// const winner = [3, 5, 12, 13, 33, 39]

/* 
[ 실습과제 1 ]
당첨번호인 winner와 비교하여, 
추천한 랜덤 번호가 몇 등인지 알려주세요.

6개 - 1등
5개 - 3등
4개 - 4등
3개 - 5등
나머지 - 꽝

추천번호, 몇 등인지 출력
=> [1,2,3,4,5,6] 5등입니다.
*/

const rank = winner => {
    // 1. 번호를 추천 하고,
    // (1) 1~45까지의 숫자 중,
    const numbers = _.range(1, 46)
    // (2) 6개를 추출하여 보여줌
    const lotto = _.sortBy(_.sampleSize(numbers, 6))
    
    console.log(`추천번호는 ${lotto}입니다.`)

    // 2. winner와 비교하여 몇 등인지 알려줌.
    let cnt = _.intersection(lotto, winner).length;
    // console.log(cnt)

    if (cnt == 6) {
        console.log('1등입니다. 집을 사자.');
    } else if (cnt == 5) {
        console.log('3등입니다. 차도 못 사넹..');
    } else if (cnt == 4) {
        console.log('4등입니다. 밥이나 먹자');
    } else if (cnt == 3) {
        console.log('5등입니다. 편의점가자.');
    } else {
        console.log('꽝입니다.')
    }
}

// rank(winner)

// n = 0
// while (n < 1000000) {
//     rank(winner);
//     n += 1
// }

const url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=873'

axios.get(url)
    .then(res => {
        let winner = []

        // winner.push(res.data.drwtNo1)
        // winner.push(res.data.drwtNo2)
        // winner.push(res.data.drwtNo3)
        // winner.push(res.data.drwtNo4)
        // winner.push(res.data.drwtNo5)
        // winner.push(res.data.drwtNo6)

        for (let i = 0; i < 6; i++) {
            winner.push(res.data[`drwtNo${i+1}`])
        }
        
        console.log(`당첨번호는 ${winner}입니다.`)
        rank(winner)
    })