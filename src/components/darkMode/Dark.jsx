"use client";
import React, { useContext } from 'react'
import styles from "./style.module.css"
import { ThemeContext } from '@/context/ThemeContext'


const Dark = () => {
  const {toogle, mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toogle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌞</div>
        <div className={styles.ball} style={mode === "light" ? {left: "2px"}: {right: "2px"}} />
    </div>
  )
}

export default Dark