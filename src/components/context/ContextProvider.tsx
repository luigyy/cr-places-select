import { type ReactNode, createContext, useContext, useState } from "react";
import { PROVINCIAS } from "../../data";

export interface LocationType {
  province: string;
  municipality: string;
  district: string;
}

//for province and canton since those objects kinda have the same shape
function getKeyByValue(
  object: Record<string, { nombre: string; cantones?: any; distritos?: any }>,
  value: string
) {
  return Object.keys(object).find((key) => object[key].nombre === value);
}

function getKeyByValueDistricts(object: Record<string, string>, value: string) {
  return Object.keys(object).find((key) => object[key] === value);
}

const StateContext = createContext<{
  handleProvince: (selected: string) => void;
  handleCanton: (selected: string) => void;
  handleDistrito: (selected: string) => void;
  //
  selectedProvince: string;
  selectedCanton: string;
  selectedDistrito: string;
  //
  cantones: Record<
    string,
    { nombre: string; distritos: Record<string, string> }
  >;
  distritos: Record<string, string>;
  //
  location: { provincia: string; canton: string; distrito: string };
  //
  useSetLocationValues: ({ province }: LocationType) => void;
} | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProvince, setSelectedProvince] =
    useState<keyof typeof PROVINCIAS>("1");
  const [selectedCanton, setSelectedCanton] = useState("01");
  const [selectedDistrito, setSelectedDistrito] = useState("01");

  // dropdown options
  const [cantones, setCantones] = useState<
    Record<string, { nombre: string; distritos: Record<string, string> }>
  >(PROVINCIAS["1"].cantones);

  const [distritos, setDistritos] = useState<Record<string, string>>(
    PROVINCIAS[selectedProvince].cantones["01"].distritos
  );

  //location object - contains the current selected location
  const [location, setLocation] = useState({
    provincia: PROVINCIAS[selectedProvince].nombre,
    canton: cantones[selectedCanton].nombre,
    distrito: distritos[selectedDistrito],
  });

  function handleProvince(selected: string) {
    setSelectedProvince(selected as keyof typeof PROVINCIAS);
    //update cantones and distritos
    setCantones(PROVINCIAS[selected as keyof typeof PROVINCIAS].cantones);
    setDistritos(
      PROVINCIAS[selected as keyof typeof PROVINCIAS].cantones["01"].distritos
    );

    //update selected
    setSelectedCanton("01");
    setSelectedDistrito("01");

    setLocation({
      provincia: PROVINCIAS[selected as keyof typeof PROVINCIAS].nombre,
      canton:
        PROVINCIAS[selected as keyof typeof PROVINCIAS].cantones["01"].nombre,
      distrito:
        PROVINCIAS[selected as keyof typeof PROVINCIAS].cantones["01"]
          .distritos["01"],
    });
  }

  function handleCanton(selected: string) {
    setDistritos(cantones[selected].distritos);

    //update selected
    setSelectedCanton(selected);
    setSelectedDistrito("01");

    //update results
    setLocation({
      ...location,
      canton: cantones[selected as keyof typeof cantones].nombre,
      distrito: cantones[selected].distritos["01"],
    });
  }

  function handleDistrito(selected: string) {
    setSelectedDistrito(selected);

    //update results
    setLocation({
      ...location,
      distrito: distritos[selected],
    });
  }

  function resetForm() {
    setSelectedProvince("1");

    setCantones(PROVINCIAS["1"].cantones);
    setSelectedCanton("01");

    setDistritos(PROVINCIAS["1"].cantones["01"].distritos);
    setSelectedDistrito("01");
  }

  function useSetLocationValues({
    province,
    municipality,
    district,
  }: LocationType) {
    //handle province
    const provinceKey = getKeyByValue(PROVINCIAS, province);
    if (!provinceKey) {
      resetForm();
      console.log("Wrong default values for province");
      return null;
    }
    setSelectedProvince(provinceKey as keyof typeof PROVINCIAS);

    //update municipalities
    const currentMunicipalities =
      PROVINCIAS[provinceKey as keyof typeof PROVINCIAS].cantones;
    setCantones(currentMunicipalities);

    //handle municipality
    const municipalityKey = getKeyByValue(currentMunicipalities, municipality);
    if (!municipalityKey) {
      resetForm();
      console.log("Wrong default values for municipality");
      return null;
    }
    setSelectedCanton(municipalityKey);

    //update districts
    const currentDistricts =
      currentMunicipalities[
        municipalityKey as keyof typeof currentMunicipalities
      ].distritos;
    setDistritos(currentDistricts);

    //handle district
    const districtKey = getKeyByValueDistricts(currentDistricts, district);
    if (!districtKey) {
      resetForm();
      console.log("Wrong default values for district");
      return null;
    }
    setSelectedDistrito(districtKey);
  }
  return (
    <StateContext.Provider
      value={{
        handleProvince,
        handleCanton,
        handleDistrito,
        cantones,
        distritos,
        selectedProvince,
        selectedCanton,
        selectedDistrito,
        location,
        useSetLocationValues,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
