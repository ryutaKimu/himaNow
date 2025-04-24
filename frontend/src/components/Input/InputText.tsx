import { SxProps, TextField } from "@mui/material";
import React from "react";

type InputProps = {
	label: string,
	type: string,
	value: string,
  sx?: SxProps
	onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputText: React.FC<InputProps> = ({
	label,
	type,
	value,
  sx,
	onChange,
}) => {
	return (
		<>
			<TextField
				label={label}
				type={type}
				value={value}
				onChange={onChange}
				required
				fullWidth
        sx={sx}
			/>
		</>
	);
};
