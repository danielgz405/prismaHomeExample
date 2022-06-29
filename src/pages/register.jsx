import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col items-start justify-start">

          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            NO LO PIENSES DOS VECES PARA SOLICITAR TU DEMO
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Conoce esta ventana al futuro de la organización del personal y agiliza los procesos productivos en pocos pasos.
          </p>
        </div>
        <div className="mt-5">
          <div className="mt-6">
            <form action="#" method="" className="space-y-7">
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
                <Input
                  label="Nombre Empresa"
                  id="companie"
                  name="companie"
                  type="text"
                  required
                />
                <Input
                  label="NIT"
                  id="nit"
                  name="nit"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
                <Input
                  label="Nombre Contacto"
                  id="name"
                  name="namee"
                  type="text"
                  required
                />
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
                <Input
                  label="Teléfono"
                  id="phone"
                  name="Teléfono"
                  required
                />
                <Input
                  label="Ciudad"
                  id="city"
                  name="city"
                  type="text"
                  required
                />
              </div>
              <Input
                label="Mensaje"
                id="message"
                name="message"
                type="textarea"
                required
              />
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full rounded-full border border-transparent bg-teal-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Enviar <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}
