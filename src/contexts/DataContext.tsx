"use client";
import axios from "axios";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface DATA {
  dis: string;
  img: string;
  title: string;
}

interface DataContext {
  data1: DATA[];
  setData1: React.Dispatch<React.SetStateAction<DATA[]>>;
  getData: () => Promise<void>;
}

const DataContext = createContext<DataContext | undefined>(undefined);

interface DataContextProvider {
  children: ReactNode;
}

export const DataContextProvider: React.FC<DataContextProvider> = ({
  children,
}) => {
  const [data1, setData1] = useState<DATA[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get<DATA[]>(
        "https://server-api-lime.vercel.app/api/v1/email/api/get"
      );
      setData1(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data1, setData1, getData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a YourProvider");
  }
  return context;
};
