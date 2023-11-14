import React, { useEffect, useState } from "react";
import AsideNav from "../../components/organims/AsideNav/AsideNav";
import styles from "./chatBot.module.css";
import Input from "../../components/atoms/Input/Input";
import Text from "../../components/atoms/Text/Text";
import Label from "../../components/molecules/Label/Label";
import PlanDetail from "./components/PlanDetail";
import IconButton from "../../components/molecules/IconButton/IconButton";
import { useAuth } from "../../hooks/useAuth";
import { usePlansStore } from "../../stores/usePlansStore";
import { LOGIN } from "../../utils/constants/routes";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import { useNavigate } from "react-router-dom";
const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [promptSelected, setPromptSelected] = useState("");
  const { user } = useAuth();
  const navitagte = useNavigate();
  const { loading, planDetail, getPlanDetail, generatePlan } = usePlansStore(
    (state) => state
  );

  const handleLoadPromptDetail = (id) => {
    setPromptSelected(id);
    if (id) {
      getPlanDetail(id);
    }
  };
  const handleGeneratePlan = async () => {
    if (!user) return navitagte(LOGIN);
    await generatePlan(userInput);
    if (planDetail) {
      setPromptSelected(planDetail.id);
    }
  };
  return (
    <div className={styles.chatBot}>
      <AsideNav onSelect={handleLoadPromptDetail} selected={promptSelected} />
      {loading && <LoadingScreen />}
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
              <div className={styles.iconBtn}>
                <IconButton
                  icon={"send"}
                  size="1.5rem"
                  color="var(--white)"
                  onClick={handleGeneratePlan}
                />
              </div>
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
        {promptSelected && !loading && (
          <section className={styles.detail}>
            <PlanDetail detail={planDetail} />
          </section>
        )}
      </main>
    </div>
  );
};

export default ChatBot;
