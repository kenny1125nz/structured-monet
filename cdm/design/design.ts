import { RELATES_TO } from "../common/reference-types";
import { NodeType } from "../types";
import { STRUCTURE } from "./structure";
import { WIRE_FRAME } from "./wireframe";

export const DESIGN: NodeType = {
    id: "design",
    referenceTypes: {
        relates_to: RELATES_TO
    },

    nodeTypes: {
        wireframe: WIRE_FRAME,
        structure: STRUCTURE
    }
};