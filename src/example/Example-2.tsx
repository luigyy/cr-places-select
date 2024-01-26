import { useEffect } from "react";
import {
  ProvinceSelect,
  MunicipalitySelect,
  DistrictSelect,
  LocationMethods,
  Location,
} from "..";
import { ContextProvider } from "..";

const DEFAULT_PROVINCE = "Cartago";
const DEFAULT_MUNICIPALITY = "Turrialba";
const DEFAULT_DISTRICT = "Turrialba";

interface LocationType {
  province: string;
  municipality: string;
  district: string;
}

function LocationForm({ location }: { location: LocationType }) {
  const methods = LocationMethods();
  if (!methods) return <p>no context</p>;
  const { useSetLocationValues } = methods;

  //helper
  function sleep() {
    return new Promise<LocationType>((resolve) => {
      return setTimeout(() => resolve(location), 400);
    });
  }
  //

  //
  useEffect(() => {
    async function getDataAndSetDefault() {
      //fetch data
      const myApiLocation = await sleep();
      useSetLocationValues({ ...myApiLocation });
    }
    getDataAndSetDefault();
  }, []);
  return (
    <>
      <ProvinceSelect />
      <MunicipalitySelect />
      <DistrictSelect />
    </>
  );
}

function Example() {
  const { provincia, canton, distrito } = Location();
  return (
    <>
      <LocationForm
        location={{
          province: DEFAULT_PROVINCE,
          municipality: DEFAULT_MUNICIPALITY,
          district: DEFAULT_DISTRICT,
        }}
      />
      {provincia} {canton} {distrito}
    </>
  );
}

export default () => (
  <ContextProvider>
    <Example />
  </ContextProvider>
);
