import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface props {
  children: ReactNode;
}

const AosProvider = ({ children }: props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return children;
};

export default AosProvider;
