import { FC, memo } from "react";
import { RouletteOptionObject } from "../molecules/RouletteOptionObject";
import { rouletteOptionData } from "../../assets/data/rouletteOptionData";
import styled from "styled-components";

/**
 * オプションルーレットの設定ページを表示するコンポネント
 *
 * @returns オプションルーレット設定ページUIのJSX要素
 */
export const RouletteSetting: FC = memo(() => {
  return (
    <div>
      <div>
        <SDescription>
          ルーレットに4種類のオプションを設定できるよ〜〜〜〜
        </SDescription>
        <SDescription>
          オプションを使用してルーレットをまわしたい場合は、下記のプルダウンをONにしてね!!
        </SDescription>
      </div>
      <div>
        {rouletteOptionData.map((option) => (
          <RouletteOptionObject
            id={option.id}
            name={option.name}
            htmlFor={option.htmlFor}
            children={option.children}
          />
        ))}
      </div>
    </div>
  );
});

const SDescription = styled.p`
  text-align: left;
  line-height: 1;
`;
