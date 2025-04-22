import { Container, Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await axios.post(
				"http://localhost:8080/api/login",
				{ email, password },
				{ withCredentials: true }
			);
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

				<TextField
					label="メールアドレス"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					fullWidth
				/>

				<TextField
					label="パスワード"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					fullWidth
				/>

				<Button type="submit" variant="contained" fullWidth>
					ログイン
				</Button>

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
