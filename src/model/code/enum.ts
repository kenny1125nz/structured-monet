import type { NodeType } from "../types";
import { languageProperty } from "./shared";

export const ENUM: NodeType = {
    id: "enum",
    referenceTypes: {},
    nodeTypes: {
        enum_member: "enum_member",
    },
    metaDataSchema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
            language: languageProperty,
            startLine: {
                type: "integer",
                minimum: 1,
                description: "1-indexed line where this enum starts in the source file.",
            },
            endLine: {
                type: "integer",
                minimum: 1,
                description: "1-indexed line where this enum ends in the source file.",
            },
            lineCount: {
                type: "integer",
                minimum: 1,
                description: "Number of source lines this enum spans.",
            },
        },
        additionalProperties: true,
    },
};