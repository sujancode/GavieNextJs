import AgentChat from '@/components/AgentChat';
import { agentData } from '@/app/agents/agentData';

export default function AgentChatPage() {
  return <AgentChat />;
}

export async function generateStaticParams() {
  return agentData.map((agent) => ({
    id: agent.id.toString(),
  }));
}