import { useState, useEffect } from "react";

export const useFetch = (service: string) => {
  const [data, setData] = useState<any>();

  const fethData = async () => {
    try {
      const response = await fetch(service);
      const data = await response.json();
      setData(data);
    } catch (error) {
      // Here normally we use a toast to manage the errors or some throw errors.
      alert("There was an error");
    }
  };

  useEffect(() => {
    fethData();
  }, []);

  return { data };
};
