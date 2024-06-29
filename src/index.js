"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const source$ = (0, rxjs_1.of)(1, 2, 3);
source$.pipe((0, operators_1.map)(val => val * 10)).subscribe(console.log);
