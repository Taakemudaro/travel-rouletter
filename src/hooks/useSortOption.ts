import { useSelectedOption } from "./useSelectedOption";

type Option = {
  value: string;
  children: string;
};

export const options: Option[] = [
  { value: "off", children: "OFF" },
  { value: "on", children: "ON" },
];

/**
 * オプションルーレットの選択フラグに応じて、`select`タグのON/OFFオプション順番を変更するカスタムフック
 *
 * @returns {object} フックが返す値
 * @returns {Array<{ id: string, options: Option[] }>} return.sortOptions 選択されたオプションに基づいて順番を反転するオプションリスト
 */
export const useSortOption = () => {
  const { selectedOptions } = useSelectedOption();

  const getOptionKeys = Object.keys(selectedOptions);
  const sortOptions = getOptionKeys.map((key) => {
    const value = selectedOptions[key];
    return {
      id: key,
      options: value === "on" ? [...options].reverse() : options,
    };
  });
  return { sortOptions };
};
