'use client'
import MasonryGallery from '@/components/Gallery'
import React from 'react'
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter()

    const images = [
        { src: '/1.jpg', alt: 'Photo 1' },
        { src: '/2.jpg', alt: 'Photo 2' },
        { src: '/3.jpg', alt: 'Photo 3' },
        { src: '/4.jpg', alt: 'Photo 4' },
        { src: '/5.jpg', alt: 'Photo 5' }
      ];

  return (
    <div>
        <Button onClick={() => router.push('/')}>Atrás</Button>
        <MasonryGallery images={images}/>
    </div>
  )
}

export default Page