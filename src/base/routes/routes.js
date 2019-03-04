import { BASE_ROUTES } from './baseRoutes'
import { BLOG_ROUTES } from './../../blog/routes/routes'
import { EVENTS_ROUTES } from './../../events/routes/routes'
import { WORK_ROUTES } from './../../work/routes/routes'

export const routes = [
  ...BASE_ROUTES,
  ...BLOG_ROUTES,
  ...EVENTS_ROUTES,
  ...WORK_ROUTES,
]
