// Array to store active tokens
let activeTokens = [];

const addToken = (token) => {
    activeTokens.push(token);

    console.log("add " + activeTokens);
};

const getTokens = () => {
    console.log("get " + activeTokens);
    return activeTokens;
};


const findToken = (token) => {
    return activeTokens.includes(token);
};

const deleteToken = (token) => {
    activeTokens = activeTokens.filter(t => t !== token);
    console.log("delete", activeTokens);
};

module.exports = { addToken, getTokens, findToken, deleteToken };
