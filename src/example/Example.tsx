import {
  ProvinceSelect,
  MunicipalitySelect,
  DistrictSelect,
  LocationMethods,
} from "..";
import { ContextProvider } from "..";

const DEFAULT_PROVINCE = "Cartago";
const DEFAULT_MUNICIPALITY = "Turrialba";
const DEFAULT_DISTRICT = "Turrialba";

function Example() {
  const methods = LocationMethods();
  if (!methods) return <p>no context</p>;

  const { useSetLocationValues } = methods;

  useSetLocationValues({
    province: DEFAULT_PROVINCE,
    municipality: "",
    district: "",
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
