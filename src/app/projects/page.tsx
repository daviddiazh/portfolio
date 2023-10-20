'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

export default function Projects () {

  const router = useRouter();

  const navigate = () => {
    if (!document?.startViewTransition) {
      return router.push('/');
    }
    document?.startViewTransition(() => {
      router.push('/');
    })
  }

  return (
    <div style={{height: '100vh'}}>
        <h1>Proyectos</h1>
        <p onClick={navigate}>
          Volver
        </p>
    </div>
  )
}
