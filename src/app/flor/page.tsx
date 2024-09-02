'use client'
import MasonryGallery from '@/components/Gallery'
import React from 'react'
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter()

    const images = [
        { src: '/7.jpg', alt: 'Photo 1' },
      ];

  return (
    <div>
        <Button onClick={() => router.push('/')}>Atrás</Button>
        <MasonryGallery images={images}/>
    </div>
  )
}

export default Page