import { useState } from "react";

interface DATA {
  id: string;
  dis: string;
  img: string;
  title: string;
}
interface UseLogicContactProps {
  dataCard: DATA[];
}

export const useLogicCommom = ({ dataCard }: UseLogicContactProps) => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const openModal = (id: string) => {
    setSelectedItemId(id);
  };

  const closeModal = () => {
    setSelectedItemId(null);
  };

  const selectedItem = dataCard.find((item) => item.id === selectedItemId);

  return {
    selectedItemId,
    selectedItem,
    openModal,
    closeModal,
  };
};