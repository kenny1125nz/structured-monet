import { EMIT_EVENT, implemented_by, RELATES_TO, SUBSCRIBE_EVENT } from "../common/reference-types"
import { NodeType } from "../types"


const WIRE_FRAME_COMPONENT: NodeType = {
    id: "wireframe/component",
    nodeTypes: {
        component: "wireframe/component",
    },
    referenceTypes: {
        implemented_by: implemented_by,
        emit_event: EMIT_EVENT,
        subscribe_event: SUBSCRIBE_EVENT
    }
}

const WIRE_FRAME_PAGE: NodeType = {
    id: "wireframe/page",
    nodeTypes: {
        component: WIRE_FRAME_COMPONENT
    },
    referenceTypes: {
        implemented_by: "implemented_by"
    }
}


export const WIRE_FRAME: NodeType = {
    id: "wireframe",
    referenceTypes: {
        implemented_by: "implemented_by",
        relates_to: RELATES_TO
    },
    nodeTypes: {
        page: WIRE_FRAME_PAGE
    }
}   