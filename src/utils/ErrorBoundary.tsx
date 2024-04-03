import React from "react";

class ErrorBoundary extends React.Component<{ children: JSX.Element }, { hasError: boolean }> {
	constructor(props: { children: JSX.Element; } | Readonly<{ children: JSX.Element; }>) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: unknown, errorInfo: unknown): void {
		console.error({ error, errorInfo });
	}

	render() {
		// eslint-disable-next-line react/destructuring-assignment
		if (this.state.hasError) {
			return (
				<div>
					<h2>Oops, there is an error!</h2>
					<button type='button' onClick={() => this.setState({ hasError: false })}>
						Click me to Try again
					</button>
				</div>
			);
		}

		// eslint-disable-next-line react/destructuring-assignment
		return this.props.children;
	}
}

export default ErrorBoundary;
