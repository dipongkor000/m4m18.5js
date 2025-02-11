const friends = ['raju', 'saju', 'jadu', 'modu']
//locking for someone 
console.log(friends.includes('jadu'));
console.log(friends.includes("rahim"))

//locking for someone, after party--->
// if(friends.includes('modu')){
//     console.log('party');
// }
// else{
//     console.log('no party');
// }

//locking for someone position or indexof
console.log(friends.indexOf('saju'));
// -1 if there is nothing
console.log(friends.indexOf('rahim'));

let fullName = [];
let foodName = 25;
// array test
console.log(Array.isArray(friends));
console.log(Array.isArray(fullName));
console.log(Array.isArray(foodName));
