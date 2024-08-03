import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
  slides: string[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  return (
    <div className="embla relative">
      <div
        className="bg-secondary-dark md:w-full md:h-[730px] w-full min-h-[333px] rounded-br-[23px] rounded-bl-[23px] rounded-tl-none rounded-tr-none overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {slides.map((item, index) => (
            <div className="embla__slide min-w-full" key={index}>
              <img
                src={item}
                alt={`Slide ${index + 1}`}
                className="object-cover md:h-[730px] h-[333px] w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="embla__button embla__button--prev absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full"
        onClick={() => emblaApi?.scrollPrev()}
      >
        <ChevronLeft />
      </button>
      <button
        className="embla__button embla__button--next absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full"
        onClick={() => emblaApi?.scrollNext()}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Slider;
