import type { NodeType } from "../types";
import { languageProperty, visibilityProperty } from "./shared";

export const ENTITY: NodeType = {
    id: "entity",
    referenceTypes: {
        extends: { id: "extends", targetNodeTypes: ["entity"] },
        implements: { id: "implements", targetNodeTypes: ["entity"] },
    },
    nodeTypes: {
        method: "method",
        constructor: "method",
        property: "property",
    },
    metaDataSchema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
            language: languageProperty,
            entityKind: {
                type: "string",
                enum: ["class", "interface"],
                description: "Whether this entity is a class or an interface.",
            },
            visibility: visibilityProperty,
            abstract: { type: "boolean" },
            signature: {
                type: "string",
                description: "Optional textual signature for display or search.",
            },
            startLine: {
                type: "integer",
                minimum: 1,
                description: "1-indexed line where this declaration starts in the source file.",
            },
            endLine: {
                type: "integer",
                minimum: 1,
                description: "1-indexed line where this declaration ends in the source file.",
            },
            lineCount: {
                type: "integer",
                minimum: 1,
                description: "Number of source lines this declaration spans (endLine - startLine + 1).",
            },
        },
        additionalProperties: true,
    },
};