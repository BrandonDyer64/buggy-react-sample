import React from "react";
import styles from "./Tabular.module.css";

export type TabularProps = {
  tabs: string[];
  selectedTab: number;
  onTabSelect: (tab: number) => void;
};

export default function Tabular(props: TabularProps) {
  return (
    <div className={styles.root}>
      {props.tabs.map((tab, i) => (
        <div
          key={`tab-${tab}`}
          onClick={() => props.onTabSelect(i)}
          className={i == props.selectedTab ? styles.selected : ""}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
