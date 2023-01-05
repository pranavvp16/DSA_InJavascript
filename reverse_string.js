// Create a function that reverses a string 

function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return " not a string "
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i =totalItems ; i>=0 ; i--){
        backwards.push(str[i]);
    }
    console.log(backwards);

    return console.log(backwards.join(''));
}
function reverse2(str){
    return str.split('').reverse().join
}
reverse("hello my Name is Pranav")