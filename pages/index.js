import Head from 'next/head'
import DestinationCard from '../components/DestinationCard'

import popularDestinations from '../utils/popularDestinations'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="bg-gray-100 grid lg:grid-cols-2">
        <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:mx-w-full xl:mr-0">
          <div class="xl:max-w-xl space-y-6">
            <img src="/logo.png" alt="four51" class="max-h-16"/>
            <img src="/images/watch.jpg" alt="watch" class="lg:hidden rounded-lg shadow-2xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center"/>
            <div>
              <h1 class="text-gray-800">You can work from anywhere. <span class="text-orange-600 block">Take advantage of it.</span></h1>
              <p class="text-gray-600 mt-4">
                Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
              </p>
              <div class="mt-4 space-x-2">
                <button class="btn solid-primary" href="#">Book Your Escape</button>
                <button class="btn solid-secondary" href="#">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden relative lg:block">
          <img src="/images/watch.jpg" alt="watch" class="absolute inset-0 w-full h-full object-cover object-center"/>
        </div>
      </div>

      <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2>Popular Destinations</h2>
        <p>A selection of great work-friendly cities with lots to see and explore</p>
        
        <div class="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinations.map((d) => (
            <DestinationCard destination={d} key={d.city}/>
          ))}
        </div>
      </div>

    </>
  )
}
