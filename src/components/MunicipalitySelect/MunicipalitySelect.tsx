import { useStateContext } from "../context/ContextProvider";

const MunicipalitySelect = (props: {
  ContainerClassName?: string;
  LabelClassName?: string;
  SelectInputClassName?: string;
  LabelContent?: string;
}) => {
  const methods = useStateContext();
  if (!methods) return <div>no context</div>;
  const { cantones, handleCanton, selectedCanton } = methods;
  return (
    <div className={props.ContainerClassName}>
      <label className={props.LabelClassName}>
        {props.LabelContent ?? "Cantones"}
      </label>
      <select
        onChange={(e) => handleCanton(e.target.value)}
        className={props.SelectInputClassName}
        value={selectedCanton}
      >
        {Object.keys(methods.cantones).map((cantonKey) => (
          <option value={cantonKey} key={cantonKey}>
            {cantones[cantonKey as keyof typeof cantones].nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MunicipalitySelect;
