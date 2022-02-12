import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function Collection() {
    const router = useRouter()
    console.log(router.query)
    console.log(router.query.collectionId)
    return (
        <Link href='/'>
            <div className="cursor-pointer dark:md:hover:text-[#50d71e]">{router.query.collectionId}</div>
        </Link>
    )
}

