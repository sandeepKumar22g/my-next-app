"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import useSWR from 'swr'
 

const Dashboard = () => {

  const session = useSession()
  console.log(session)

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
 
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard