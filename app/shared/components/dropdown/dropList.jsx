"use client";
import styles from "@/app/shared/styles/dropdown.module.css";

export default function DropList({
  list = [],
  className,
  setValue,
  open,
  setOpen,
}) {
  function clickHnadle(e) {
    const { textContent } = e.target;
    setValue(textContent);
    setOpen(!open);
  }
  return (
    <ul className={`${styles.dropList} ${className}`}>
      {list.map((v, i) => {
        return (
          <li key={`${v}_${i}`} onClick={clickHnadle}>
            <p>{v}</p>
          </li>
        );
      })}
    </ul>
  );
}
