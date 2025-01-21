import styles from "@/app/shared/styles/modal.module.css";
import Popup from "./popup";
import TextBox from "./textBox";

export default function Modal({ className, children }) {
  return (
    <div className={`${styles.modal} ${className} flexCenter`}>
      <div className={`${styles.content}`}>{children}</div>
    </div>
  );
}

Modal.Popup = Popup;
Modal.TextBox = TextBox;
