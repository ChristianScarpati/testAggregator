export const fetchJsonData = (fileName: string) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			import(`../mock/${fileName}.json`)
				.then((data) => {
					resolve(data.default);
				})
				.catch((error) => {
					reject(error);
				});
		}, 1500);
	});
};
