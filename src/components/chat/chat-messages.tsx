import { useRef } from "react";
import { ChatContainerContent, ChatContainerRoot } from "../ui/chat-container";
import { ScrollButton } from "../ui/scroll-button";
import { Message, MessageContent } from "../ui/message";
import { Markdown } from "../ui/markdown";
import { cn } from "@/lib/utils";
import type { Components } from "react-markdown"

const initialMessages = [
  {
    id: 1,
    role: "user",
    content: "Hello! Can you help me with a coding question?",
  },
  {
    id: 2,
    role: "assistant",
    content:
      "Of course! I'd be happy to help with your coding question. What would you like to know?",
  },
  {
    id: 3,
    role: "user",
    content: "How do I create a responsive layout with CSS Grid?",
  },
  {
    id: 4,
    role: "assistant",
    content:
      "Creating a responsive layout with CSS Grid is straightforward. Here's a basic example:\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n```\n\nThis creates a grid where:\n- Columns automatically fit as many as possible\n- Each column is at least 250px wide\n- Columns expand to fill available space\n- There's a 1rem gap between items\n\nWould you like me to explain more about how this works?",
  },
  {
    id: 5,
    role: "user",
    content: "How do I create a responsive layout with CSS Grid?",
  },
  {
    id: 6,
    role: "assistant",
    content:
      "Creating a responsive layout with CSS Grid is straightforward. Here's a basic example:\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n```\n\nThis creates a grid where:\n- Columns automatically fit as many as possible\n- Each column is at least 250px wide\n- Columns expand to fill available space\n- There's a 1rem gap between items\n\nWould you like me to explain more about how this works?",
  }
]

const customComponents: Partial<Components> = {
  h3: ({ children }) => (
    <h3 className="my-4 text-lg font-semibold text-foreground leading-snug">
      {children}
    </h3>
  ),
  a: ({ children, ...props }) => (
    <a
      {...props}
      className="my-4 text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-2 border-neutral-600 pl-4 text-neutral-300">
      {children}
    </blockquote>
  ),
  li: ({ children }) => (
    <li className="my-1 flex items-start leading-relaxed">
      <span className="mt-2 mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-500" />
      <span>{children}</span>
    </li>
  ),
};

  

const ChatMessages = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={chatContainerRef} className="relative flex-1 overflow-y-auto">
      <ChatContainerRoot className="h-full">
          <ChatContainerContent className="space-y-6 px-5 py-12">
              {initialMessages.map((message) => {
                const isAssistant = message.role === "assistant";
                return (
                <Message
                  key={message.id}
                  className={
                    message.role === "user" ? "justify-end" : "justify-start"
                  }
                >
                  <div className="max-w-[85%] flex-1 sm:max-w-[75%]">
                    {isAssistant ? (
                      <div className={cn("bg-transparent text-foreground prose rounded-lg p-2")}>
                        <Markdown className="leading-relaxed space-y-4 px-4" components={customComponents}>{message.content}</Markdown>
                      </div>
                    ) : (
                      <MessageContent className="bg-neutral-800 text-foreground leading-relaxed px-4">
                        {message.content}
                      </MessageContent>
                    )}
                  </div>
                </Message>
              );
            })}
          </ChatContainerContent>
          <div className="absolute bottom-4 left-1/2 flex w-full -translate-x-1/2 justify-end px-5">
              <ScrollButton className="shadow-sm" />
          </div>
      </ChatContainerRoot>
    </div>
  );
};

export default ChatMessages;
