import { Box, Typography } from "@mui/material";
import top from "../../assets/top.png";
import { ButtonLink } from "../../components/button/ButtonLink";

const Home = () => {
	return (
		<>
			<img
				src={top}
				alt="トップ画像"
				style={{
					width: "100%",
					height: "600px",
					objectFit: "cover",
					display: "block",
					borderRadius: "8px",
					boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
					marginBottom: "24px",
				}}
			/>
			<Box
				sx={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
          justifyContent:"center",
          alignItems: "center"
				}}
			>
				<Typography variant="h2">誘いを楽に</Typography>
				<ButtonLink to="login" label="ログイン"/>
			</Box>
		</>
	);
};

export default Home;
