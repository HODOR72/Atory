import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { Gallery } from '@/components/ui'

import { IAlbum } from '@/shared/types/track.types'

import Meta from '@/utils/Meta'

interface IAlbumsPage {
  albums: IAlbum[]
  title: string
}

const Albums: FC<IAlbumsPage> = ({ albums, title }) => {
  return (
    <Meta>
      <Layout haveGradient="gradientBlue">
        <Gallery data={albums} title={title} type="albums" isWrap />
      </Layout>
    </Meta>
  )
}
export default Albums
