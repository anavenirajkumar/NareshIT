let a = 10;
let outerFn = () => {
    let a = 20;
    let innerFn = () => {
        let a = 30;
        console.log(a); // 30
    };
    innerFn();
    console.log(a); // 20
};
outerFn();
console.log(a); // 10

// Closures
