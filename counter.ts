interface NumberFunction {
    (): number;
}

interface VoidFunction {
    (): void;
}

export const counter = (initial: number = 0): Array< NumberFunction | VoidFunction> => {
    let counter = initial;
    const getCurrentCounter = (): number => counter
    const setCounter = (): void => {
        counter = counter + 1;
    };
    const response: Array<NumberFunction | VoidFunction> = [];
    response.push(getCurrentCounter, setCounter);
    return response;    
}

// const [getA, nextA] = counter(1);
// console.log(getA()); // 1
// console.log(nextA());
// console.log(getA()); // 2
// const [getB, nextB] = counter(10);
// console.log(nextB());
// console.log(getA()); // 2
// console.log(getB()); // 11
// console.log(nextA());
// console.log(getA()); // 3
// console.log(getB()); // 11