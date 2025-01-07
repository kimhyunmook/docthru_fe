"use client";
import styles from "@/app/shared/styles/btn.module.css";
import FilledBtn from "./filled";
import OutlineBtn from "./outline";
import TransparentBtn from "./transparent";
import SolidBtn from "./solid";

function Btn({ children = "거절하기", className, onClick, size = "l", width }) {
  return (
    <button
      className={`${styles.btn} ${styles[size]} ${className}`}
      style={{
        maxWidth: width,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Btn.Filled = FilledBtn;
Btn.Outline = OutlineBtn;
Btn.Transparent = TransparentBtn;
Btn.Solid = SolidBtn;

export default Btn;
