const MunicipalitySelect = ({
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

export default MunicipalitySelect;
