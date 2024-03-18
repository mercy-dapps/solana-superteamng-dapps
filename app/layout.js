import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WalletContextProvider from "./context/walletContext";
import { ResourceContextProvider } from "./context/resourceContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StudyWeb3 - Solana superteamng hackathon project",
  description: "A web3 application focused on educating users about web3 ecosystem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletContextProvider>
          <ResourceContextProvider>
            <Navbar />
            {children}
          </ResourceContextProvider>
        </WalletContextProvider>
      </body>
    </html>
  );
}
