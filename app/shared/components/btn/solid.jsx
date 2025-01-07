import Btn from "./btn";
import styles from "@/app/shared/styles/btn.module.css";

function SolidBtn({ size, className, children, width }) {
  return (
    <Btn size={size} width={width} className={`${styles.solid} ${className}`}>
      {children}
    </Btn>
  );
}

function Large({ children, className, width }) {
  const att = { className, width };
  return (
    <SolidBtn {...att} size="l">
      {children}
    </SolidBtn>
  );
}
function Medium({ children, className, width }) {
  const att = { className, width };
  return (
    <SolidBtn {...att} size="m">
      {children}
    </SolidBtn>
  );
}
function Regular({ children, className, width }) {
  const att = { className, width };
  return (
    <SolidBtn {...att} size="r">
      {children}
    </SolidBtn>
  );
}
function Small({ children, className, width }) {
  const att = { className, width };
  return (
    <SolidBtn {...att} size="r">
      {children}
    </SolidBtn>
  );
}

SolidBtn.Large = Large;
SolidBtn.Medium = Medium;
SolidBtn.Regular = Regular;
SolidBtn.Small = Small;

export default SolidBtn;
