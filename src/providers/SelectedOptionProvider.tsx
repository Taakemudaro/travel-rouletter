import { createContext, memo, ReactNode, useCallback, useState } from "react";

export type SelectedOptionContextType = {
  // Optionごとのidと状態
  selectedOptions: { [id: string]: string };
  updateSelectedOptions: (id: string, value: string) => void;
};

export const SelectedOptionContext = createContext<SelectedOptionContextType>({
  selectedOptions: {},
  updateSelectedOptions: () => {},
});

export const SelectedOptionProvider = memo((props: { children: ReactNode }) => {
  const { children } = props;
  const [selectedOptions, setSelectedOptions] = useState({
    city: "off",
    theme: "off",
    duration: "off",
    cost: "off",
  });

  const updateSelectedOptions = useCallback(
    (id: string, value: string) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [id]: value,
      }));
    },
    [selectedOptions]
  );

  return (
    <SelectedOptionContext.Provider
      value={{ selectedOptions, updateSelectedOptions }}
    >
      {children}
    </SelectedOptionContext.Provider>
  );
});
