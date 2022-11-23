import React from "react";
import Chatinput from "./ChatInput";
import MessageList from "./MessageList";

function HomePage() {
  return ( 
    <main>
      <MessageList />
      <Chatinput />
    </main>
  );
}

export default HomePage;