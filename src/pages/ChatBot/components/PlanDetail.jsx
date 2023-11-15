import React from "react";
import styles from "./planDetail.module.css";
import Text from "../../../components/atoms/Text/Text";
import Mark from "../../../components/atoms/Mark/Mark";
import Step from "./Step.jsx";
import { toolsDescription } from "../../../utils/constants/toolsdescription.js";
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
              <div className={styles.steps}>
                {convertToArray(goal.steps).map((s, index, arr) => (
                  <Step title={s.title} textProps={{ bold: true }}>
                    {convertToArray(s.steps).map((sub, index, arr) => (
                      <Step
                        title={sub.title}
                        textProps={{ color: "soft" }}
                      ></Step>
                    ))}
                  </Step>
                ))}
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
                  <Text color="soft">
                    {toolsDescription[goal.tool].description}
                  </Text>
                  <div className={styles.imgTool}>
                    <Text>Free Trial</Text>
                    <img
                      src={toolsDescription[goal.tool].img}
                      className={styles.img}
                    />
                  </div>
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
