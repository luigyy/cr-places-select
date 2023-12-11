import {
  ContextProvider,
  useStateContext,
} from "../../context/ContextProvider";

const MunicipalitySelect = () => {
  const methods = useStateContext();
  if (!methods) return <div>no context</div>;
  const { cantones, handleCanton, selectedCanton } = methods;
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">Cantones</label>
      <select
        onChange={(e) => handleCanton(e.target.value)}
        className="p-2 bg-transparent rounded border text-sm border-zinc-200/70 shadow-sm"
        value={selectedCanton}
      >
        {Object.keys(methods.cantones).map((cantonKey) => (
          <option value={cantonKey} key={cantonKey}>
            {cantonKey} {cantones[cantonKey as keyof typeof cantones].nombre}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MunicipalitySelect;
