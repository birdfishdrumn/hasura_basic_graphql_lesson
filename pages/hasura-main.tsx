import { VFC } from 'react'
import Link from 'next/link'
import { GET_USERS } from 'queries/queries'
import { GetUsersQuery } from 'types/generated/graphql'
import { useQuery } from '@apollo/client'
import { Layout } from 'components/Layout'

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    // fetchPolicy: 'network-only'
     fetchPolicy: 'cache-and-network'
    // fetchPolicy: "cache-first"
    //  fetchPolicy: 'no-cache'
  })
  // if (loading) return (
  //       <Layout title="Hasura fetchPolicy">
  //         <div>Loading...</div>
  //     </Layout>
  // )
  if (error)
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )
  return (
    <Layout title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura Main Page</p>
      {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchMain
