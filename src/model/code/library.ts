import type { NodeType } from "../types";
import { languageProperty } from "./shared";

export const LIBRARY: NodeType = {
    id: "library",
    referenceTypes: {},
    nodeTypes: {},
    metaDataSchema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
            language: languageProperty,
            version: { type: "string" },
            packageName: { type: "string" },
        },
        additionalProperties: true,
    },
};