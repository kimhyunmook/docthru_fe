"use client";
import styles from "@/app/shared/styles/container.module.css";
import Image from "next/image";
import Btn from "../btn/btn";

function Container({ date = "0000년 0월 0일 마감", current = 0, max = 0 }) {
  return (
    <div className={`${styles.container} flexCenter`}>
      <div className={styles.top}>
        <div className={styles.date}>
          <Image
            src="/img/icon/clock.svg"
            alt="시계"
            width={16}
            height={15.5}
          />
          <p> {date}</p>
        </div>
        <div className={styles.person}>
          <Image
            src="/img/icon/person2.svg"
            alt="사람"
            width={24}
            height={24}
          />
          <p>
            {current}/{max}
          </p>
        </div>
      </div>
      <div className={styles.btnArea}>
        <Btn.Filled.Yellow>원문 보기</Btn.Filled.Yellow>
        <Btn.Solid.Regular>작업 도전하기</Btn.Solid.Regular>
      </div>
    </div>
  );
}

export default Container;
