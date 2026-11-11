import { CODE } from "./code/index";
import { INTETION } from "./intention/intention";
import { hyperlink } from "./common/node-types";
import type { NodeType } from "./types";
import { DESIGN } from "./design/design";


export const COMPONENT: NodeType = {
  id: "component",
  referenceTypes: {
    links_to: { id: "links_to", targetNodeTypes: ["hyperlink"] }
  },
  nodeTypes: {
    component: "component",
    intention: INTETION,
    design: DESIGN,
    code: CODE,
    hyperlink: hyperlink
  },
  metaDataSchema: {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
      description: { type: "string" },
      external: { type: "boolean" }
    },
    additionalProperties: true,

  }
};
