export const getRandomThrow = () => {
    return Math.floor(Math.random() * 3);
};


export const getCompThrow = () => {
    if (getRandomThrow() === 0)
        return 'rock';
    else if (getRandomThrow() === 1)
        return 'paper';
    else return 'scissors';   
};

export const checkResult = (player, computer) => {
    if (player === 'rock' && computer === 'paper')

};









