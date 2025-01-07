"use client";
import styles from "@/app/styles/page.module.css";
import Input from "./shared/components/input";
import { useState } from "react";
import { isValidEmail } from "@/lib/utils/convenience";
import Chip from "./shared/components/chip/chip";
import Btn from "./shared/components/btn/btn";

export default function Home() {
  const [email, setEmail] = useState("");
  return (
    <div className={styles.page}>
      <Input
        label="이메일"
        name="email"
        type="email"
        value={email}
        onChange={(e) => {
          const { name, value } = e.target;
          setEmail(value);
        }}
        error={"이메일 형식 알아"}
        errorCondition={isValidEmail(email)}
      />

      <Input.Password />
      <Input.Date />

      <Chip.NextChip />
      <Chip.WebChip />
      <Chip.CareerChip />
      <Chip.ModernChip />
      <Chip.ApiChip />
      <Chip.Categori>대기</Chip.Categori>
      <Chip.Accecpt />
      <Chip.Pending />
      <Chip.Delete />
      <Chip.Reject />
      <br />

      <Btn.Filled.Large className={"whta"}>버튼</Btn.Filled.Large>
      <br />
      <Btn.Filled.Large icon={true}>버튼2</Btn.Filled.Large>
      <br />
      <Btn.Filled.Large icon={true}></Btn.Filled.Large>
      <br />
      <Btn.Outline.Small>테스트</Btn.Outline.Small>
      <br />
      <Btn.Transparent.Regular>투명도</Btn.Transparent.Regular>
      <br />
      <Btn.Solid.Regular>솔리드</Btn.Solid.Regular>
    </div>
  );
}
