"use client";

import { useState } from 'react';
import { Gallery } from '@/interfaces';
import { Btn } from './Btn';

interface Props {
  gallery: Gallery[];
}

export default function GalleryModal({ gallery }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);

  const openModal = (image: Gallery) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={`mb-6 flex ${
          gallery.length > 4 ? 'flex-wrap' : 'flex-col'
        } items-center justify-center gap-6`}>
        {gallery.map((image, index) => (
          <div key={index} >
            <h3 className="font-semibold text-xl text-center ">
              {image.title || ''}
            </h3>
            <p className="text-lg text-center ">{image.description || ''}</p>
            <img
              src={image.imageUrl}
              alt={image.title || ''}
              className={`rounded-xl cursor-zoom-in hover:brightness-75 transition duration-200 ${gallery.length > 4 ? 'w-[450px] h-[350px]' : 'w-full'}`}
              onClick={() => openModal(image)}
            />
            <p className='text-center'>{image.context}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 backdrop-blur-2xl bg-opacity-50 flex items-center justify-center z-50">
          <div className=" p-6 rounded shadow-lg max-w-2xl w-full ">
            <Btn
              onClick={closeModal}
              className="absolute top-5 right-5 cursor-pointer px-4"
            >
              X
            </Btn>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title || 'Untitled'}
              loading='lazy'
              className=" scale-170 h-auto rounded-lg mb-4"
            />
          </div>
        </div>
      )}
    </div>
  );
}