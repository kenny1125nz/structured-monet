import type { NodeType } from "../types";
import { languageProperty } from "./shared";

export const FILE: NodeType = {
    id: "file",
    referenceTypes: {
        imports: {
            id: "imports",
            targetNodeTypes: ["entity", "enum", "library"],
        },
    },
    nodeTypes: {
        entity: "entity",
        enum: "enum",
    },
    metaDataSchema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
            language: languageProperty,
            lineCount: {
                type: "integer",
                minimum: 0,
                description: "Total number of lines in the source file.",
            },
        },
        additionalProperties: true,
    },
};