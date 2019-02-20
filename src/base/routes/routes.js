import { BASE_ROUTES } from "./baseRoutes"
import { BLOG_ROUTES } from "./../../blog/routes/routes"

export const routes = [...BASE_ROUTES, ...BLOG_ROUTES]
