import PageBreadcrumb from "@/shared/ui/pagebreadcrumb/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";
import DefaultModal from "./DefaultModal";
import VerticallyCenteredModal from "./VerticallyCenteredModal";
import FormInModal from "./FormInModal";
import FullScreenModal from "./FullScreenModal";
import ModalBasedAlerts from "./ModalBasedAlerts";

export const metadata: Metadata = {
  title: "Next.js Modals | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Modals page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function Modals() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Modals" />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-6">
        <DefaultModal />
        <VerticallyCenteredModal />
        <FormInModal />
        <FullScreenModal />
        <ModalBasedAlerts />
      </div>
    </div>
  );
}
