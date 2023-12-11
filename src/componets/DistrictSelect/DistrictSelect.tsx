import useHandlers from "../useHandler";

const DistrictSelect = () => {
  const { handleDistrito, distritos, selectedDistrito } = useHandlers();
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">Distritos</label>
      <select
        onChange={(e) => handleDistrito(e.target.value)}
        className="p-2 bg-transparent rounded border text-sm border-zinc-200/70 shadow-sm"
        value={selectedDistrito}
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

export default DistrictSelect;
