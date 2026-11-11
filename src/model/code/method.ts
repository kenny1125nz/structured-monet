import type { NodeType } from "../types";
import { languageProperty, visibilityProperty } from "./shared";

export const METHOD: NodeType = {
    id: "method",
    referenceTypes: {
        calls: { id: "calls", targetNodeTypes: ["method"] },
        returns: {
            id: "returns",
            targetNodeTypes: ["entity", "enum", "primitive_type", "method"],
        },
    },
    nodeTypes: {
        parameter: "parameter",
    },
    metaDataSchema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
            language: languageProperty,
            visibility: visibilityProperty,
            static: { type: "boolean" },
            abstract: { type: "boolean" },
            signature: { type: "string" },
        },
        additionalProperties: true,
    },
};