import { ReactNode } from "react";
import {
  DistrictSelect,
  MunicipalitySelect,
  ProvinceSelect,
} from "./componets";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <ProvinceSelect />

        <MunicipalitySelect />
      </ContextProvider>
      {/*  */}
      <DistrictSelect />
    </>
  );
}
export default App;
