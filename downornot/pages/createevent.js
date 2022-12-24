import Head from 'next/head'
import Image from 'next/image'


export default function Form() {
  return (
    <div className='h-screen	'>
      <Head>
        <title>Downornot</title>

      </Head>
      
      <h1 class="text-center py-10 text-lg text-white">down or not 👇</h1>
      {/* old events */}
      <div class='relative text-center text-white text-xl list-none'>
        <form action="/api/form" method="post">
          <li><input required class="p-1 text-center w-3/4 my-3 text-md border-none	xl:bg-black" type="text" id="name" name="name" placeholder="Enter event name"></input></li>
          <li><input required class="p-1 text-center w-3/4	my-3 text-md border-none	xl:bg-transparent" type="text" id="date" name="date" placeholder="Enter date"></input></li>
          <li><input class="p-1 text-center w-3/4	my-3 text-md border-none	xl:bg-transparent" type="text" id="time" name="time" placeholder="Enter time"></input></li>
          <li><input class="p-1 text-center w-3/4	my-3 text-md border-none	xl:bg-transparent" type="text" id="details" name="details" placeholder="Enter details"></input></li>
          <li><input class="p-1 text-center w-3/4	my-3 text-md border-none	xl:bg-transparent" type="text" id="location" name="location" placeholder="Enter location"></input></li>  
          <button type="submit" class="inline-block my-10 px-6 py-2.5 bg-green-500 text-white font-medium text-s leading-tight rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Create new event</button>
        </form>
      </div>
      
    </div>
  )
}
