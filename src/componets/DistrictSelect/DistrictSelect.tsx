import {
  ContextProvider,
  useStateContext,
} from "../../context/ContextProvider";

const DistrictSelect = () => {
  const methods = useStateContext();
  if (!methods) return <div>no context</div>;
  const { selectedDistrito, distritos, handleDistrito } = methods;
  console.log(methods);
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">Distritos</label>
      <select
        onChange={(e) => handleDistrito(e.target.value)}
        className="p-2 bg-transparent rounded border text-sm border-zinc-200/70 shadow-sm"
        value={selectedDistrito}
      >
        {Object.keys(distritos).map((key) => (
          <option key={key} value={key}>
            {key} {distritos[key as keyof typeof distritos]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DistrictSelect;
