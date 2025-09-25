import ChatPromptInput from "@/components/chat/prompt-input";

const ChatPage = () => {
  return (
    <div className="bg-background z-10 shrink-0 px-3 pb-3 md:px-5 md:pb-5">
      <div className="mx-auto max-w-3xl">
        <ChatPromptInput />
      </div>
    </div>
  )
}

export default ChatPage;
