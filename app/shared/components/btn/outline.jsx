import Btn from "./btn";
import styles from "@/app/shared/styles/btn.module.css";

function OutlineBtn({ size, className, children, width }) {
  return (
    <Btn size={size} width={width} className={`${styles.outline} ${className}`}>
      {children}
    </Btn>
  );
}

function Large({ children, className, width }) {
  const att = {
    className,
    width,
  };
  return (
    <OutlineBtn {...att} size="l">
      {children}
    </OutlineBtn>
  );
}
function Medium({ children, className, width }) {
  const att = {
    className,
    width,
  };
  return (
    <OutlineBtn {...att} size="m">
      {children}
    </OutlineBtn>
  );
}
function Regular({ children, className, width }) {
  const att = {
    className,
    width,
  };
  return (
    <OutlineBtn {...att} size="r">
      {children}
    </OutlineBtn>
  );
}
function Small({ children, className, width }) {
  const att = {
    className,
    width,
  };
  return (
    <OutlineBtn {...att} size="s">
      {children}
    </OutlineBtn>
  );
}

OutlineBtn.Large = Large;
OutlineBtn.Medium = Medium;
OutlineBtn.Regular = Regular;
OutlineBtn.Small = Small;

export default OutlineBtn;
