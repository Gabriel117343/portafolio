"use client";

import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}
export const ErrorWrapper = ({ children }: WrapperProps) => {
  return <>{children}</>;
};
