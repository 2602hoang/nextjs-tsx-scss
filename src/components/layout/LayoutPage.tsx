import "@/style/index.scss";
import { Header } from "../header/Header";
import Fotter from "../fotter/Fotter";
import { Roboto } from "next/font/google";
import AosClient from "../slide/AosClient";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
interface LayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <AosClient>
          <Header />
          {children}
          <Fotter />
        </AosClient>
      </body>
    </html>
  );
};

export default LayoutPage;
