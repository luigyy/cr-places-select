import {
  DistrictSelect,
  MunicipalitySelect,
  ProvinceSelect,
  ContextProvider,
  Location,
} from "./index";

function App() {
  const { provincia, canton, distrito } = Location();
  return (
    <>
      <ProvinceSelect />
      <MunicipalitySelect />
      <DistrictSelect />

      <p className="border-2 h-10 border-red-500 w-96">
        {provincia} {canton} {distrito}
      </p>
    </>
  );
}
export default App;
