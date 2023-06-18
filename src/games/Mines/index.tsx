import React from 'react'

import image from './image.png'

export default {
  name: 'Mines',
  short_name: 'mines',
  description: '',
  creator: 'CGsMk2RXU2CkskAsGwEgi2fx895D5Y2PMtBdjWvGzVuJ',
  theme_color: '#ff6a6a',
  image,
  app: React.lazy(() => import('./App')),
}
