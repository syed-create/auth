export const ValidatePassword = (_, value) => {
	if (!value) {
		return Promise.reject(new Error("Please enter password!"));
	}
	if (value && value.length < 8) {
		return Promise.reject(
			new Error("Please enter password length of minimum 8 characters!")
		);
	}
	return Promise.resolve();
};

export const ValidateEmail = (_, value) => {
	const newMailFormatRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!value) {
		return Promise.reject(new Error("Please enter email!"));
	}
	if (String(value).toLowerCase().match(newMailFormatRegex)) {
		return Promise.resolve(true);
	}
	return Promise.reject(false);
};
