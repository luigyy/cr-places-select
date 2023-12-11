const DistrictSelect = ({
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

export default DistrictSelect;
