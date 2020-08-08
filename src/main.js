// @ts-check

export class Main {
    run() {
        const fetch = require('node-fetch');
        const list = require('../assets/russel2000stocks.json');
        
        //list.forEach(ticker => {
            const ticker = 'BXG';
            const query = `https://www.alphavantage.co/query?function=BBANDS&symbol=${ticker}&interval=daily&time_period=253&series_type=close&nbdevup=2&nbdevdn=2&apikey=EKX56KG2CUST69HE`;
            console.log(query);
            
            fetch(query)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    const analysis = json["Technical Analysis: BBANDS"];
                    console.log(analysis);
                    const dates = Object.keys(analysis);
                    console.log(dates);
                });
        //});
        
        console.log(Array.from(list)[0]);
    }

}