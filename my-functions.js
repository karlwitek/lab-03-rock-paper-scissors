export const getRandomThrow = () => {
    return Math.floor(Math.random() * 3);
};


export const getCompThrow = () => {
    if (getRandomThrow() === 0)
        return 'Rock';
    else if (getRandomThrow() === 1)
        return 'Paper';
    else return 'Scissors';   
};

export const checkResult = () => {
    console.log('were in the getResults function');

};









