import React, { useEffect, useState } from "react";
import { stocksClient } from "@polygon.io/client-js";

interface TickerProps {
  symbol: string;
  apiKey: string;
}

const Ticker: React.FC<TickerProps> = ({ symbol, apiKey }) => {
  const [price, setPrice] = useState<number | null>(null);

  // useEffect(() => {
  //   const stockClient = stocksClient(apiKey);
  //   const fetchPrice = async () => {
  //     try {
  //       const response = await stockClient.getRealTimeQuote(symbol);
  //       setPrice(response.lastTradePrice);
  //     } catch (error) {
  //       console.error('Error fetching stock price:', error);
  //     }
  //   };

  //   fetchPrice();

  //   // Cleanup function
  //   return () => {
  //     // Perform any necessary cleanup here
  //   };
  // }, [symbol, apiKey]);

  return (
    <div>
      <h2>{symbol}</h2>
      <p>Price: {price !== null ? `$${price.toFixed(2)}` : "Loading..."}</p>
    </div>
  );
};

export default Ticker;
