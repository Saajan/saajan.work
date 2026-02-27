import { Route as rootRoute } from './__root'
import { Route as IndexRoute } from './index'
import { Route as ProfessionalRoute } from './professional'
import { Route as PersonalRoute } from './personal'

const Index = IndexRoute
const Professional = ProfessionalRoute
const Personal = PersonalRoute

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof Index
      parentRoute: typeof rootRoute
    }
    '/professional': {
      preLoaderRoute: typeof Professional
      parentRoute: typeof rootRoute
    }
    '/personal': {
      preLoaderRoute: typeof Personal
      parentRoute: typeof rootRoute
    }
  }
}

export const routeTree = rootRoute.addChildren([
  Index,
  Professional,
  Personal,
])
