import Image from "next/image";

export const Background = () => {
  return (
    <Image
      alt="Stock Ticker Background"
      width={1200}
      height={1200}
      src="/images/background.jpg"
    />
  );
};
