import { useState, useEffect, useRef } from "react";

interface Data {}

interface Error {}

export interface FetchData<T> {
	data: T;
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	error: Error | undefined;
	refetch: () => void;
}

const useFetch = <T extends unknown>(url: string, reqOpt?: RequestInit): FetchData<T> => {
	const [data, setData] = useState<Data>();
	const [error, setError] = useState<Error>();
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const effectRan = useRef(false);

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const res = await fetch(url, reqOpt && reqOpt);
			const data = await res.json();

			if (res.status === 200) {
				setIsSuccess(true);
				setData(data);
				setError(undefined);
			} else {
				setIsSuccess(false);
				setError(data);
				setData(undefined);
			}
		} catch (e) {
			setIsSuccess(false);
			setData(undefined);
			if (e instanceof Error) {
				setError(e);
			}
		}

		setIsLoading(false);
	};

	useEffect(() => {
		!effectRan.current && fetchData();

		return () => {
			effectRan.current = true;
		};
	}, []);

	const refetch = () => fetchData();

	return { data: data as T, error, isLoading, isError: !isSuccess, isSuccess, refetch };
};

export default useFetch;
