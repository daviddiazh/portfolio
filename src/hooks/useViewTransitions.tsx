'use client';

import { useRouter } from 'next/navigation';

export const useViewTransitions = () => {
    const router = useRouter();

    const navigate = (url: string) => {
      if (!(document as any)?.startViewTransition) {
        return router.push(url);
      }
      (document as any)?.startViewTransition(() => {
        router.push(url);
      })
    }

  return {
    navigate,
  }
}
