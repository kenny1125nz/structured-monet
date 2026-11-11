import type { NodeType } from "../types";
import { languageProperty } from "./shared";

export const PACKAGE: NodeType = {
    id: "package",
    referenceTypes: {},
    nodeTypes: {
        package: "package",
        entity: "entity",
        enum: "enum",
        file: "file",
        library: "library",
        primitive_type: "primitive_type",
    },
    metaDataSchema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
            language: languageProperty,
        },
        additionalProperties: true,
    },
};