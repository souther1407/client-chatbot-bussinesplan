import React from "react";
import styles from "./step.module.css";
import Text from "../../../components/atoms/Text/Text";
const Step = ({ children, title, textProps }) => {
  return (
    <div className={styles.step}>
      <div className={styles.mark}>
        <div className={styles.circle} />
        <div className={styles.line} />
      </div>
      <div className={styles.content}>
        <Text {...textProps}>{title}</Text>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Step;
