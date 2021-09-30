import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import 'cross-fetch/polyfill'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const createApolloClient = () => {
  return new ApolloClient({
    // windowはブラウザという意味がある。
    // ブラウザではない場合にtrueになるというコード
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://test-basic.hasura.app/v1/graphql',
    }),
    cache: new InMemoryCache(),
  })
}
// SSGの場合などは最初にapolloclientは存在しないのでcreateApolloClientで新しいものが生成される。
// ２回目以降もnullまたはundefinedなので常にcreateApolloClinetで新しいものが生成される、

export const initializeApollo = (initialState = null) => {
  // ・??は左辺がnullまたundefinedの場合、右辺の処理が実行される。
  // 左辺に何らかの値が入っていれば、_apolloClientにはapolloClientが代入される。

  // 左辺がクライアントサイド　右辺がSSG,SSR
  const _apolloClient = apolloClient ?? createApolloClient()
  // For SSG and SSR always create a new Apollo Client
  // ssgやssrを使用する場合は常に新しいapollo clientが生成される。
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  // クライアントサイドの場合は一回のみ作成する。
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}
