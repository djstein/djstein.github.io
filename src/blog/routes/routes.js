import { BlogPage } from "./../components/BlogPage"
import { Base } from "./../../base/layouts/Base"

export const BLOG_ROUTES = [
  {
    path: "/blog/",
    Component: BlogPage,
    Layout: Base,
  },
]
