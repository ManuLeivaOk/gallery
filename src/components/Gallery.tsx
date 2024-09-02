/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';

// Definir el tipo para la imagen
type ImageType = {
    src: string;
    alt: string;
};

interface MasonryGalleryProps {
    images: ImageType[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
    const [visible, setVisible] = useState(false);

    const onImageClick = (image: ImageType) => {
        setSelectedImage(image);
        setVisible(true);
    };

    const hideDialog = () => {
        setVisible(false);
    };

    return (
        <div className='mt-5 px-2'>
            <div className={'gallery'}>
                {images.map((image, index) => (
                    <div key={index} className={'galleryItem'} onClick={() => onImageClick(image)}>
                        <img src={image.src} alt={image.alt} className={'galleryImage'} />
                    </div>
                ))}
            </div>

            <Dialog
                visible={visible}
                onHide={hideDialog}
                modal
                className={'imageDialog'}
                dismissableMask
            >
                {selectedImage && (
                    <img src={selectedImage.src} alt={selectedImage.alt} className={'fullImage'} />
                )}
            </Dialog>
        </div>
    );
};

export default MasonryGallery;
