// Lazy Load Image
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyLoadProps {
  src: string;
  alt: string;
  className: string;
}

function AlanLazyLoad({ src, alt, className }: LazyLoadProps) {
  return (
    <>
      <LazyLoadImage src={src} alt={alt} className={className} effect="blur" />
    </>
  );
}

export default AlanLazyLoad;
