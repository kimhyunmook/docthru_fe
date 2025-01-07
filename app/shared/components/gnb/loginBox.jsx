"use client";
import LinkImg from "../LinkImg";
import styles from "@/app/shared/styles/loginBox.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LoginBox({ login = false, admin = false }) {
  const [state, setState] = useState([
    {
      src: "/img/icon/alarm.svg",
      alt: "알람",
      width: 24,
      height: 24,
    },
    {
      src: "/img/icon/profile_member.svg",
      alt: "유저",
      width: 32,
      height: 32,
    },
  ]);

  useEffect(() => {
    if (admin)
      setState([
        {
          src: "/img/icon/profile_admin.svg",
          alt: "어드민",
          width: 32,
          height: 32,
        },
      ]);
  }, [admin]);

  return (
    <div className={styles.loginBox}>
      {!login ? (
        <Link className={`${styles.loginBtn} flexCenter`} href="/auth/login">
          로그인
        </Link>
      ) : (
        state.map((v, i) => {
          return <LinkImg key={v.src + i} {...v} />;
        })
      )}
    </div>
  );
}
