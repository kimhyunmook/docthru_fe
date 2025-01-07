"use client";
import styles from "@/app/shared/styles/input.module.css";
import { useEffect, useState } from "react";
import LinkImg from "./LinkImg";

function Input({
  label = "없음",
  name = "",
  type = "text",
  value,
  onChange = (e) => {},
  placeholder = "없음",
  className,
  error,
  errorCondition = false,
  children,
  ...props
}) {
  const [isErr, setIsErr] = useState(errorCondition);
  const inputAtt = {
    id: name,
    name,
    type,
    value,
    onChange,
    placeholder,
  };
  useEffect(() => {
    setIsErr(!errorCondition);
  }, [value, errorCondition]);

  return (
    <div className={`${styles.inputBox} ${className}`}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.input}>
        <input {...inputAtt} {...props} />
        {children}
      </div>
      {isErr && !!value && <p className={styles.error}>{error}</p>}
    </div>
  );
}

function Password({
  label = "비밀번호",
  name,
  value,
  onChange,
  placeholder,
  className,
}) {
  const [inputType, setInputType] = useState("password");
  const [icon, setIcon] = useState({
    width: 24,
    height: 24,
    onClick: passwordIconHandle,
    src: "/img/icon/view_off.svg",
    alt: "off",
    href: "#",
  });

  function passwordIconHandle(e) {
    e.preventDfault;
    const { src } = e.target;
    if (src.includes("off")) {
      setIcon({
        ...icon,
        src: "/img/icon/view.svg",
      });
      setInputType("text");
    } else {
      setIcon({
        ...icon,
        src: "/img/icon/view_off.svg",
      });
      setInputType("password");
    }
  }
  const inputAtt = {
    label,
    id: name,
    name,
    value,
    onChange,
    placeholder,
    className,
  };
  return (
    <Input type={inputType} {...inputAtt}>
      <LinkImg {...icon} />
    </Input>
  );
}

function Date({ label = "마감 기한", name, value, onChange, className }) {
  const inputAtt = {
    label,
    id: name,
    name,
    value,
    onChange,
    className,
  };
  return <Input type={"date"} {...inputAtt}></Input>;
}

Input.Password = Password;
Input.Date = Date;

export default Input;
 