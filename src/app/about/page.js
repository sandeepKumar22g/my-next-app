import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { Button } from '@/components'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill alt="about img" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story teller</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experinces</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempora culpa expedita atque libero sequi eius voluptatibus accusantium mollitia perferendis enim necessitatibus officia doloribus odit dicta, placeat consequatur, earum numquam. Eius eaque eligendi nihil sint maxime cum sequi velit voluptas hic soluta repellendus perspiciatis neque voluptatum quas obcaecati,
          <br />
          <br />
          quibusdam sed aliquam magnam. Recusandae tenetur vel quibusdam animi nobis aperiam debitis atque, ullam minus velit cumque nam odit voluptates porro nesciunt, quas inventore ad. Iusto provident fugiat atque deserunt ullam! Deleniti, in dolore. Molestias expedita necessitatibus error perspiciatis qui quae, libero officiis et numquam ipsum velit ducimus eos reiciendis excepturi nulla!</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About