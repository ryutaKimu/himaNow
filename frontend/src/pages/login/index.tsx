import { Container, Box, Typography} from "@mui/material";
import { useState } from "react";
import { InputText } from "../../components/Input/InputText";
import { FormButton } from "../../components/button/FormButton";
import { login } from "../../api/auth";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await login({
				email: email,
				password: password
			})
			//あとで削除
			setMessage("ログインに成功しました");
		} catch (err) {
			setMessage("ログイン失敗しました");
			console.error(err);
		}
	};

	return (
		<Container maxWidth="xs">
			<Box
				component="form"
				onSubmit={handleLogin}
				sx={{ mt: 8, display: "flex", flexDirection: "column", gap: 2 }}
			>
				<Typography variant="h4" align="center" gutterBottom>
					ログイン
				</Typography>

				<InputText
					label="メールアドレス"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<InputText
					label="パスワード"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<FormButton type="submit" label="ログイン"/>

				{message && (
					<Typography color="error" align="center">
						{message}
					</Typography>
				)}
			</Box>
		</Container>
	);
};

export default LoginPage;
