// @ts-check

export class Main {
    run() {
        const fetch = require('node-fetch');
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=EKX56KG2CUST69HE')
            .then(res => res.json())
            .then(json => console.log(json));
    }

}