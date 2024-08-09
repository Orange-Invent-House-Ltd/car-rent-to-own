import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Car {
  id: number;
  name: string;
  model: string;
  engine: string;
  passangers: number;
  max_power: number;
  location: string;
  price: number;
  image: string;
}

interface CarState {
  cars: Car[];
  currentCar: Car | null;
  setCurrentCar: (car: Car) => void;
}

const useCarStore = create<CarState>()(
  persist(
    (set) => ({
      cars: [],
      currentCar: null,
      setCurrentCar: (car) => set({ currentCar: car }),
    }),
    {
      name: "car-store",
    }
  )
);

export default useCarStore;
