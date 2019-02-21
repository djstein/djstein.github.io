import { BlogPage } from './../components/BlogPage'
import { BlogPost } from './../components/BlogPost'
import { Base } from './../../base/layouts/Base'

export const BLOG_ROUTES = [
  {
    path: '/blog/',
    Component: BlogPage,
    Layout: Base,
  },
  {
    path: '/blog/:fileName',
    Component: BlogPost,
    Layout: Base,
  },
]
