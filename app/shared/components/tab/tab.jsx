import styles from "@/app/shared/styles/tap.module.css";
import Middle from "./middle";
import Top from "./top";

function Tab({ children, size = "l", className }) {
  return (
    <p className={`${styles.tab} ${styles[size]} ${className}`}>{children}</p>
  );
}
Tab.Middle = Middle;
Tab.Top = Top;

export default Tab;
