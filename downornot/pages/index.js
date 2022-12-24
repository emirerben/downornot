import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='h-screen	'>
      <Head>
        <title>Downornot</title>

      </Head>
      
      <h1 class="text-center py-10 text-lg text-white">down or not 👇</h1>
      {/* old events */}
      <div>
        <p class="text-center -left-15 my-20 text-md text-white">🎉  Birthday party</p>
      </div>
      
      <div class="w-full flex space-x-2 justify-center bottom-1/4 absolute">
        <Link href='/createevent' type="button" class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-s leading-tight rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Create new event</Link>
      </div>

      
    </div>
  )
}
