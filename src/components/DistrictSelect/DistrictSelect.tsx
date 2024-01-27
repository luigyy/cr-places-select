import { useStateContext } from "../context/ContextProvider";
//
//
const DistrictSelect = (props: {
  ContainerClassName?: string;
  LabelClassName?: string;
  SelectInputClassName?: string;
  LabelContent?: string;
}) => {
  const methods = useStateContext();
  if (!methods) return <div>no context</div>;
  const { selectedDistrito, distritos, handleDistrito } = methods;
  return (
    <div className={props.ContainerClassName}>
      <label className={props.LabelClassName}>
        {props.LabelContent ?? "Distritos"}
      </label>
      <select
        onChange={(e) => handleDistrito(e.target.value)}
        className={props.SelectInputClassName}
        value={selectedDistrito}
      >
        {Object.keys(distritos).map((key) => (
          <option key={key} value={key}>
            {distritos[key as keyof typeof distritos]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DistrictSelect;
