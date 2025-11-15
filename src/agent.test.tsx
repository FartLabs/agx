import { assertEquals } from "@std/assert";
import { Agent } from "./agent.ts";

Deno.test("Agent component instantiates successfully", () => {
  const agent = <Agent model="openai/gpt-4o" />;
  assertEquals(agent.settings.model, "openai/gpt-4o");
});
