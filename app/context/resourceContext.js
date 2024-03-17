"use client";

import { createContext, useState, useEffect } from "react";
import { coursesAvailable } from "../data";

export const ResourceContext = createContext();

export const ResourceContextProvider = ({ children }) => {
  const [courses, setCourses] = useState(coursesAvailable);

  return (
    <ResourceContext.Provider value={{courses}}>
      {children}
    </ResourceContext.Provider>
  );
};
