"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center shadow-2xl bg-slate-100">
      <a href="/">
          <h3>Logo</h3>
      </a>
      <WalletMultiButton className="!bg-purple-600 hover:bg-black transition-all duration-200 rounded-lg" />
    </nav>
  );
};

export default Navbar;
