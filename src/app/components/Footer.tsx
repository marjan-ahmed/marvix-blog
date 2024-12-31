import Link from 'next/link'
import React from 'react'

function Footer() {
  return (

<footer className="bg-transparent rounded-lg shadow dark:bg-gray-900 m-4 mt-14 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://marvix-blog.vercel.app/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Link href="/" className="font-bold text-3xl dark:text-white">
        Marvix<span className="text-gray-500">Blog</span>
      </Link>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://github.com" className="hover:underline me-4 md:me-6">GitHub</a>
                </li>
                <li>
                    <a href="https://discord.com/channels/@marjan.ahmed" className="hover:underline me-4 md:me-6">Discord</a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/hafizmarjanahmed" className="hover:underline me-4 md:me-6">LinkedIn</a>
                </li>
                <li>
                    <a href="https://x.com/@m_marjanahmed" className="hover:underline">Twitter</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://marvix-blog.vercel.app/" className="hover:underline">Marvix™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer