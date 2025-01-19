import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import logoNextjs from '@/images/logos/next-js-svgrepo-com.svg'
import logoReact from '@/images/logos/reactjs-svgrepo-com.svg'
import logoPhp from '@/images/logos/php01-svgrepo-com.svg'
import logoSquareSpace from '@/images/logos/squarespace-svgrepo-com.svg'
import logoShopify from '@/images/logos/shopify-color-svgrepo-com.svg'
import logoStripe from '@/images/logos/stripe-svgrepo-com.svg'
import logoFirebase from '@/images/logos/firebase-svgrepo-com.svg'
import logoFigma from '@/images/logos/figma-svgrepo-com.svg'

const stacks = [
  { name: 'Next', logo: logoNextjs },
  { name: 'React', logo: logoReact },
  { name: 'Php', logo: logoPhp },
  { name: 'Laravel', logo: logoLaravel },
  { name: 'Spuare Space', logo: logoSquareSpace },
  { name: 'Shopify', logo: logoShopify },
  { name: 'Stripe', logo: logoStripe },
  { name: 'Firebase', logo: logoFirebase },
  { name: 'Figma', logo: logoFigma },
]

export function Stack() {
  return (
    <section id="stacks" aria-label="Stacks" className="py-20 sm:py-32">
      <Container>
        <h2 className="max-w-2xl mx-auto text-4xl font-medium tracking-tighter text-center text-blue-900 font-display sm:text-5xl">
          Our current tech stack.
        </h2>
        <div className="grid grid-cols-1 mx-auto mt-20 max-w-max place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {stacks.map((stack) => (
            <div key={stack.name} className="flex items-center justify-center">
              <Image src={stack.logo} alt={stack.name} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
