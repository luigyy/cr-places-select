import { useStateContext } from "../context/ContextProvider";

export default function Location() {
  const methods = useStateContext();
  if (!methods) return { provincia: null, canton: null, distrito: null };

  const { provincia, canton, distrito } = methods.location;

  return { provincia, canton, distrito };
}
