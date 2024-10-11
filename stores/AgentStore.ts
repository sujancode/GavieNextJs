import { makeAutoObservable } from 'mobx';

export interface Agent {
  id: number;
  name: string;
  model: string;
  knowledgeBase: string;
  deployment: number;
  avatar: string;
}

class AgentStore {
  agents: Agent[] = [
    { id: 1, name: 'Docchat Customer Support', model: 'GPT-4', knowledgeBase: 'Customer Support', deployment: 2, avatar: '#FF5733' },
    { id: 2, name: 'Gavie Marketing Agent', model: 'Claude 3', knowledgeBase: 'Marketing Questions', deployment: 4, avatar: '#33FF57' },
    { id: 3, name: 'XYZ Nursing Assistant', model: 'GPT3.5', knowledgeBase: 'Health Knowledge Base', deployment: 5, avatar: '#3357FF' },
    { id: 4, name: 'Cloudpro Marketing Automation', model: 'Falcon 180B', knowledgeBase: 'Marketing FAQ', deployment: 1, avatar: '#FFFF33' },
    { id: 5, name: 'Cloudpro Sales Assistant', model: 'GPT-4a', knowledgeBase: 'Sales Data', deployment: 4, avatar: '#FF33FF' },
    { id: 6, name: 'Medical Assistant', model: 'Llama 3', knowledgeBase: 'Test Medical', deployment: 3, avatar: '#33FFFF' },
    { id: 7, name: 'DocChat Help Desk', model: 'Vicuna', knowledgeBase: 'DocChat FAQ', deployment: 3, avatar: '#FF3333' },
    { id: 8, name: 'Cloudpro Call Agent', model: 'Gemini 1.5', knowledgeBase: 'Cloudpro CALL Q/A', deployment: 1, avatar: '#33FF33' },
    { id: 9, name: 'Zales Content Agent', model: 'GPT-4', knowledgeBase: 'Zales Content Dataset', deployment: 1, avatar: '#3333FF' },
    { id: 10, name: 'Zales Support Agent', model: 'Mistral 7B', knowledgeBase: 'Zales FAQ Data', deployment: 1, avatar: '#FFFF33' },
  ];
  searchQuery: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  get filteredAgents() {
    const lowercaseQuery = this.searchQuery.toLowerCase();
    return this.agents.filter(agent =>
      agent.name.toLowerCase().includes(lowercaseQuery) ||
      agent.model.toLowerCase().includes(lowercaseQuery) ||
      agent.knowledgeBase.toLowerCase().includes(lowercaseQuery) ||
      agent.id.toString().includes(lowercaseQuery)
    );
  }
}

export const agentStore = new AgentStore();