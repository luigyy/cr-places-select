import {
  ProvinceSelect,
  MunicipalitySelect,
  DistrictSelect,
  LocationMethods,
} from "..";
import { ContextProvider } from "..";

const DEFAULT_PROVINCE = "Cartago";
const DEFAULT_MUNICIPALITY = "Turrialba";
const DEFAULT_DISTRICT = "Tuis";

function Example() {
  const methods = LocationMethods();
  if (!methods) return <p>no context</p>;

  const { useSetLocationValues } = methods;

  useSetLocationValues({
    province: DEFAULT_PROVINCE,
    municipality: DEFAULT_MUNICIPALITY,
    district: DEFAULT_DISTRICT,
  });
  return (
    <>
      <ProvinceSelect />
      <MunicipalitySelect />
      <DistrictSelect />
    </>
  );
}

export default () => (
  <ContextProvider>
    <Example />
  </ContextProvider>
);
