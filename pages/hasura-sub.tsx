import { VFC } from 'react'
import Link from 'next/link'
import { GET_USERS_LOCAL } from 'queries/queries'
import { GetUsersQuery } from 'types/generated/graphql'
import { useQuery } from '@apollo/client'
import { Layout } from 'components/Layout'



const FetchSub: VFC = () => {
  const { data,loading } = useQuery<GetUsersQuery>(GET_USERS_LOCAL)

    if (loading) return (
        <Layout title="Hasura fetchPolicy">
          <div>Loading...</div>
      </Layout>
    )

  return (
    <Layout title="Hasura fecth policy read cache">
      <p className="mb-6 font-bold"> Dierct read out from cache</p>
          {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
          })}
      <Link href="/hasura-main">
        <a className="mt-6">Back</a>
      </Link>
   </Layout>
  )
}

export default FetchSub
