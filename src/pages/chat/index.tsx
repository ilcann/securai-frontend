import ChatHeader from "@/components/chat/chat-header";
import ChatMessages from "@/components/chat/chat-messages";
import ChatPromptInput from "@/components/chat/prompt-input";

const ChatPage = () => {
  return (
    <main className="flex h-screen flex-col overflow-hidden">
      <ChatHeader />
      <ChatMessages />
      <div className="inset-x-0 bottom-0 mx-auto w-full max-w-3xl shrink-0 px-3 pb-3 md:px-5 md:pb-5">
        <ChatPromptInput />
      </div>
    </main>

  )
}

export default ChatPage;
