
import { Button } from "@mui/material"
import React from "react"

type FormButtonProps = {
  type: "submit",
  label: string
}
export const FormButton:React.FC<FormButtonProps> = ({type, label})=>{
  return(
    <>
    <Button type={type} variant="contained" fullWidth >
      {label}
    </Button>
    </>
  )
}