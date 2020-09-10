## Description
This is a parser for propositional logic; it will tell you whether a string is a well-formed formula of propositional logic.

![](https://github.com/gavinbarrett/PropParse/workflows/WFF%20Parse/badge.svg)

## Installation

Run:
```bash
npm i prop-parser --save
```

## Input Formatting
Prop-Parser interprets uppercase characters (A-Z) as sentence letters and interprets a set of symbols as logical operators.

> * **~** - Negation
> * **^** - Conjunction
> * **v** - Disjunction
> * **->** - Conditional
> * **<->** - Biconditional

A formula in propositional logic that is well formed can be defined recursively as follows:
1. Any single sentence letter (A-Z) is a WFF **e.g. A**
2. Any WFF prepended with a negation (~) is a WFF **e.g. ~A**
3. Any binary operator (^, v, ->, <->) inserted between two WFF surrounded by parentheses is a WFF **e.g. (~A v B)**
4. Nothing else is a WFF

It is important to call the wff\_parse function on a single string of propositions followed by a newline (e.g. 'A ^ B\nA\n').

## Usage
To load into your Node.js program, include the wff\_parse function.
```node
// import wff_parse function
const { wff_parse } = require('prop-parser');

// run function on a WFF
console.log(wff_parse("P -> Q\nP\nQ\n"));

// run function on a non-WFF
console.log(wff_parse("P -> ~\n"));
```
This will output:
```bash
1
0
```
