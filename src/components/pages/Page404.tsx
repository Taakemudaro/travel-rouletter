import { FC, memo } from "react";
import { Footer } from "../organisms/Footer";

/**
 * ページが見つからない場合に表示するコンポネント
 *
 * @returns 404エラーページUIのJSX要素
 */
export const Page404: FC = memo(() => {
  return (
    <>
      <p>お探しのページが見つかりません。</p>
    </>
  );
});
