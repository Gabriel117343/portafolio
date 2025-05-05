import React from 'react'
import Link from 'next/link'
import { use } from 'react'

const NewsArticle =({ params, searchParams }: {
  params: Promise<{ articleId: string }>
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>
}) => {

  const { articleId } = use(params)
  const { lang = "en" }  = use(searchParams)
  return (
    <div>
      <h1>New article id {' '}
        <strong>{articleId}</strong>
      </h1>
      <p>Reading in language {' '} 
        <strong>{lang}</strong>
      </p>
      <div className="flex gap-2">
        <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Leer en Español</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>Lire en français</Link>
      </div>
    </div>
  )
}

export default NewsArticle