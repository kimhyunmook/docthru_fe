import styles from "@/app/shared/styles/tap.module.css";
import Tab from "./tab";

export default function Top({
  className = "",
  size = "l",
  active = false,
  children = "탭01",
}) {
  const att = {
    size,
    className: `${styles.top} ${className} ${
      active ? styles.active : ""
    }`.trim(),
  };
  return <Tab {...att}>{children}</Tab>;
}
