import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

function Header() {
  const session = true;

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <img className="rounded-full mx-2 object-contain" height={10} width={50} src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="Profile Picture" />

          <div>
            <p className="text-emerald-400">Login Sebagai:</p>
            <p className="font-bold text-lg">Ghazy Hakuya</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3741/3741717.png" height={10} width={50} alt="Logo" />

          <p className="text-emerald-400">Welcome to Ghazy'S Chat APP</p>
        </div>

        <Link
          href="/auth/signin"
          className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg
            "
        >
          Sign IN
        </Link>
      </div>
    </header>
  );
}

export default Header;
