import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" h-screen w-full max-w-[1200px] bg-green-500 mx-auto">
      {children}
    </div>
  );
};

export default Container;
