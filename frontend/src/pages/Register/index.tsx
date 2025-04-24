import { Box, Container, Typography } from "@mui/material";
import { FormButton } from "../../components/button/FormButton";
import { useState } from "react";
import { InputText } from "../../components/Input/InputText";
import { register } from "../../api/auth";

export const Register = () => {
	const [userName, setUserName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
		try {
			const res = await register({
				name: userName,
				email: email,
				password: password,
			});
			console.log("登録成功", res);
		} catch (error) {
			console.error("登録失敗", error);
		}
	};

  
	return (
		<Container maxWidth="xs">
			<Typography variant="h3" align="center" sx={{ mt: 20, mb: 4 }}>
				新規登録
			</Typography>
			<Box
				component="form"
        onSubmit={handleRegister}
				sx={{
					height: "25vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					p: 5,
					borderRadius: 2,
					boxShadow: 3,
					backgroundColor: "#fff",
				}}
			>
				<InputText
					label="ユーザーネーム"
					type="name"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					sx={{ mb: 2 }}
				/>
				<InputText
					label="メールアドレス"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					sx={{ mb: 2 }}
				/>
				<InputText
					label="パスワード"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					sx={{ mb: 3 }}
				/>
				<FormButton type="submit" label="登録"/>
			</Box>
		</Container>
	);
};
