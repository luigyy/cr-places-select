import { ContextProvider } from "./context/ContextProvider";

function WithContext(Component: () => JSX.Element) {
  return function WithContext() {
    return (
      <ContextProvider>
        <Component />
      </ContextProvider>
    );
  };
}

export default WithContext;
