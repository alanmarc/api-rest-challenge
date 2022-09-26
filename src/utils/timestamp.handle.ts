
const timeStamp = () => {
    const msSinceEpoch = (new Date()).getTime();
    const timeStamp  = new Date(msSinceEpoch - 5 * 60 * 60 * 1000);
    return timeStamp;
};

export { timeStamp };