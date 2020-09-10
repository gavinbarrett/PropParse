import wff_parse from '../src/parser.cjs';

describe('WFF test 1', () => {
	test("P -> Q, P, Q", () => {
		expect(wff_parse("P -> Q\n P\n Q")).toBe(1);
	});
});

describe('WFF test 2', () => {
	test("A ^ B, A -> P, B -> Q, P ^ Q", () => {
		expect(wff_parse("A ^ B\nA -> P\nB -> Q\nP ^ Q")).toBe(1);
	});
});

describe('WFF test 3', () => {
	test("A v ~A", () => {
		expect(wff_parse("A v ~A")).toBe(1);
	});
});

describe('WFF test 4', () => {
	test("A ^ ~A", () => {
		expect(wff_parse("A ^ ~A")).toBe(1);
	});
});

describe('WFF test 5', () => {
	test("P -> ~P", () => {
		expect(wff_parse("P -> ~P")).toBe(1);
	});
});
