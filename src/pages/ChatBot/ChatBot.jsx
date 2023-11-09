import React from "react";
import AsideNav from "../../components/organims/AsideNav/AsideNav";
import styles from "./chatBot.module.css";
import Input from "../../components/atoms/Input/Input";
import Text from "../../components/atoms/Text/Text";
import Label from "../../components/molecules/Label/Label";
const ChatBot = () => {
  return (
    <div className={styles.chatBot}>
      <AsideNav />
      <main className={styles.main}>
        <div className={styles.textShadow}>
          <Text color="white" size={"3rem"}>
            Paddawan
          </Text>
          <Label size={"1.5rem"}>Beta 0.0.1</Label>
        </div>
        <div className={styles.input}>
          <Input
            placeholder={"Give Padda a business problem"}
            id={"userPrompt"}
            onChange={(id, value) => {}}
            onError={(id, error) => {}}
          />
        </div>
      </main>
    </div>
  );
};

export default ChatBot;
