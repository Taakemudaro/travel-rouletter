import { FC, memo } from "react";
import { Footer } from "../organisms/Footer";

export const Page404: FC = memo(() => {
  return (
    <>
      <p>お探しのページが見つかりません。</p>
      <Footer />
    </>
  );
});
