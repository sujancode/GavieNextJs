"use client"

import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  useNodesState,
  Background,
  BackgroundVariant,
  useEdgesState,
  Edge
} from 'react-flow-renderer';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 250, y: 25 },
  },
];

const initialEdges: Edge<any>[] = [];

interface AutomationFlowProps {
  onClose: () => void;
}

const AutomationFlow: React.FC<AutomationFlowProps> = ({ onClose }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeName, setNodeName] = useState('');

  const onConnect = useCallback((params: Edge) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const addNode = () => {
    if (nodeName) {
      const newNode = {
        id: (nodes.length + 1).toString(),
        data: { label: nodeName },
        position: { x: Math.random() * 300, y: Math.random() * 300 },
      };
      setNodes((nds) => nds.concat(newNode));
      setNodeName('');
    }
  };

  return (
    <div className="h-[600px] w-full border rounded-lg relative">
      <div className="absolute top-4 right-4 z-10">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4 border-b">
        <input
          type="text"
          value={nodeName}
          onChange={(e) => setNodeName(e.target.value)}
          placeholder="Enter node name"
          className="mr-2 p-2 border rounded"
        />
        <Button onClick={addNode}>Add Node</Button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={(params) => onConnect(params as Edge)}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default AutomationFlow;