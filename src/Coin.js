import { useEffect, useState } from "react";
// import React, { useEffect } from "react";


function Coin(){

    const [isLoading, setIsLoading] = useState(true);
    const [coins, setCoins] = useState([]);


    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) =>{

            setCoins(json);

            setIsLoading(false);
        });
    // console.log("test");

    }, []);

    return <div>
        <h1>The Coins ({coins.length})</h1>

        {isLoading? <h2><strong>Loading..</strong></h2> : null}

        <hr/>

        {/* <ul>

            {coins.map((item) => <li key={item.id}>{item.name} [{item.symbol}]  {item.quotes.USD.price}</li>)}
        </ul> */}

        <select>
        {coins.map((item) => <option key={item.id}>{item.name} [{item.symbol}]  {item.quotes.USD.price}</option>)}
        </select>

        

    </div>;

}

export default Coin;