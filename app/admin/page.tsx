import dynamic from "next/dynamic";
import React from "react";
import simpleResetProvider from "ra-data-simple-rest";
import { isAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
const App = dynamic(() => import("./app"), { ssr: false });
const dtaProvider = simpleResetProvider("/api");
const AdminPage = async () => {
  if (!isAdmin()) {
    redirect("/");
  }
  return <App />;
};

export default AdminPage;
