
// const newI = document.createElement('div');

// newI.className="div3";
// newI.id="div3";

// const text = document.createTextNode( '');

console.log(localStorage.setItem('username','harsha'));
console.log(localStorage.setItem('email','harsha@gmail.com'));
console.log(localStorage.setItem('password','harsha123'));

let myobj ={
    name: "hatsha",
    age :22
};

let myobj_sting = JSON.stringify(myobj);
console.log(myobj_sting);

localStorage.setItem("myobj",myobj_sting);
console.log(localStorage);

let myobj_deserialized = JSON.parse(localStorage.getItem("myobj"));
console.log(myobj_deserialized);
