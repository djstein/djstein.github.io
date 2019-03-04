import { EventsPage } from './../components/EventsPage'
import { Base } from './../../base/layouts/Base'

export const EVENTS_ROUTES = [
  {
    path: '/events/',
    Component: EventsPage,
    Layout: Base,
  },
]
