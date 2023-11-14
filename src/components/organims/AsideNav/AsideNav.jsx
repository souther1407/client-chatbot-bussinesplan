import React, { useEffect, useState } from "react";
import styles from "./asideNav.module.css";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import { usePlansStore } from "../../../stores/usePlansStore";
const AsideNav = ({ onSelect, selected }) => {
  const { getPlans, plans } = usePlansStore((state) => state);
  useEffect(() => {
    getPlans();
  }, []);
  const onChangePrompt = (id) => {
    onSelect(id);
  };
  return (
    <div className={styles.asideNav}>
      <div className={styles.addMore}>
        <IconTextButton
          variant="bordered"
          iconProps={{ type: "add", size: "2rem" }}
          size="100%"
          onClick={() => onChangePrompt("")}
        >
          New Plan
        </IconTextButton>
      </div>
      <div className={styles.titles}>
        {plans.map((prompt) => (
          <div
            key={prompt.id}
            className={`${styles.title} ${
              prompt.id === selected && styles.selected
            }`}
            onClick={() => onChangePrompt(prompt.id)}
          >
            <Text
              color={
                prompt.id === selected && styles.selected ? "white" : "soft"
              }
              size={"0.9rem"}
            >
              {prompt.userMsg}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsideNav;
