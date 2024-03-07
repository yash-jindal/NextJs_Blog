import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        ©2024 BlogApp. All rights reserved.
      </div>

      <div className={styles.social}>
        <Image width={15} height={15} className={styles.icon} src="/1.png" alt="BlogApp Facebook Account"/>
        <Image width={15} height={15} className={styles.icon} src="/2.png" alt="BlogApp Insta Account"/>
        <Image width={15} height={15} className={styles.icon} src="/3.png" alt="BlogApp Twitter Account"/>
        <Image width={15} height={15} className={styles.icon} src="/4.png" alt="BlogApp YT Account"/>
      </div>
    </div>
  )
}

export default Footer