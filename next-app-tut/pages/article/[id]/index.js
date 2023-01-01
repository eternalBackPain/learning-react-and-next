import React from 'react'
import Link from 'next/link'

const article = ({article}) => {
  return (
    <>
    <h1>{article.title}</h1>
    <p1>{article.body}</p1>
    <Link href='/'>Go back</Link>
    </>
  )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

//WE CAN ALSO USE getStaticPaths HERE

export default article