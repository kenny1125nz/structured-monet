import { ReferenceType } from "../types";


export const RELATES_TO: ReferenceType = {
    id: "relates_to",
    targetNodeTypes: ["component", "structure/component", "event", 'intention', 'deseign', 'document'],
}

export const implemented_by: ReferenceType = {
    id: "implemented_by",
    targetNodeTypes: ["component"],
}

export const CALLS: ReferenceType = {
    id: "calls",
    targetNodeTypes: ["operation", "component", 'structure/component']
}

export const EMIT_EVENT: ReferenceType = {
    id: "emit_event",
    targetNodeTypes: ["event"]
}

export const SUBSCRIBE_EVENT: ReferenceType = {
    id: "subscribe_event",
    targetNodeTypes: ["event"]
}