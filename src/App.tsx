import { useEffect, useState } from "react";
import { PROVINCIAS } from "./data";

const ProvinciasComponent = ({
  onChangeFn,
}: {
  onChangeFn: React.Dispatch<
    React.SetStateAction<"1" | "2" | "3" | "4" | "5" | "6" | "7">
  >;
}) => {
  return (
    <select
      onChange={(e) => onChangeFn(e.target.value as keyof typeof PROVINCIAS)}
    >
      {Object.keys(PROVINCIAS).map((key) => (
        <option value={key}>
          {key} {PROVINCIAS[key as keyof typeof PROVINCIAS].nombre}
        </option>
      ))}
    </select>
  );
};

const CantonesSelect = ({
  cantones,
  onChangeFn,
}: {
  cantones: Record<
    string,
    { nombre: string; distritos: Record<string, string> }
  >;

  onChangeFn: (cantonSelected: string) => void;
}) => {
  return (
    <select onChange={(e) => onChangeFn(e.target.value)}>
      {Object.keys(cantones).map((cantonKey) => (
        <option value={cantonKey} key={cantonKey}>
          {cantonKey} {cantones[cantonKey as keyof typeof cantones].nombre}{" "}
        </option>
      ))}
    </select>
  );
};

const DistritosSelect = ({
  distritos,
}: {
  distritos: Record<string, string>;
}) => {
  return (
    <select>
      {Object.keys(distritos).map((key) => (
        <option>
          {key} {distritos[key as keyof typeof distritos]}
        </option>
      ))}
    </select>
  );
};

function App() {
  const [selectedProvince, setSelectedProvince] =
    useState<keyof typeof PROVINCIAS>("1");
  const [selectedCanton, setSelectedCanton] = useState("01");

  if (!selectedProvince) return;
  if (!selectedCanton) return;

  const [cantones, setCantones] = useState<
    Record<string, { nombre: string; distritos: Record<string, string> }>
  >(PROVINCIAS["1"].cantones);

  const [distritos, setDistritos] = useState<Record<string, string>>(
    PROVINCIAS[selectedProvince].cantones["01"].distritos
  );

  useEffect(() => {
    setCantones(PROVINCIAS[selectedProvince].cantones);
  }, [selectedProvince]);
  //
  useEffect(() => {
    setDistritos(cantones[selectedCanton as keyof typeof cantones].distritos);
  }, [selectedCanton]);

  return (
    <>
      <ProvinciasComponent onChangeFn={setSelectedProvince} />
      <CantonesSelect onChangeFn={setSelectedCanton} cantones={cantones} />
      <DistritosSelect distritos={distritos} />
    </>
  );
}

export default App;
