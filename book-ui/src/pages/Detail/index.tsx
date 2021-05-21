import React from "react";
import { Back } from "../../components/Details/Actions/Back";
import { Delete } from "../../components/Details/Actions/Delete";
import { Edit } from "../../components/Details/Actions/Edit";
import { CoverBook } from "../../components/Details/Cover";
import { Description } from "../../components/Details/Description";

export function Detail() {
  return (
    <>
      <CoverBook />
      <Description />
      <Back />
      <Edit />
      <Delete />
    </>
  );
}
