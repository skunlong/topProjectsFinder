import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Apollo plugin
Vue.use(VueApollo)

const AUTH_TOKEN = 'apollo-token'

const httpEndpoint = ' https://api.github.com/graphql'

// Config
const defaultOptions = {
  httpEndpoint,
  tokenName: AUTH_TOKEN,
  persisting: false,
  websocketsOnly: false,
  ssr: false,

  // Override default apollo link
  // Override default cache
  // cache: myCache
  cache: new InMemoryCache({
    freezeResults: false
  }),

  // Override the way the Authorization header is set
  getAuth: () => {
    // using my token, if using for your own app please use your token
    const token = '255af90d8801b323e1dbc5a70c4be76440097c99'
    // return the headers to the context so httpLink can read them
    if (token) {
      return 'Bearer ' + token
    } else {
      return ''
    }
  }
}

export function createProvider (options = {}) {
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options
  })
  apolloClient.wsClient = wsClient

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    fetchPolicy: 'no-cache',
    defaultOptions: {
      $query: {
      }
    },
    errorHandler (error) {
      // eslint-disable-next-line no-console
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    }
  })

  return apolloProvider
}

export async function onLogin (apolloClient, token) {
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(AUTH_TOKEN, token)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (login)', 'color: orange;', e.message)
  }
}

export async function onLogout (apolloClient) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
  }
}
