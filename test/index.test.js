import test from "node:test";
import assert from "node:assert/strict";
import { relativeLuminance, contrastRatio, meetsContrast } from "../src/index.js";
test("black and white ratio is 21",()=>assert.ok(Math.abs(contrastRatio("#000","#fff")-21)<1e-10));
test("parses shorthand hex",()=>assert.equal(relativeLuminance("#000"),0));
test("checks threshold",()=>assert.equal(meetsContrast("#000","#fff",7),true));
test("rejects invalid colors",()=>assert.throws(()=>contrastRatio("red","#fff"),RangeError));
