"use client";
import { useEffect, useState } from "react";
import axios from "axios";

// Định nghĩa kiểu dữ liệu DATA
interface DATA {
  id: string;
  dis: string;
  img: string;
  title: string;
}

export const useLogicDataCard = () => {
  const [dataCard, setCard] = useState<DATA[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(false);
    try {
      setLoading(false);
      const res = await axios.get<DATA[]>(
        "https://server-api-lime.vercel.app/api/v1/email/api/get"
      );
        setCard(res.data);
        setLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { dataCard, loading, };
};