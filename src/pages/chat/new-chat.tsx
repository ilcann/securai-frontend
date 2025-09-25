import ChatHeader from "@/components/chat/chat-header";
import ChatMessages from "@/components/chat/chat-messages";
import ChatPromptInput from "@/components/chat/prompt-input";

const NewChatPage = () => {
  return (
    <main className="flex h-screen flex-col overflow-hidden">
      <ChatHeader />
      <ChatMessages />
      <div className="bg-background z-10 shrink-0 px-3 pb-3 md:px-5 md:pb-5">
        <div className="mx-auto max-w-3xl">
          <ChatPromptInput />
        </div>
      </div>
    </main>

  )
}

export default NewChatPage;
