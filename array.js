const country = 'Bangladesh';
const age=52;
const isIndependent=true;
const student={id:121, class:11, name:'agun'};
const friends= [12,14,45,67,23,30];
function add(num1, mun2){
    return num1+num2;
}
console.log(typeof country)
console.log(typeof age)
console.log(typeof isIndependent)
console.log(typeof student)
// check array using array.isArray
console.log(Array.isArray(friends))
console.log(typeof add)


// -----------------------
console.log(friends.includes(19));
console.log(friends.includes(23));
// alternative
if(friends.indexOf(252) !== -1){

}

// / concat
const newFriendAge=[12,23,13,24];
const allFriends= newFriendAge.concat(friends)
console.log(allFriends)