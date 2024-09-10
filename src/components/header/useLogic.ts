
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect } from "react";

export const useHeaderLogic = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dataUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const onClick = () => {
    if (dataUser) {
      setIsOpen(true);
      setDataModal({
        id_user: dataUser.id_user,
        username: dataUser.username,
        phone: dataUser.phone,
        avatar: dataUser.avatar,
        status: dataUser.status,
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    isOpen,
    dataUser,
    dataModal,
    setIsOpen,
    onClick,
    isScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
  };
};