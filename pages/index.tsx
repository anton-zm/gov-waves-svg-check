import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [defaultState, setDefaultState] = useState('')
  const [targetState, setTargetState] = useState('')
  const [defaultStateAmount, setDefaultStateAmount] = useState(0)
  const [targetStateAmount, setTargetStateAmount] = useState(0)

  useEffect(() => {
    const parent = document.getElementById('default-state');
    const pathElement = parent?.querySelector('svg path');
  
  // Получаем значение атрибута d
  const dValue = pathElement?.getAttribute('d');
  setDefaultStateAmount(dValue?.split(' ').length || 0)
  },[defaultState])

  useEffect(() => {
    const parent = document.getElementById('target-state');
    const pathElement = parent?.querySelector('svg path');
  
  // Получаем значение атрибута d
  const dValue = pathElement?.getAttribute('d');
  
  setTargetStateAmount(dValue?.split(' ').length || 0) 
  },[targetState])


  return (
    <>
      <Head>
        <title>Check SVG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={`${styles.wrapper} ${inter.className}`}>
            <div id="default-state" className="">
              <h3 className={styles.title}>Исходное состояние</h3>
              {defaultStateAmount && <p>{defaultStateAmount}</p>}
              <textarea className={styles.textarea} value={defaultState} onChange={(event) => {
                setDefaultState(event.target.value)
              }} rows={10}></textarea>
              {defaultState && <div className={styles["svg-preview"]} dangerouslySetInnerHTML={{__html: defaultState}} />}
            </div>
            <div id="target-state" className="">
              <h3 className={styles.title}>Конечное состояние</h3>
              {targetStateAmount && <p>{targetStateAmount}</p>}
              <textarea className={styles.textarea}  value={targetState} onChange={(event) => {
                setTargetState(event.target.value)
              }} rows={10}></textarea>
              {targetState && <div className={styles["svg-preview"]} dangerouslySetInnerHTML={{__html: targetState}} />}
            </div>
        </div>
      </main>
    </>
  );
}
