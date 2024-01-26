# react-select-costarica-location

react-select-costarica-location is a collection of 3 select components to be able to select places in Costa Rica.

![ezgif com-gif-maker](https://github.com/luigyy/cr-places-select/assets/108197820/3d32e9ed-7984-4317-b720-383d9455f7ed)

## Installation

use npm to install the package

```bash
npm i react-select-costarica-location
```

## Usage

In your form component, import the select components as well as the location state:

```tsx
import {
  DistrictSelect,
  MunicipalitySelect,
  ProvinceSelect,
  Location,
} from "react-select-costarica-location";

// example with tailwindcss
const ContainerClassName = "flex flex-col w-96";
const LabelClassName = "text-sm font-medium";
const SelectInputClassName =
  "p-2 bg-transparent rounded text-sm border border-zinc-200/70 shadow-sm";

function LocationForm() {
  const { provincia, canton, distrito } = Location();

  //do something with it
  console.log(provincia, canton, distrito);

  return (
    <div>
      <ProvinceSelect
        ContainerClassName={ContainerClassName}
        LabelClassName={LabelClassName}
        SelectInputClassName={SelectInputClassName}
      />
      <MunicipalitySelect
        ContainerClassName={ContainerClassName}
        LabelClassName={LabelClassName}
        SelectInputClassName={SelectInputClassName}
      />
      <DistrictSelect
        ContainerClassName={ContainerClassName}
        LabelClassName={LabelClassName}
        SelectInputClassName={SelectInputClassName}
      />
    </div>
  );
}
```

:warning: Do not forget to wrap your form with the Context provider

```tsx
import { ContextProvider as LocationContextProvider } from "react-select-costarica-location";

function App() {
  return (
    <LocationContextProvider>
      <LocationForm />
    </LocationContextProvider>
  );
}
export default App;
```

## Setting default values

to reset the form to a certain state, use the useSetLocationValues function

```tsx
//get your data
const DEFAULT_PROVINCE = "Cartago";
const DEFAULT_MUNICIPALITY = "Turrialba";
const DEFAULT_DISTRICT = "Tuis";

function Example() {
  const methods = LocationMethods();
  if (!methods) return <p>no context</p>;

  const { useSetLocationValues } = methods;

  //reset form
  useEffect(() => {
    useSetLocationValues({
      province: DEFAULT_PROVINCE,
      municipality: DEFAULT_MUNICIPALITY,
      district: DEFAULT_DISTRICT,
    });
  }, []);

  return (
    <>
      <ProvinceSelect />
      <MunicipalitySelect />
      <DistrictSelect />
    </>
  );
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
