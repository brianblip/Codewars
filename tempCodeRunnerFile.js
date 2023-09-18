list2 = [2,6,77,1,3,9,0,44];

function firstN2(list){
    return function(n){
        return list.slice(0,n);
    }
}

firstX = firstN2(list2);
console.log(firstX(3));
console.log(firstX(2));
console.log(firstX(5));