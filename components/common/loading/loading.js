// components/common/loading/loading.js
import React from 'react'
import Image from 'next/image'
import styles from './loading.module.scss'

const Loading = ({ show = true }) => {
  if (!show) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.violinContainer}>
        {/* 小提琴動畫 */}
        <Image
          src="/loading/violin.svg"
          alt="Violin"
          width={100}
          height={100}
          className={styles.violin}
        />
        {/* 弓動畫 */}
        <Image
          src="/loading/bow.svg"
          alt="Bow"
          width={100}
          height={100}
          className={styles.bow}
        />
        <div className={styles.loader}></div>
      </div>
    </div>
  )
}

export default Loading
