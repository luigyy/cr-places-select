import { PROVINCIAS } from "../../data";
import { useStateContext } from "../context/ContextProvider";
import SelectComponentProps from "..";

const ProvinciasSelect = (props: SelectComponentProps) => {
  const methods = useStateContext();
  if (!methods) return <div>no context</div>;

  const { handleProvince } = methods;
  return (
    <div className={props.ContainerClassName}>
      <label className={props.LabelClassName}>Provincias</label>
      <select
        onChange={(e) => handleProvince(e.target.value)}
        className={props.SelectInputClassName}
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
