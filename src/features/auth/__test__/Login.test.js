import { render, screen, fireEvent } from "@testing-library/react";
import { ValidateEmail } from "../../shared/utils/validation";

import LoginForm from "../components/LoginForm";

const mockedOnFormSubmit = jest.fn();
describe("Login form validation", () => {
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
			render(
				<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />
			);
			const inputEmailElement =
				screen.getByPlaceholderText(/Enter email/i);
			screen.debug();
			expect(inputEmailElement).toBeInTheDocument();
		});
		it("should be able to type in email input", async () => {
			render(
				<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />
			);
			const inputEmailElement =
				screen.getByPlaceholderText(/Enter email/i);
			fireEvent.change(inputEmailElement, {
				target: { value: "syeddanish" },
			});
			expect(inputEmailElement.value).toBe("syeddanish");
		});
		it("should validate email input", async () => {
			const text = "bari@gma.com";
			expect(await ValidateEmail("sad", text)).toBe(true);
		});
		it("should be able to submit form", () => {
			const mockFn = jest.fn;
			const { getByRole } = render(
				<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />
			);
			const buttonNode = getByRole("button");
			fireEvent.submit(buttonNode);
			// fireEvent.submit(buttonNode);
			// expect(mockFn).toHaveBeenCalled;
		});
	});

	describe("Password input validations", () => {
		it("input type password", async () => {
			render(
				<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />
			);
			const inputPasswordElement =
				screen.getByPlaceholderText(/Enter password/i);

			expect(inputPasswordElement).toBeInTheDocument();
		});

		it("should be able to type in password input", async () => {
			render(
				<LoginForm loading={false} onFormSubmit={mockedOnFormSubmit} />
			);
			const inputEmailElement =
				screen.getByPlaceholderText(/Enter password/i);
			fireEvent.change(inputEmailElement, {
				target: { value: "syeddanish" },
			});
			expect(inputEmailElement.value).toBe("syeddanish");
		});
	});
});
