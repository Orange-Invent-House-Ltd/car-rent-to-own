import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carsData } from "./HomeDatas";
import Autoplay from "embla-carousel-autoplay";

import { Link } from "react-router-dom";
import { Bbutton } from "./Button";
import { useEffect, useState } from "react";
import useCarStore from "@/store/ProductStore";

type Car = {
  id: number;
  name: string;
  image: string;
  model: string;
  engine: string;
  passangers: number;
  max_power: number;
  location: string;
  price: number;
  tag: string;
};
export function MultiSlides() {
  const { setCurrentCar } = useCarStore();

  const handleProductClick = (product: any) => {
    setCurrentCar(product);
  };
  const [filterTags, setFilterTags] = useState<Car[]>(carsData);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleFilter = (tag: string) => {
    if (tag === "all") {
      setFilterTags(carsData);
    } else {
      const filteredCars = carsData.filter((item) => item.tag === tag);
      setFilterTags(filteredCars);
    }
    setActiveFilter(tag);
  };

  useEffect(() => {
    handleFilter("all");
  }, []);

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full"
    >
      <Bbutton
        text="All Cars"
        onClick={() => handleFilter("all")}
        isActive={activeFilter === "all"}
      />
      <Bbutton
        text="Rent to own"
        onClick={() => handleFilter("rent")}
        isActive={activeFilter === "rent"}
      />
      <Bbutton
        text="Trade in (Buy or Sell)"
        onClick={() => handleFilter("trade")}
        isActive={activeFilter === "trade"}
      />
      <CarouselContent className="-ml-1 w-full">
        {filterTags.map((car) => (
          <CarouselItem key={car.id} className="pl-1 basis-1/2 md:basis-1/5">
            <div
              className="p-1 cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.08] relative"
              onClick={() => handleProductClick(car)}
            >
              <p
                className={`absolute left-3 top-5 py-1 px-6 rounded-[10px] text-white font-semibold ${
                  car.tag === "rent"
                    ? "bg-primary-light"
                    : "bg-secondary-light "
                }`}
              >
                {car.tag}
              </p>
              <Link to={`/products/:${car.name}&:${car.id}`}>
                <img
                  src={car.image}
                  alt=""
                  className="object-cover md:h-[300px] md:w-[450px] h-[250px] w-[300px] rounded-md "
                />
                <h1 className="my-4 px-2 text-[#151413] text-[18px]">
                  {car.name}
                </h1>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
