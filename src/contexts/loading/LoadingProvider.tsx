import React, { useState, useEffect } from "react";
import Loading from "../../components/ui/Loading";
import { LoadingContext } from "./LoadingContext";

const INITIAL_LOADING_TIME = 2000;
const TRANSITION_LOADING_TIME = 1500;

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
