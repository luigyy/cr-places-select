import { useState } from "react";
import { PROVINCIAS } from "./data";

const ProvinciasSelect = ({
  onChangeFn,
}: {
  onChangeFn: (selectedProvince: string) => void;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">Provincias</label>
      <select
        onChange={(e) => onChangeFn(e.target.value)}
        className="p-2 bg-transparent rounded text-sm border border-zinc-200/70 shadow-sm"
      >
        {Object.keys(PROVINCIAS).map((key) => (
          <option value={key}>
            {PROVINCIAS[key as keyof typeof PROVINCIAS].nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

const CantonesSelect = ({
  cantones,
  onChangeFn,
  selected,
}: {
  cantones: Record<
    string,
    { nombre: string; distritos: Record<string, string> }
  >;

  onChangeFn: (cantonSelected: string) => void;
  selected: string;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">Cantones</label>
      <select
        onChange={(e) => onChangeFn(e.target.value)}
        className="p-2 bg-transparent rounded border text-sm border-zinc-200/70 shadow-sm"
        value={selected}
      >
        {Object.keys(cantones).map((cantonKey) => (
          <option value={cantonKey} key={cantonKey}>
            {cantonKey} {cantones[cantonKey as keyof typeof cantones].nombre}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

const DistritosSelect = ({
  distritos,
  onChangeFn,
  selected,
}: {
  distritos: Record<string, string>;
  onChangeFn: (distrito: string) => void;
  selected: string;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">Distritos</label>
      <select
        onChange={(e) => onChangeFn(e.target.value)}
        className="p-2 bg-transparent rounded border text-sm border-zinc-200/70 shadow-sm"
        value={selected}
      >
        {Object.keys(distritos).map((key) => (
          <option value={key}>
            {key} {distritos[key as keyof typeof distritos]}
          </option>
        ))}
      </select>
    </div>
  );
};

function App() {
  //change handlers
  const [selectedProvince, setSelectedProvincia] =
    useState<keyof typeof PROVINCIAS>("1");
  const [selectedCanton, setSelectedCanton] = useState("01");
  const [selectedDistrito, setSelectedDistrito] = useState("01");

  //object containing dropdown options
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
  }

  function handleCanton(selected: string) {
    setDistritos(cantones[selected].distritos);

    //update selected
    setSelectedCanton(selected);
    setSelectedDistrito("01");

    //update results
  }

  function handleDistrito(selected: string) {
    setSelectedDistrito(selected);

    //update results
  }

  return (
    <>
      <div className="w-1/3 mx-auto py-10 translate-y-1/2 space-y-5">
        <ProvinciasSelect onChangeFn={handleProvince} />
        <CantonesSelect
          onChangeFn={handleCanton}
          cantones={cantones}
          selected={selectedCanton}
        />
        <DistritosSelect
          selected={selectedDistrito}
          onChangeFn={handleDistrito}
          distritos={distritos}
        />
      </div>
      <p>
        {location.provincia} / {location.canton} / {location.distrito}
        {/* {distritos["01"]} */}
      </p>
    </>
  );
}

export default App;
