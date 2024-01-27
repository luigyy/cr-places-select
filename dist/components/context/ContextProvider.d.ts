import { type ReactNode } from "react";
export interface LocationType {
    province: string;
    municipality: string;
    district: string;
}
export declare const ContextProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useStateContext: () => {
    handleProvince: (selected: string) => void;
    handleCanton: (selected: string) => void;
    handleDistrito: (selected: string) => void;
    selectedProvince: string;
    selectedCanton: string;
    selectedDistrito: string;
    cantones: Record<string, {
        nombre: string;
        distritos: Record<string, string>;
    }>;
    distritos: Record<string, string>;
    location: {
        provincia: string;
        canton: string;
        distrito: string;
    };
    useSetLocationValues: ({ province }: LocationType) => void;
} | null;
