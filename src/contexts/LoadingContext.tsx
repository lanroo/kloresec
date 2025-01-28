import React, { createContext, useState, useEffect, useContext } from "react";
import Loading from "../components/ui/Loading";
import { LoadingContextType } from "./types";

const INITIAL_LOADING_TIME = 2000;
const TRANSITION_LOADING_TIME = 1500;

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading deve ser usado dentro de um LoadingProvider");
  }
  return context;
};

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, INITIAL_LOADING_TIME);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), TRANSITION_LOADING_TIME);
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
