import type { NodeType } from "../types";
import { languageProperty, visibilityProperty } from "./shared";

export const PROPERTY: NodeType = {
    id: "property",
    referenceTypes: {
        type_of: {
            id: "type_of",
            targetNodeTypes: ["entity", "enum", "primitive_type"],
        },
    },
    nodeTypes: {},
    metaDataSchema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
            language: languageProperty,
            visibility: visibilityProperty,
            static: { type: "boolean" },
            signature: { type: "string" },
        },
        additionalProperties: true,
    },
};