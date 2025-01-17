import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { Post } from './post'

export interface Post {
  id: string
  userid: string
  title: string
  username: string
  description: string
}

const Main = () => {
  const [postList, setPostList] = useState<Post[] | null>(null)
  const postRef = collection(db, 'posts')

  const getPosts = async () => {
    const data = await getDocs(postRef)
    setPostList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    )
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      {postList?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  )
}

export default Main
