import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="max-w-2xl mx-auto lg:max-w-4xl lg:px-12">
          <h1 className="text-5xl font-bold tracking-tighter text-blue-600 font-display sm:text-7xl">
            <span className="sr-only">Front Stack Design - </span>Where
            Development Meets Cutting-Edge Design
          </h1>
          <div className="mt-6 space-y-6 text-2xl tracking-tight text-blue-900 font-display">
            <p>
              Today’s web users are sharp, tech-savvy, and expect nothing short
              of excellence. They demand seamless interfaces, secure platforms,
              and experiences that just work—every time.
            </p>
            <p>
              At FrontStackDesign, we partner with clients to create tailored
              solutions that meet these expectations head-on. From intuitive
              design to robust development, we focus on solving your challenges
              with precision and creativity. Whether you need a user-friendly
              interface, a scalable platform, or a complete digital
              transformation, we’re here to make it happen.
            </p>
            <p>
              Let us help you deliver experiences that don’t just meet your
              users’ needs but exceed them.
            </p>
          </div>
          <Button href="#" className="w-full mt-10 sm:hidden">
            Get your tickets
          </Button>
          <dl className="grid grid-cols-2 mt-10 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Clints', '12'],
              ['Solutions', '20+'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
