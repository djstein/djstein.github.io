import React from "react"
import { Footer } from "./../components/Footer"
import { BaseGrid } from "./../../ui/BaseGrid"

export const Base = ({ children }) => (
  <BaseGrid>
    {children}
    <Footer />
  </BaseGrid>
)
