import { Box, Container, TextField, Typography } from "@mui/material";
import { FormButton } from "../../components/button/FormButton";

export const Register = () => {
	return (
		<Container maxWidth="xs">
			<Typography variant="h3" align="center" sx={{ mt: 20, mb: 4 }}>
				新規登録
			</Typography>
			<Box
				component="form"
				sx={{
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<TextField label="ユーザーネーム" />
				<FormButton type="submit" label="登録" />
			</Box>
		</Container>
	);
};
