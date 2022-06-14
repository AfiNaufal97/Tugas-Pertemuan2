import React from "react";
import Button from "./Button";

export default function LIstItem(props) {
  return (
    <div className="bg-blue-100 shadow-lg max-w-3xl mx-auto rounded-lg my-[10px] p-2">
      <p className="text-[18px] font-semibold">{props.name}</p>
      <div className="flex justify-end">
        <Button text="Edit" backgroundColor="#FFC54D" onClick={props.update}/>
        <Button text="Delete" backgroundColor="#F94C66" onClick={props.delete}/>
      </div>
    </div>
  );
}
