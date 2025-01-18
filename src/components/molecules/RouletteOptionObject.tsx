import { FC, memo, useCallback } from "react";
import styled from "styled-components";
import { RouletteOption } from "../../types/rouletteOption";
import { useSelectedOption } from "../../hooks/useSelectedOption";
import { useSortOption } from "../../hooks/useSortOption";
import { options } from "../../hooks/useSortOption";

/**
 * オプションルーレットの設定切り替え(ON/OFF)を行うオブジェクトを表示するコンポネント
 *
 * @param {string} id オプションルーレットのid
 * @param {string} name オプションルーレット名
 * @param {string} htmlFor オプションルーレットidと連携
 * @param {ReactNode} children オプションルーレットの表示文字列
 * @returns オプションルーレットの設定切り替えUIのJSX要素
 */
export const RouletteOptionObject: FC<RouletteOption> = memo((props) => {
  const { id, name, htmlFor, children } = props;
  const { updateSelectedOptions } = useSelectedOption();
  const { sortOptions } = useSortOption();

  const handleOptionChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateSelectedOptions(id, e.target.value);
    },
    // ★ 本当に下記であっているか確認すること
    [updateSelectedOptions]
  );

  const checkSortOptions = sortOptions.find(
    (sortOption) => sortOption.id === id
  );
  const renderOptions = checkSortOptions ? checkSortOptions.options : options;

  return (
    <div>
      <SLabel htmlFor={htmlFor}>{children}</SLabel>
      <SSelect name={name} id={id} onChange={handleOptionChange}>
        {renderOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.children}
          </option>
        ))}
      </SSelect>
    </div>
  );
});

const SLabel = styled.label`
  display: inline-block;
  font-size: 23px;
  margin: 0 10px 20px 0;
`;

const SSelect = styled.select`
  font-size: 20px;
  padding: 0 12px;
  border-radius: 10px;
`;
