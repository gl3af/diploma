"use client";

import React, { PropsWithChildren } from "react";
import NextAdapterApp from "next-query-params/app";
import { QueryParamProvider } from "use-query-params";

export function QueryParamsProvider({ children }: PropsWithChildren<unknown>) {
  return <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>;
}
