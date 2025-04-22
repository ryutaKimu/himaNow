import { Button, } from "@mui/material";
import { Link } from "react-router-dom";

type ButtonProps = {
	to: string;
	label: string;
};

export const ButtonLink: React.FC<ButtonProps> = ({ to, label }) => {
	return (
		<>
			<Link to={to}>
				<Button variant="contained" size="large" sx={{ marginTop: "30%" }}>
					{label}
				</Button>
			</Link>
		</>
	);
};
