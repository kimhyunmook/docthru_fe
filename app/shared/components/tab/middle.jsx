import styles from "@/app/shared/styles/tap.module.css";
import Tab from "./tab";

export default function Middle({
  className = "",
  size = "l",
  active = false,
  children = "진행중인 챌린지",
}) {
  const att = {
    size,
    className: `${styles.middle} ${className} ${
      active ? styles.active : ""
    }`.trim(),
  };
  return <Tab {...att}>{children}</Tab>;
}
