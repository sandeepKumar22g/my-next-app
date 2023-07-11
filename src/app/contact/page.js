import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { Button } from '@/components'

const Contact = () => {
  return (
    <div className={styles.container} >
      <h1 className={styles.title}>Let&aops;s keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="contact" fill className={styles.image} />
        </div>
        <form className={styles.form}>
          <input type="text" name="" placeholder='name' className={styles.input} />
          <input type="text" name="" placeholder='email' className={styles.input} />
          <textarea className={styles.textarea} placeholder='message' name=""  cols="30" rows="10"></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact