import type { NodeType } from "../types";
import { languageProperty } from "./shared";

export const PARAMETER: NodeType = {
    id: "parameter",
    referenceTypes: {
        type_of: {
            id: "type_of",
            targetNodeTypes: ["entity", "enum", "primitive_type", "method"],
        },
    },
    nodeTypes: {},
    metaDataSchema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
            language: languageProperty,
            signature: { type: "string" },
        },
        additionalProperties: true,
    },
};