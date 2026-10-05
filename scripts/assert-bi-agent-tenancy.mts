import assert from "node:assert/strict";
// @ts-expect-error Node type stripping resolves this test-only .ts import.
import { FAQ_ITEMS } from "../src/components/bi-agent/copy.ts";

const answer = FAQ_ITEMS.find((item) => item.q === "Como cada cliente é isolado?")?.a;
assert.ok(answer, "FAQ deve explicar o modelo de implantação");
assert.match(answer, /instância dedicada/i);
assert.match(answer, /credenciais.*logs/i);

const rls = FAQ_ITEMS.find((item) => item.q === "Como funciona o acesso quando o BI usa RLS?")?.a;
assert.ok(rls, "FAQ deve explicar o bloqueio RLS");
assert.match(rls, /e-mail corporativo/i);
assert.match(rls, /bloqueado/i);
assert.match(rls, /verific/i);
