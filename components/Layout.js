import { AppShell } from "@mantine/core";
import style from "@styles/Layout.module.css";
import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <AppShell className={style.layout} header={<Header />}>
        {children}
      </AppShell>
    </>
  );
}
