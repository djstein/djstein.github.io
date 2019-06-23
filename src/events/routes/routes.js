import { EventsPage } from './../components/EventsPage'
import { EventsPost } from './../components/EventsPost'
import { Base } from './../../base/layouts/Base'

export const EVENTS_ROUTES = [
  {
    path: '/events/',
    Component: EventsPage,
    Layout: Base,
  },
  {
    path: '/events/:fileName',
    Component: EventsPost,
    Layout: Base,
  },
]
