import { render, screen, fireEvent } from "@testing-library/react";
import { ValidateEmail, ValidatePassword } from "../../shared/utils/validation";

import LoginForm from "../components/LoginForm";

const mockedOnFormSubmit = jest.fn();

describe("Email input validations", () => {
	it("Login email field should be in the form", () => {
		const component = render(
			<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />
		);
		const inputEmailElement =
			component.getByPlaceholderText(/Enter email/i);
		expect(inputEmailElement).toBeInTheDocument();
	});
	it("input type email", async () => {
		render(<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />);
		const inputEmailElement = screen.getByPlaceholderText(/Enter email/i);
		expect(inputEmailElement).toBeInTheDocument();
	});
	it("should be able to type in email input", async () => {
		render(<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />);
		const inputEmailElement = screen.getByPlaceholderText(/Enter email/i);
		fireEvent.change(inputEmailElement, {
			target: { value: "syeddanish" },
		});
		expect(inputEmailElement.value).toBe("syeddanish");
	});

	it("Show error below email input", async () => {
		render(<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />);
		const emailInputNode = screen.getByLabelText(/Email/i);
		expect(emailInputNode.value).toBe("");
		fireEvent.focus(emailInputNode);

		fireEvent.change(emailInputNode, {
			target: { value: "syeddanish@" },
		});
		expect(emailInputNode.value).toBe("syeddanish@");
		fireEvent.change(emailInputNode, {
			target: { value: "" },
		});
		fireEvent.blur(emailInputNode);
		screen.debug();
	});

	it("should return undefined if email is valid", async () => {
		const text = "bari@gmail.com";
		expect(ValidateEmail("", text)).resolves.toBeUndefined();
	});

	it("should throw an error of enter valid email", async () => {
		const text = "bari@gmai";

		expect(ValidateEmail("", text)).rejects.toMatch(
			"Please enter a valid email!"
		);
	});

	it("should be able to submit form", () => {
		const { getByRole } = render(
			<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />
		);
		const buttonNode = getByRole("button");
		expect(buttonNode).toBeInTheDocument();
		fireEvent.submit(buttonNode);
		expect(mockedOnFormSubmit).toHaveBeenCalledTimes(1);
	});
});

// describe("Password input validations", () => {
// 	it("input type password", async () => {
// 		render(<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />);
// 		const inputPasswordElement =
// 			screen.getByPlaceholderText(/Enter password/i);

// 		expect(inputPasswordElement).toBeInTheDocument();
// 	});

// 	it("should be able to type in password input", async () => {
// 		render(<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />);
// 		const inputEmailElement =
// 			screen.getByPlaceholderText(/Enter password/i);
// 		fireEvent.change(inputEmailElement, {
// 			target: { value: "syeddanish" },
// 		});
// 		expect(inputEmailElement.value).toBe("syeddanish");
// 	});

// 	it("should return undefined if password is valid", async () => {
// 		const password = "asdfsadfasdfasdf";
// 		expect(ValidatePassword("", password)).resolves.toBeUndefined();
// 	});

// 	it("should throw an error of 'enter password'", async () => {
// 		const password = "";

// 		expect(ValidatePassword("", password)).rejects.toMatch(
// 			"Please enter password!"
// 		);
// 	});

// 	it("should throw an error of enter password of length minimum 8 characters", async () => {
// 		const password = "asdfa";
// 		expect(ValidatePassword("", password)).rejects.toMatch(
// 			"Please enter password length of minimum 8 characters!"
// 		);
// 	});
// });

// describe("Login form validation", () => {});
