// Canonical data model — matches tech-design.md §3.1

export interface Node {
  id: string; // UUID v4
  label: string;
  type: string; // id of a NodeType constant in the active scenario

  children?: Node[]; // containment hierarchy; a node with children acts as a group
  references?: Reference[]; // references where this node is the source

  position?: { x: number; y: number }; // layout-derived; absent triggers auto-layout on first load
  size?: { width: number; height: number };
  metadata: Record<string, unknown>;
  layoutConfig?: Record<string, unknown>;
}

export interface Reference {
  id: string; // source is the owning Node; no source field needed
  label?: string;
  type: string; // value allowed by source node type mapping
  target: string; // matching expression; may resolve fuzzy or precise node sets
  metadata: Record<string, unknown>;
}

export interface ReferenceType {
  id: string;
  targetNodeTypes: string[];
}

export interface NodeType {
  id: string;

  referenceTypes: Record<string, ReferenceType | string>;
  nodeTypes: Record<string, NodeType | string>;

  metaDataSchema?: Record<string, unknown>;
  layoutConfigSchema?: Record<string, unknown>;
}

