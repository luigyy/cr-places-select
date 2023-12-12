export { default as ProvinceSelect } from "./ProvinceSelect";
export { default as MunicipalitySelect } from "./MunicipalitySelect";
export { default as DistrictSelect } from "./DistrictSelect";
export { ContextProvider } from "./context/ContextProvider";
export { default as Location } from "./Location";

export default interface SelectComponentProps {
  ContainerClassName?: string;
  LabelClassName?: string;
  SelectInputClassName?: string;
}
