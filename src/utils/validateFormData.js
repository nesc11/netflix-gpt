const validateFormData = (data) => {
	let { fullname, email, password } = data;
	const isFullnameValid =
		fullname !== undefined &&
		/^(?!\s)[a-zA-Z0-9\s_-]{8,50}(?<!\s)$/.test(fullname);
	const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
		email,
	);
	const isPasswordValid =
		password !== undefined && /^[a-zA-Z0-9_-]{8,20}$/.test(password);

	return {
		isFullnameValid,
		isEmailValid,
		isPasswordValid,
	};
};

export { validateFormData };
