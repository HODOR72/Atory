import dynamic from 'next/dynamic'
import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import { IAuthor } from '@/shared/types/track.types'

import SlideArrow from './SlideArrow/SlideArrow'
import styles from './Slider.module.scss'
import { useSlider } from './useSlider'

const DynamicSlideItem = dynamic(() => import('./SlideItem'))

interface ISlider {
  buttonTitle?: string
  slides: IAuthor[]
}

const Slider: FC<ISlider> = ({ buttonTitle, slides }) => {
  const { handleClick, index, isNext, isPrev, slideIn } = useSlider(slides.length)

  if (!slides.length) return null

  return (
    <div className={styles.slider}>
      {isPrev && <SlideArrow variant="left" clickHandler={() => handleClick('prev')} />}
      <CSSTransition in={slideIn} timeout={300} classNames="slide-animation" unmountOnExit>
        <DynamicSlideItem slide={slides[index]} buttonTitle={buttonTitle} />
      </CSSTransition>

      {isNext && <SlideArrow variant="right" clickHandler={() => handleClick('next')} />}
    </div>
  )
}
export default Slider
