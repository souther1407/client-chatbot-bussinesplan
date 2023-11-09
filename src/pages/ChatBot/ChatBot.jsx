import React from "react";
import AsideNav from "../../components/organims/AsideNav/AsideNav";
import styles from "./chatBot.module.css";
import Input from "../../components/atoms/Input/Input";
const ChatBot = () => {
  return (
    <div className={styles.chatBot}>
      <AsideNav />
      <main className={styles.main}>
        <div className={styles.textShadow}></div>
        <Input
          placeholder={"Give Padda a business problem"}
          id={"userPrompt"}
          onChange={(id, value) => {}}
          onError={(id, error) => {}}
        />
      </main>
    </div>
  );
};

export default ChatBot;
