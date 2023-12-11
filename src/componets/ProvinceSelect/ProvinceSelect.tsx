import { PROVINCIAS } from "../../data";
import {
  ContextProvider,
  useStateContext,
} from "../../context/ContextProvider";

const ProvinciasSelect = () => {
  const methods = useStateContext();
  if (!methods) return <div>no context</div>;

  const { handleProvince } = methods;
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">Provincias</label>
      <select
        onChange={(e) => handleProvince(e.target.value)}
        className="p-2 bg-transparent rounded text-sm border border-zinc-200/70 shadow-sm"
      >
        {Object.keys(PROVINCIAS).map((key) => (
          <option key={key} value={key}>
            {PROVINCIAS[key as keyof typeof PROVINCIAS].nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProvinciasSelect;
