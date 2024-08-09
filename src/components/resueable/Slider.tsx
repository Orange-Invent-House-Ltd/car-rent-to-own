// Slider Component

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface SlideType {
  slides: [];
}

function Slider({ slides }: SlideType) {
  return (
    <div className="w-full bg-secondary-dark rounded-br-[25px] rounded-bl-[25px] overflow-hidden">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 9000,
          }),
        ]}
        className="w-full md:max-w-[100%] md:h-full  h-[343px] relative"
      >
        <CarouselContent className="md:h-[730px] h-[343px]">
          {slides.map((img, index) => (
            <CarouselItem key={index} className="md:h-[730px]  h-[343px]">
              <div className=" ">
                <img
                  src={img}
                  alt=""
                  className="md:h-[730px]  h-[343px] w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-[50%]  bg-secondary-dark text-white border-none " />
        <CarouselNext className="absolute right-2 top-[50%]   bg-secondary-dark text-white border-none " />
      </Carousel>
    </div>
  );
}

export default Slider;
