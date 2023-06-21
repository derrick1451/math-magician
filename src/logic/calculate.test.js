/** @format */
import calculate from "./calculate";

describe("Should make calculation", () => {
	const objInitialValue = { total: "1", next: "2", operation: "+" };
	let output = {};

	test("Should clear the output", () => {
		output = calculate(objInitialValue, "AC");
		expect(output).toEqual({ total: 0, next: null, operation: null });
	});

	test("The button pressed should be 0", () => {
		const objInitialValue = { total: "0", next: "0" };
		let output = {};
		output = calculate(objInitialValue, "0");
		expect(output).toEqual({});
	});

	test("The button pressed should be  8", () => {
		const objInitialValue = { total: "0", next: "0", operation: "+" };
		let output = {};
		output = calculate(objInitialValue, "8");
		expect(output).toEqual({ total: "0", next: "8", operation: "+" });
	});

	test("The button pressed should be  5", () => {
		const objInitialValue = { total: "0", next: "5", operation: "+" };
		let output = {};
		output = calculate(objInitialValue, "5");
		expect(output).toEqual({ total: "0", next: "55", operation: "+" });
	});
});
