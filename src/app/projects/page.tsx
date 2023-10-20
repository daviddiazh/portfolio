'use client';

import { useViewTransitions } from '@/hooks/useViewTransitions';

export default function Projects () {

  const {navigate} = useViewTransitions();

  return (
    <div style={{height: '100vh'}}>
        <h1>Proyectos</h1>
        <p onClick={() => navigate('/')}>
          Volver
        </p>
    </div>
  )
}
