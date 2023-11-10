import React from "react";
import styles from "./planDetail.module.css";
import Text from "../../../components/atoms/Text/Text";
import Mark from "../../../components/atoms/Mark/Mark";
const PlanDetail = ({}) => {
  return (
    <div className={styles.planDetail}>
      <header className={styles.title}>
        <Text>
          <Mark>Plan to:</Mark> Ejemplo 1
        </Text>
      </header>
      <main className={styles.main}>
        <section className={styles.titleAndSteps}>
          <div className={styles.titles}>
            <Text type="subtitle">
              Goal 1: Industry Research and Expertise Development
            </Text>
            <Text color="soft" size="0.9rem">
              The foundation of a successful marketing agency is a compelling
              Unique Value Proposition (UVP). Defining what sets your agency
              apart from competitors is crucial. A UVP clearly communicates the
              distinct value and benefits your agency offers to clients.
            </Text>
          </div>
        </section>
        <section className={styles.tool}></section>
      </main>
    </div>
  );
};

export default PlanDetail;
