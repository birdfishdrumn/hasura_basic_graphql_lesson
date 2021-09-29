import { gql } from "@apollo/client"

export const GET_USERS = gql`
query GetUsers {
    users(order_by: {created_at: desc}) {
    id
    name
    created_at
  }
}
`
// @clientは取得した値をキャッシュとして保存しておくのでどこ彼でも参照できるようになる。
export const GET_USERS_LOCAL= gql`
query GetUsers {
    users(order_by: {created_at: desc}) @client{
    id
    name
    created_at
  }
}
`

export const GET_USERIDS = gql`
query GetUsersIds {
    users(order_by: {created_at: desc}) {
    id
  }
}
`
// 特定のidをもったuser情報を取得する。
export const GET_USERBY_ID = gql`
query GetUserById($id: uuid!) {
  users_by_pk(id: $id){
    id
    name
    created_at
  }
}
`
//String!の!は引数が必須であるという意味
export const CREATE_USER = gql`
 mutation CreateUser($name: String!){
    insert_users_one(object: {name: $name}) {
    id
    name
    created_at
  }
 }
`
//Userの削除
export const DELETE_USER = gql`
 mutation DeleteUser($id: uuid!){
     delete_users_by_pk(id: $id) {
    id
    name
    created_at
  }
 }
 `

//User情報の更新
export const UPDATE_USER = gql`
 mutation UpdateUser($id: uuid!,$name: String!){
    update_users_by_pk(pk_columns: {id: $id},_set: {name:$name}) {
    id
    name
    created_at
  }
 }
 `
