// import the classes
import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";

// define the interface, declare the properties, declare the tow method
interface AbleToTow {
    towingCapacity: number;
    tow(vehicle: Truck | Motorbike | Car): void;
}
// export the interface
export default AbleToTow;
