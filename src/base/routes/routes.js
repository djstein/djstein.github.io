import { BASE_ROUTES } from './baseRoutes'
import { BLOG_ROUTES } from './../../blog/routes/routes'
import { WORK_ROUTES } from './../../work/routes/routes'

export const routes = [...BASE_ROUTES, ...BLOG_ROUTES, ...WORK_ROUTES]
