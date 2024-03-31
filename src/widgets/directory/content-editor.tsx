"use client";

import React, { useState } from "react";
import { Loader } from "@/shared/ui";

export const ContentEditor = () => {
  const [value, setValue] = useState("");

  const log = () => console.log(value);

  const [loading, setLoading] = useState(true);

  return (
    <>
      <button onClick={log}>Log editor content</button>
      {loading && <Loader size={56} />}
    </>
  );
};
