import cn from 'classnames'
import { FC } from 'react'

import MaterialIcon from '../../MaterialIcon'

import styles from './SlideArrow.module.scss'

interface ISlideArrow {
  variant: 'left' | 'right'
  clickHandler: () => void
}

const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
  const isLeft = variant === 'left'

  return (
    <button
      onClick={clickHandler}
      aria-label="Next"
      className={cn(styles.arrow, {
        [styles.left]: isLeft,
        [styles.right]: !isLeft,
      })}
    >
      <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
    </button>
  )
}

export default SlideArrow
