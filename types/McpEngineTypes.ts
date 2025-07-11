// the main state of our visualizer at a given time.
interface McpContext {
    components: Map<string, McpComponent>;
    connections: Map<string, McpConnection>;
    adjacencyList: Map<string, Set<string>>;
    containementList: Map<string, Set<string>>;

    addComponent: (mcpComponent: McpComponent) => {};
    deleteComponent: (id: string) => {};

    // updateComponent;

    // addConnection;
    // deleteConnection
    // updateConnection

    // addMemberToAdjacencyList
    // deleteMemeerFromAdjacencyList

    // addMemberToAdjacencyList
    // deleteMemeberFromContainementList
}

type McpComponent = {
    id: string;
    type: string;
    isParent: boolean;
};

type McpConnection = {
    id: string;
    type: string;
};
