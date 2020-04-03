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
    if (player === 'rock' && computer === 'rock') {
        return 'draw';
    } else if (player === 'rock' && computer === 'paper') {
        return 'lose';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'lose';
    } else if (player === 'paper' && computer === 'paper') {
        return 'draw';
    } else if (player === 'scissors' && computer === 'scissors') {
        return 'draw';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'lose';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win';
    }
};














