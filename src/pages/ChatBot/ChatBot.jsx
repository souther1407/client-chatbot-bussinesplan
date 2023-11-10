import React, { useState } from "react";
import AsideNav from "../../components/organims/AsideNav/AsideNav";
import styles from "./chatBot.module.css";
import Input from "../../components/atoms/Input/Input";
import Text from "../../components/atoms/Text/Text";
import Label from "../../components/molecules/Label/Label";
import PlanDetail from "./components/PlanDetail";
const ChatBot = () => {
  const [promptSelected, setPromptSelected] = useState("");
  const [userInput, setUserInput] = useState("");
  return (
    <div className={styles.chatBot}>
      <AsideNav onSelect={(prompt) => setPromptSelected(prompt)} />
      <main className={styles.main}>
        {!promptSelected && (
          <section className={styles.newPrompt}>
            <div className={styles.textShadow}>
              <Text bold color="white" size={"3rem"}>
                Paddawan
              </Text>
              <Label size={"1.5rem"}>Beta 0.0.1</Label>
            </div>
            <div className={styles.input}>
              <Input
                placeholder={"Give Padda a business problem"}
                id={"userPrompt"}
                onChange={(id, value) => {
                  setUserInput(value);
                }}
                onError={(id, error) => {}}
              />
            </div>
          </section>
        )}
        {promptSelected && (
          <section className={styles.detail}>
            <PlanDetail />
          </section>
        )}
      </main>
    </div>
  );
};

export default ChatBot;
