import type { Experimental_AgentSettings, ToolSet } from "ai";
import { Experimental_Agent } from "ai";

/**
 * AgentProps is the props for the Agent component.
 */
export interface AgentProps
  extends Experimental_AgentSettings<ToolSet, never, never> {
  children?: FunctionalAgentSettings[];
}

/**
 * FunctionalAgentSettings is a function that imperatively sets the agent's settings.
 */
export type FunctionalAgentSettings = (
  agent: InstanceType<typeof Experimental_Agent>,
) => void;

/**
 * Agent is a component that creates an agent with the given settings.
 */
export function Agent(props: AgentProps) {
  const { children, ...settings } = props;
  const agent = new Experimental_Agent(settings);

  // Process children if they exist and are functions
  if (children) {
    const childrenArray = Array.isArray(children) ? children : [children];
    childrenArray.forEach((child) => {
      if (typeof child === "function") {
        child(agent);
      }
    });
  }

  return agent;
}
