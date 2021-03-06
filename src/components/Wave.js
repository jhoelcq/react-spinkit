import React from "react"
import classNames from "classnames"
import styles from "../scss/styles.module.scss"

const Wave = ({ size, color, className, ...rest }) => {
  const _className = classNames({
    [styles[`spin-wave`]]: true,
    [styles[`spin-wave-${color}`]]: color,
    [styles[`spin-wave-${size}`]]: size,
    [className]: className
  })

  return (
    <div className={_className} {...rest}>
      <div className={styles[`spin-wave-rect`]} />
      <div className={styles[`spin-wave-rect`]} />
      <div className={styles[`spin-wave-rect`]} />
      <div className={styles[`spin-wave-rect`]} />
      <div className={styles[`spin-wave-rect`]} />
    </div>
  )
}

export { Wave }
