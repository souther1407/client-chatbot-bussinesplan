import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./label.module.css";
const Label = ({ children, size }) => {
  return (
    <div className={styles.label}>
      <Text size={size} bold color="transparent">
        {children}
      </Text>
    </div>
  );
};

export default Label;
