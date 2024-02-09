import { GAM_PLACES } from "../../data";

type PlaceLocationType = {
  province: string;
  municipality: string;
};

/**
 * check if location is in Gam
 */
export default function LocationIsInGam(location: PlaceLocationType) {
  // Check if the province exists in GAM_PLACES
  console.log(location);
  if (GAM_PLACES.hasOwnProperty(location.province)) {
    // Check if the canton exists in the province
    if (
      GAM_PLACES[
        location.province as keyof typeof GAM_PLACES
      ].cantones.includes(location.municipality)
    ) {
      return true; // Object is in GAM
    }
  }
  return false; // Object is not in GAM
}
