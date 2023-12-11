import { type ReactNode, createContext, useContext, useState } from "react";
import { PROVINCIAS } from "../data";

const StateContext = createContext<{
  handleProvince: (selected: string) => void;
  handleCanton: (selected: string) => void;
  handleDistrito: (selected: string) => void;
  //
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
} | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProvince, setSelectedProvincia] =
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
  return (
    <StateContext.Provider
      value={{
        handleProvince,
        handleCanton,
        handleDistrito,
        cantones,
        distritos,
        selectedCanton,
        selectedDistrito,
        location,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
