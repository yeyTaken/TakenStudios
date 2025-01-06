import { Metadata } from 'next';

import { Section } from '@/components/section/Section';


export const metadata: Metadata = {
  title: "TakenStudios - Página inicial"
};

export default function PageHome() {
  return (
    <main className='mt-8 flex justify-center'>
      <div className='max-w-full min-[880px]:max-w-[880px]'>
        <Section
          variant='h-list'
          title='Populares'
          items={[
            {
              href: '/wiki/developer/javascript-basic',
              title: 'Aprenda o básico de JavaScript',
              image: 'https://i.imgur.com/gXRY4VF.jpeg',
              description: `
                Aprenda o básico de js.
                `,
            },
            {
              href: '/wiki/developer/javascript-basic',
              title: 'Aprenda o básico de JavaScript',
              image: 'https://i.imgur.com/gXRY4VF.jpeg',
              description: `
                Aprenda o básico de js.
                `,
            },
            {
              href: '/wiki/developer/javascript-basic',
              title: 'Aprenda o básico de JavaScript',
              image: 'https://i.imgur.com/gXRY4VF.jpeg',
              description: `
                Aprenda o básico de js.
                `,
            },
            {
              href: '/wiki/developer/javascript-basic',
              title: 'Aprenda o básico de JavaScript',
              image: 'https://i.imgur.com/gXRY4VF.jpeg',
              description: `
                Aprenda o básico de js.
                `,
            },
          ]}
        />
      </div>
    </main>
  );
}
