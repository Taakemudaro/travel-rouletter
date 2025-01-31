import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { homeRoutes } from "./HomeRoutes";
import { BasicLayout } from "../components/templates/BasicLayout";
import { Top } from "../components/pages/Top";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      {homeRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <BasicLayout title={route.title}>{route.children}</BasicLayout>
          }
        />
      ))}
    </Routes>
  );
});
