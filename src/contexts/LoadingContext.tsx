import React, { createContext, useState, useEffect } from "react";
import Loading from "../components/ui/Loading";
import { LoadingContextType } from "./types";

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de loading

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 1500);
    };

    window.addEventListener("beforeunload", handleStart);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
};
