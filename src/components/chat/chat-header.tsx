import { Flex } from "@radix-ui/themes";
import { SidebarTrigger } from "../ui/sidebar";
import MaskToggle from "./mask-toggle";

const ChatHeader = () => {
  return (
    <header className="bg-background z-10 flex h-16 w-full shrink-0 items-center justify-between border-b px-4">
      <Flex gap={'2'} align="center" direction={"row"}>
        <SidebarTrigger className="-ml-1" size={'lg'}/>
        <div className="text-foreground">Chat Title</div>
      </Flex>
      <MaskToggle />
    </header>
  );
};

export default ChatHeader;