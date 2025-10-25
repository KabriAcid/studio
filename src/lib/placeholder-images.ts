import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export const heroSlides = [
    { id: 'slide-1', imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop', alt: 'Students studying together', imageHint: 'students learning' },
    { id: 'slide-2', imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop', alt: 'Student graduating', imageHint: 'student graduation' },
    { id: 'slide-3', imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop', alt: 'Students in a classroom', imageHint: 'students classroom' },
    { id: 'slide-4', imageUrl: 'https://images.unsplash.com/photo-1576405828234-a8a932c942b9?q=80&w=2070&auto=format&fit=crop', alt: 'Happy children smiling', imageHint: 'happy children' },
];
