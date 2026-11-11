import type { NodeType } from "../types";
import { languageProperty } from "./shared";

export const PRIMITIVE_TYPE: NodeType = {
    id: "primitive_type",
    referenceTypes: {},
    nodeTypes: {},
    metaDataSchema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
            language: languageProperty,
        },
        additionalProperties: true,
    },
};