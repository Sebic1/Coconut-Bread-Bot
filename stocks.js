//Init Setup
function moduleStocks(){
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const stockChangeInterval = 1000*60*15;
const token = 'NzA4NDg4NTU1MzMyMjM5NDIw.XrYF5A.KnqAdtiOTyCL8cBlf3bSO0k4OPo';
let stockData = JSON.parse(fs.readFileSync('./stockData.json', 'utf8'))
const stockVariability = 10;
if (!stockData.moneyValue){
    stockData.moneyValue = 100;
};

//Stock Fluctuations
function stockChange(){
    var stockChannel = client.channels.cache.find(channel => channel.name === 'stock-exchange');
    if (Math.random() > 0.5){
        let stockChange = 1+(Math.floor(Math.random()*10))/100
        stockData.moneyValue *= stockChange
        stockData.moneyValue = stockData.moneyValue.toFixed(2)
        stockChannel.send("Stock: Stock risen by " + Math.floor((stockChange-1)*100) + "%.")
    } else {
        let stockChange = 1-(Math.floor(Math.random()*10))/100
        stockData.moneyValue *= stockChange
        stockData.moneyValue = stockData.moneyValue.toFixed(2)
        stockChannel.send("Stock: Stock fallen by " + Math.floor((1-stockChange)*100) + "%.") 
    }
    fs.writeFile('./stockData.json', JSON.stringify(stockData), (err) => {
        if (err) console.error(err);
    });
}


//Login
client.login(token);
client.on('ready', () => { 
    console.log('Stocks Activated');
    process.on('unhandledRejection', function(err) {
        console.log(err);
    });
    setInterval(stockChange, stockChangeInterval)
});
}
module.exports = moduleStocks