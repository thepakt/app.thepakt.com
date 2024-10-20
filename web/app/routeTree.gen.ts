/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersImport } from './routes/users'
import { Route as RedirectImport } from './routes/redirect'
import { Route as FeedImport } from './routes/feed'
import { Route as DeferredImport } from './routes/deferred'
import { Route as ChatImport } from './routes/chat'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as LayoutTasksImport } from './routes/_layout/tasks'
import { Route as LayoutProfileImport } from './routes/_layout/profile'
import { Route as LayoutExploreImport } from './routes/_layout/explore'

// Create/Update Routes

const UsersRoute = UsersImport.update({
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const RedirectRoute = RedirectImport.update({
  path: '/redirect',
  getParentRoute: () => rootRoute,
} as any)

const FeedRoute = FeedImport.update({
  path: '/feed',
  getParentRoute: () => rootRoute,
} as any)

const DeferredRoute = DeferredImport.update({
  path: '/deferred',
  getParentRoute: () => rootRoute,
} as any)

const ChatRoute = ChatImport.update({
  path: '/chat',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutTasksRoute = LayoutTasksImport.update({
  path: '/tasks',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutProfileRoute = LayoutProfileImport.update({
  path: '/profile',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutExploreRoute = LayoutExploreImport.update({
  path: '/explore',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/chat': {
      id: '/chat'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof ChatImport
      parentRoute: typeof rootRoute
    }
    '/deferred': {
      id: '/deferred'
      path: '/deferred'
      fullPath: '/deferred'
      preLoaderRoute: typeof DeferredImport
      parentRoute: typeof rootRoute
    }
    '/feed': {
      id: '/feed'
      path: '/feed'
      fullPath: '/feed'
      preLoaderRoute: typeof FeedImport
      parentRoute: typeof rootRoute
    }
    '/redirect': {
      id: '/redirect'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof RedirectImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersImport
      parentRoute: typeof rootRoute
    }
    '/_layout/explore': {
      id: '/_layout/explore'
      path: '/explore'
      fullPath: '/explore'
      preLoaderRoute: typeof LayoutExploreImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/profile': {
      id: '/_layout/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof LayoutProfileImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/tasks': {
      id: '/_layout/tasks'
      path: '/tasks'
      fullPath: '/tasks'
      preLoaderRoute: typeof LayoutTasksImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutExploreRoute: typeof LayoutExploreRoute
  LayoutProfileRoute: typeof LayoutProfileRoute
  LayoutTasksRoute: typeof LayoutTasksRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutExploreRoute: LayoutExploreRoute,
  LayoutProfileRoute: LayoutProfileRoute,
  LayoutTasksRoute: LayoutTasksRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof LayoutRouteWithChildren
  '/chat': typeof ChatRoute
  '/deferred': typeof DeferredRoute
  '/feed': typeof FeedRoute
  '/redirect': typeof RedirectRoute
  '/users': typeof UsersRoute
  '/explore': typeof LayoutExploreRoute
  '/profile': typeof LayoutProfileRoute
  '/tasks': typeof LayoutTasksRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof LayoutRouteWithChildren
  '/chat': typeof ChatRoute
  '/deferred': typeof DeferredRoute
  '/feed': typeof FeedRoute
  '/redirect': typeof RedirectRoute
  '/users': typeof UsersRoute
  '/explore': typeof LayoutExploreRoute
  '/profile': typeof LayoutProfileRoute
  '/tasks': typeof LayoutTasksRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/chat': typeof ChatRoute
  '/deferred': typeof DeferredRoute
  '/feed': typeof FeedRoute
  '/redirect': typeof RedirectRoute
  '/users': typeof UsersRoute
  '/_layout/explore': typeof LayoutExploreRoute
  '/_layout/profile': typeof LayoutProfileRoute
  '/_layout/tasks': typeof LayoutTasksRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/chat'
    | '/deferred'
    | '/feed'
    | '/redirect'
    | '/users'
    | '/explore'
    | '/profile'
    | '/tasks'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/chat'
    | '/deferred'
    | '/feed'
    | '/redirect'
    | '/users'
    | '/explore'
    | '/profile'
    | '/tasks'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/chat'
    | '/deferred'
    | '/feed'
    | '/redirect'
    | '/users'
    | '/_layout/explore'
    | '/_layout/profile'
    | '/_layout/tasks'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutRoute: typeof LayoutRouteWithChildren
  ChatRoute: typeof ChatRoute
  DeferredRoute: typeof DeferredRoute
  FeedRoute: typeof FeedRoute
  RedirectRoute: typeof RedirectRoute
  UsersRoute: typeof UsersRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
  ChatRoute: ChatRoute,
  DeferredRoute: DeferredRoute,
  FeedRoute: FeedRoute,
  RedirectRoute: RedirectRoute,
  UsersRoute: UsersRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/chat",
        "/deferred",
        "/feed",
        "/redirect",
        "/users"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/explore",
        "/_layout/profile",
        "/_layout/tasks"
      ]
    },
    "/chat": {
      "filePath": "chat.tsx"
    },
    "/deferred": {
      "filePath": "deferred.tsx"
    },
    "/feed": {
      "filePath": "feed.tsx"
    },
    "/redirect": {
      "filePath": "redirect.tsx"
    },
    "/users": {
      "filePath": "users.tsx"
    },
    "/_layout/explore": {
      "filePath": "_layout/explore.tsx",
      "parent": "/_layout"
    },
    "/_layout/profile": {
      "filePath": "_layout/profile.tsx",
      "parent": "/_layout"
    },
    "/_layout/tasks": {
      "filePath": "_layout/tasks.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
