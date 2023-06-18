import React from 'react'
import image from './image.png'

export default {
  name: 'Roulette',
  short_name: 'roulette',
  description: '',
  creator: 'CGsMk2RXU2CkskAsGwEgi2fx895D5Y2PMtBdjWvGzVuJ',
  image,
  theme_color: '#59ff5f',
  app: React.lazy(() => import('./App')),
}
