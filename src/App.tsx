import { useEffect, useState } from "react";
import { PROVINCIAS } from "./data";

const ProvinciasSelect = ({
  onChangeFn,
}: {
  onChangeFn: React.Dispatch<
    React.SetStateAction<"1" | "2" | "3" | "4" | "5" | "6" | "7">
  >;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">Cantones</label>
      <select
        onChange={(e) => onChangeFn(e.target.value as keyof typeof PROVINCIAS)}
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
}: {
  cantones: Record<
    string,
    { nombre: string; distritos: Record<string, string> }
  >;

  onChangeFn: (cantonSelected: string) => void;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">Cantones</label>
      <select
        onChange={(e) => onChangeFn(e.target.value)}
        className="p-2 bg-transparent rounded border text-sm border-zinc-200/70 shadow-sm"
      >
        {Object.keys(cantones).map((cantonKey) => (
          <option value={cantonKey} key={cantonKey}>
            {cantones[cantonKey as keyof typeof cantones].nombre}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

const DistritosSelect = ({
  distritos,
}: {
  distritos: Record<string, string>;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">Cantones</label>
      <select className="p-2 bg-transparent rounded border text-sm border-zinc-200/70 shadow-sm">
        {Object.keys(distritos).map((key) => (
          <option>{distritos[key as keyof typeof distritos]}</option>
        ))}
      </select>
    </div>
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
      <div className="w-1/3 mx-auto py-10">
        <ProvinciasSelect onChangeFn={setSelectedProvince} />
        <CantonesSelect onChangeFn={setSelectedCanton} cantones={cantones} />
        <DistritosSelect distritos={distritos} />
      </div>
    </>
  );
}

export default App;
