import { CALLS, implemented_by, RELATES_TO } from "../common/reference-types";
import { NodeType } from "../types";

export const STRUCTURE_COMPONENT: NodeType = {
    id: "structure/component",
    nodeTypes: {
        component: "structure/component",
    },
    referenceTypes: {
        implemented_by: implemented_by,
        calls: CALLS,
        relates_to: RELATES_TO
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
}


export const STRUCTURE: NodeType = {
    id: "structure",
    referenceTypes: {
        implemented_by: implemented_by,
        relates_to: RELATES_TO
    },
    nodeTypes: {
        component: STRUCTURE_COMPONENT
    }
}