'use client';
import { useCallback, useRef } from 'react';

import ToolNode from './Tool';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    useReactFlow,
    addEdge,
    Connection,
    ReactFlowProvider,
    Background,
    Controls
} from '@xyflow/react';
import { DndProvider, useDnd } from './dndProvider';
import Prompt from './Prompt';
import SideBar from '@/components/SideBar';
import { sideBarConfig } from '@/data_engine/SideBarConfig';

const nodeTypes = {
    tool: ToolNode,
    prompt: Prompt
};
const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } }
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

let id = 0;
const getId = () => `dndnode_${id++}`;

export function DragAndDrop() {
    const reactFlowWrapper = useRef(null);
    const { screenToFlowPosition } = useReactFlow();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const { type } = useDnd();

    const onConnect = useCallback(
        (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();

            if (!type) {
                return;
            }

            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY
            });

            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: `${type} node` }
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [screenToFlowPosition, type]
    );

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text/plain', type!);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className="h-screen flex">
            <SideBar config={sideBarConfig}></SideBar>
            <div className="flex grow bg-white" ref={reactFlowWrapper}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    onDragOver={onDragOver}
                    onDragStart={onDragStart}
                    onDrop={onDrop}
                >
                    <Background></Background>
                    <Controls></Controls>
                </ReactFlow>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <ReactFlowProvider>
            <DndProvider>
                <DragAndDrop></DragAndDrop>
            </DndProvider>
        </ReactFlowProvider>
    );
}
