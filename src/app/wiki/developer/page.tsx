import { Metadata } from 'next';

import { Section } from '@/components/section/Section';


export const metadata: Metadata = {
  title: "TakenStudios - Programação"
};

export default function Developer() {
  return (
    <main className='mt-8 flex justify-center'>
      <div className='min-[880px]:max-w-[880px]'>
        <Section
          variant='grid'
          title='Todos os cursos'
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
