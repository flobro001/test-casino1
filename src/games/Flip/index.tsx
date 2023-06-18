import React from 'react'
import image from './image.png'

export default {
  name: 'Flip',
  short_name: 'flip',
  description: '',
  creator: 'CGsMk2RXU2CkskAsGwEgi2fx895D5Y2PMtBdjWvGzVuJ',
  image,
  theme_color: '#ad6bff',
  app: React.lazy(() => import('./App')),
}
