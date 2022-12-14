import { useState } from "react";

import Account from "./Account"
import Preferences from "./Preferences"
import Support from "./Support"



export default function Settings() {
  const [part, setPart] = useState('Account')

  return (
    <div>
      <nav>
        <ul className="flex justify-around">
          <li onClick={() => setPart("Account")}>Account</li>
          <li onClick={() => setPart("Preferences")}>Preferences</li>
          <li onClick={() => setPart("Support")}>Support</li>
        </ul>
      </nav>
      <div className="border-box flex items-center">
        {part === "Account" ? (
          <Account />
        ) : part === "Preferences" ? (
          <Preferences />
        ) : part === "Support" ? (
          <Support />
        ) : null}
      </div>
    </div>
  );
}
