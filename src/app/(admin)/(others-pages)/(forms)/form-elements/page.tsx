import PageBreadcrumb from "@/shared/ui/pagebreadcrumb/PageBreadCrumb";
import CheckboxComponents from "@/shared/form/form-elements/CheckboxComponents";
import DefaultInputs from "@/shared/form/form-elements/DefaultInputs";
import DropzoneComponent from "@/shared/form/form-elements/DropZone";
import FileInputExample from "@/shared/form/form-elements/FileInputExample";
import InputGroup from "@/shared/form/form-elements/InputGroup";
import InputStates from "@/shared/form/form-elements/InputStates";
import RadioButtons from "@/shared/form/form-elements/RadioButtons";
import SelectInputs from "@/shared/form/form-elements/SelectInputs";
import TextAreaInput from "@/shared/form/form-elements/TextAreaInput";
import ToggleSwitch from "@/shared/form/form-elements/ToggleSwitch";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function FormElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
          <SelectInputs />
          <TextAreaInput />
          <InputStates />
        </div>
        <div className="space-y-6">
          <InputGroup />
          <FileInputExample />
          <CheckboxComponents />
          <RadioButtons />
          <ToggleSwitch />
          <DropzoneComponent />
        </div>
      </div>
    </div>
  );
}
