import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface CreateKnowledgeBaseProps {
  onClose: () => void;
}

const CreateKnowledgeBase: React.FC<CreateKnowledgeBaseProps> = ({ onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Knowledge Base</DialogTitle>
          <DialogDescription>
            Start building your knowledge base by creating a new article.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center h-40 bg-muted rounded-lg">
          <Button variant="outline" size="lg" className="flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Create Knowledge Base</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateKnowledgeBase;