import React from "react";
import styles from "./planDetail.module.css";
import Text from "../../../components/atoms/Text/Text";
import Mark from "../../../components/atoms/Mark/Mark";

const convertToArray = (obj = {}) => {
  return Object.values(obj);
};

const PlanDetail = ({ detail }) => {
  return (
    <div className={styles.planDetail}>
      <header className={styles.title}>
        <Text>
          <Mark>Plan to:</Mark> {detail?.userMsg}
        </Text>
      </header>
      <main className={styles.main}>
        {convertToArray(detail?.steps).map((goal, index) => (
          <div className={styles.goal}>
            <section className={styles.titleAndSteps}>
              <div className={styles.titles}>
                <Text type="subtitle" bold>
                  Goal {index + 1}: {goal.title}
                </Text>
                <Text color="soft" size="0.9rem">
                  {goal.description}
                </Text>
              </div>
            </section>
            <section className={styles.tool}>
              <div className={styles.toolCard}>
                <div className={styles.toolName}>
                  <Text bold type="subtitle">
                    {goal.tool}
                  </Text>
                </div>
                <div className={styles.toolDesc}>
                  <Text color="soft">Description</Text>
                </div>
              </div>
            </section>
          </div>
        ))}
      </main>
    </div>
  );
};

export default PlanDetail;
