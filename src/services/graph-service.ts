// Graph service — business-level operations wrapping the DB layer

import { v4 as uuidv4 } from "uuid";
import type { Node } from "../model/types";
import {
  getAllGraphs,
  getGraph,
  putGraph,
  deleteGraph,
} from "./db/graphs";

export async function listGraphs(): Promise<Node[]> {
  return getAllGraphs();
}

export async function loadGraph(id: string): Promise<Node | undefined> {
  return getGraph(id);
}

export async function createGraph(label: string, type: string): Promise<Node> {
  const graph: Node = {
    id: uuidv4(),
    label,
    type,
    metadata: {}
  };
  await putGraph(graph);
  return graph;
}

export async function saveGraph(graph: Node): Promise<void> {
  await putGraph(graph);
}

export async function removeGraph(id: string): Promise<void> {
  return deleteGraph(id);
}

/** Persist an imported Node document as a new root graph. */
export async function importGraph(node: Node): Promise<Node> {
  await putGraph(node);
  return node;
}
