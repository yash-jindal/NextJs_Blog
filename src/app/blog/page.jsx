import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

async function getData() {
  const res = await fetch("https://next-js-blog-nine-ruby.vercel.app/api/posts", { cache: "no-store", });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map(item => (
        <Link className={styles.container} href={`/blog/${item._id}`} key={item.id}>
          <div className={styles.imgContainer}>
            <Image src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}


    </div>
  )
}

export default Blog
