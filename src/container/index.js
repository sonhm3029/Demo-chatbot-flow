import React from "react";
import Body from "./Body";
import Header from "./Header";
import ChatbotAppStyleWrapper from "./styled";

const ChatbotAppContainer = () => {
  return (
    <ChatbotAppStyleWrapper>
      <Header />
      <Body />
    </ChatbotAppStyleWrapper>
  );
};

export default ChatbotAppContainer;
