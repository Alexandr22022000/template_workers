const calc = (): void => {
    let ii;
    for (let i = 0; i < 4000000000; i++) {
        ii = 99 ** 99 / 99 ** 99 / 99 ** 99;
    }
};

export default calc;
