import React, { useState } from "react";
import styles from "./asideNav.module.css";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
const AsideNav = ({ onSelect }) => {
  const titles = [
    {
      id: "1",
      userPrompt: "ejemplo 1",
    },
    {
      id: "2",
      userPrompt: "ejemplo 2",
    },
  ];
  const [selected, setSelected] = useState("");
  const onChangePrompt = (value) => {
    setSelected(value);
    onSelect(value);
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
        {titles.map((prompt) => (
          <div
            className={`${styles.title} ${
              prompt.userPrompt === selected && styles.selected
            }`}
            onClick={() => onChangePrompt(prompt.userPrompt)}
          >
            <Text
              color={
                prompt.userPrompt === selected && styles.selected
                  ? "white"
                  : "soft"
              }
              size={"0.9rem"}
            >
              {prompt.userPrompt}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsideNav;
