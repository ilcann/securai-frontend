import { Button } from "@/components/ui/button";
import { PromptInput, PromptInputAction, PromptInputActions, PromptInputTextarea } from "@/components/ui/prompt-input"
import { Flex } from "@radix-ui/themes";
import { ArrowUp, Plus, Square } from "lucide-react";
import { useState } from "react";

const ChatPromptInput = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(!isLoading);
  }
  return (
    <PromptInput
      className="w-full relative z-10 py-4"
    >
      <Flex gap={'5'} px={'3'} direction={'column'}>
        <PromptInputTextarea className="min-h-[44px]" placeholder="Ask me anything..." />
        <PromptInputActions className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <PromptInputAction tooltip="Add a new action">
              <Button
                variant="outline"
                size="icon"
                className="size-9 rounded-full"
              >
                <Plus size={18} />
              </Button>
            </PromptInputAction>
          </div>
          <PromptInputAction
            tooltip={isLoading ? "Stop generation" : "Send message"}
          >
            <Button
              variant="default"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={handleSubmit}
            >
              {isLoading ? (
              <Square className="size-5 fill-current" />
              ) : (
              <ArrowUp className="size-5" />
              )}
            </Button>
          </PromptInputAction>            
        </PromptInputActions>        
      </Flex>
    </PromptInput>
  )
}

export default ChatPromptInput;