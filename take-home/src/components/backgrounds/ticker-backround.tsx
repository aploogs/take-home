import Image from "next/image";

export const TickerBackground = () => {
  return (
    <Image
      alt="Stock Ticker Background"
      src={"/public/ticker-background.jpg"}
    />
  );
};
