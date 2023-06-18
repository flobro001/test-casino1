import React from 'react'
import image from './image.png'

export default {
  name: 'HiLo',
  short_name: 'hilo',
  description: '',
  creator: 'CGsMk2RXU2CkskAsGwEgi2fx895D5Y2PMtBdjWvGzVuJ',
  image,
  app: React.lazy(() => import('./App')),
}
