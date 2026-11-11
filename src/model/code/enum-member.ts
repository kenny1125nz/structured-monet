import type { NodeType } from "../types";

export const ENUM_MEMBER: NodeType = {
    id: "enum_member",
    referenceTypes: {},
    nodeTypes: {},
    metaDataSchema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
            value: {
                description: "Explicit enum member value, if any.",
            },
        },
        additionalProperties: true,
    },
};