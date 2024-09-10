/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { loginUser } from "@/app/Login/useLogic";
import { URL } from "@/untils/Url";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  login: (phone: string, password: string) => Promise<void>;
  logout: () => void;
  userToken: string | null;
  userRole: number | null;
  userId: string | null;
  error: string;
  dataUser: User | null;
  loading: boolean;
}
interface User {
  id_user: string;
  username: string;
  phone: string;
  avatar: string;
  status: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<number | null>(null);
  const [dataUser, setDataUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const role = localStorage.getItem("userRole");
    const id = localStorage.getItem("userId");
    setUserToken(token);
    setUserRole(role ? parseInt(role) : null);
    setUserId(id);
    console.log(userToken);

    if (!token) {
      router.push("/Login");
    }
  }, [router]);

  useEffect(() => {
    getData();
  }, [userToken]);

  const login = async (phone: string, password: string): Promise<void> => {
    const result = await loginUser(phone, password);

    if (result.success) {
      const token = localStorage.getItem("userToken");
      const role = localStorage.getItem("userRole");
      const id = localStorage.getItem("userId");

      if (token) {
        setUserToken(token);
      }
      if (role) {
        setUserRole(parseInt(role));
      }
      setUserId(id);
      setError("");
      router.push("/");
    } else {
      setError(result.error || "Login failed");
    }
  };
  const getData = async () => {
    try {
      setLoading(false);
      const res = await axios.get<{ user: User }>(
        `${URL}api/v1/user/getone/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      setDataUser(res.data.user);
      console.log(res.data.user);

      setLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    setUserToken(null);
    setUserRole(null);
    setUserId(null);
    router.push("/Login");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        userToken,
        userRole,
        userId,
        error,
        loading,
        dataUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider };
