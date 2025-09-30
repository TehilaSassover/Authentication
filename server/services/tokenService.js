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

module.exports = { addToken, getTokens };
