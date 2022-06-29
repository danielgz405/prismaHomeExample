import Image from "next/image"

import backgroundImage from '@/images/background-faqs.jpg'
const people = [
  {
    name: 'Juan Carlos Manchego Alvarez',
    role: 'Chief Executive Officer (CEO)',
    imageUrl:
      'JCM.jpg',
  },
  {
    name: 'Daniel Felipe Gonzalez',
    role: 'Software Developement',
    imageUrl:
      'Dan.jpg',
  },
  {
    name: 'Juan Carlos Manchego Herrera',
    role: 'Chief Information Officer (CIO)',
    imageUrl:
      'JCMH.jpg',
  },
  {
    name: 'Camilo Andres Quintero',
    role: 'Software Developement',
    imageUrl:
      'CQ.jpg',
  },
  {
    name: 'Valentina Hernández',
    role: 'Design & Marketing',
    imageUrl:
      'Val.jpeg',
  },
]

export function OurTeam() {
  return (
  <div className="relative overflow-hidden bg-slate-50 py-20 sm:py-32">
      <h2 id="faq-title" className="sr-only">
        Frequently asked questions
      </h2>
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <Image
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          layout="fixed"
          unoptimized
        />
      </div>
      <div className="relative mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 justify-center items-center">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Nuestro Equipo</h2>
            <p className="text-xl text-gray-500">
              Este es nuestro Equipo, trabajamos para brindarte herramientas que puedas integrar en los procesos de tu empresa.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8 justify-center items-center">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <img className="w-16 rounded-full lg:w-20 " src={person.imageUrl} alt="" />
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-teal-600">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
