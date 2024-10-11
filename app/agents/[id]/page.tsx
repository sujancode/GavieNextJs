import AgentChat from '@/components/AgentChat'
import { agentStore } from '@/stores/AgentStore' // Adjust this import based on your store setup

export default function AgentChatPage() {
  return <AgentChat />
}

export async function generateStaticParams() {
  return agentStore.agents.map((agent) => ({
    id: agent.id.toString(),
  }))
}
