/* 
    점심 메뉴 추천
*/

const _ = require('lodash');

foods = ['진가와', '강남목장', '몰타참치'];

const menu = _.sample(foods);

console.log(menu);