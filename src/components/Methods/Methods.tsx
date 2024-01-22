import { useStateContext } from "../context/ContextProvider";

export default function Methods() {
  const methods = useStateContext();
  if (!methods) return null;

  //
  const { useSetLocationValues } = methods;

  return { useSetLocationValues };
}
