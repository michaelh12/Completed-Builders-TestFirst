function totalPortfolioValue(ticker,portfolio){
    let portfolioTotal = 0;
    //loop through each portfolio
    for(i=0;i<portfolio.length;i++){
        console.log('------------------')
        let portfolioStockName = portfolio[i][0];
        console.log("Portfolio Name: " + portfolioStockName);
        let portfolioStockAmount = portfolio[i][1];
        console.log("Portfolio Amount: " + portfolioStockAmount);
        let tickerValueIndex = ticker.indexOf(portfolioStockName) + 1;
        console.log("Ticker value at index: " + tickerValueIndex);
        portfolioTotal += (portfolioStockAmount*ticker[tickerValueIndex])
        console.log(`Your portfolio value for ${portfolioStockName} is: ` + (portfolioStockAmount * ticker[tickerValueIndex]));
        console.log("\n")

    }console.log("your total portfolio value is: " + portfolioTotal);
    return portfolioTotal;
}



var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio = [['XYZ', 20], ['BBB', 10]];

totalPortfolioValue(ticker, portfolio)