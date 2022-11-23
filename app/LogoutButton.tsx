"use client";

function LogoutButton() {
  return (
    <button 
    onClick={() => console.log("Hello")}
    className="
    bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg
    "
    >
      Sign Out
    </button>
  );
}

export default LogoutButton;
