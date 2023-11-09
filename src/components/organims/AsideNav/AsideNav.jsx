import React from "react";
import styles from "./asideNav.module.css";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
const AsideNav = () => {
  return (
    <div className={styles.asideNav}>
      <div className={styles.addMore}>
        <IconTextButton
          variant="bordered"
          iconProps={{ type: "add", size: "2rem" }}
          size="100%"
        >
          New Plan
        </IconTextButton>
      </div>
    </div>
  );
};

export default AsideNav;
