import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Stack } from '@/components/Stack'

export default function Home() {
  return (
    <>
      <Hero />
      <Speakers />
      <Schedule />
      <Stack />
      <Newsletter />
    </>
  )
}
