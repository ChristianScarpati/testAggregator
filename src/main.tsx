import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme.ts";
import "./index.css";
import { ErrorBoundary } from "./utils/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundary>
			<ChakraProvider theme={theme} resetCSS={false}>
				<App />
			</ChakraProvider>
		</ErrorBoundary>
	</React.StrictMode>
);
