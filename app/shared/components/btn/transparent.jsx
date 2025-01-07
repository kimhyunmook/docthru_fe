import Btn from "./btn";
import styles from "@/app/shared/styles/btn.module.css";
import Image from "next/image";

function TransparentBtn({ size, className, children, width, icon = true }) {
  return (
    <Btn
      size={size}
      width={width}
      className={`${styles.transparent} ${className}`}
    >
      {children}
      {icon ? (
        <Image src="/img/icon/open.svg" alt="열기" width={24} height={24} />
      ) : null}
    </Btn>
  );
}

function Large({ children, className, icon, width }) {
  const att = {
    className,
    icon,
    width,
  };
  return (
    <TransparentBtn {...att} size="l">
      {children}
    </TransparentBtn>
  );
}
function Medium({ children, className, icon, width }) {
  const att = {
    className,
    icon,
    width,
  };
  return (
    <TransparentBtn {...att} size="m">
      {children}
    </TransparentBtn>
  );
}
function Regular({ children, className, icon, width }) {
  const att = {
    className,
    icon,
    width,
  };
  return (
    <TransparentBtn {...att} size="r">
      {children}
    </TransparentBtn>
  );
}
function Small({ children, className, icon, width }) {
  const att = {
    className,
    icon,
    width,
  };
  return (
    <TransparentBtn {...att} size="r">
      {children}
    </TransparentBtn>
  );
}

TransparentBtn.Large = Large;
TransparentBtn.Medium = Medium;
TransparentBtn.Regular = Regular;
TransparentBtn.Small = Small;

export default TransparentBtn;
