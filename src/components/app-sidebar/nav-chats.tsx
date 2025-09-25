import { useChatList } from "@/hooks/use-chatList";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Link, useParams } from "react-router";
import { Skeleton } from "../ui/skeleton";

export function NavChats() {
  const activeChatId = useParams().chatId;
  const { chats, loadChats, hasMore, loading, error } = useChatList();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="whitespace-nowrap">Recent chats</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          { error && (
            <SidebarMenuItem>
                <SidebarMenuButton>
                    <span className="text-destructive">Error loading chats</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
          )}
          {chats && chats.map((item) => {
            const isActive = item.id === activeChatId;
            return (
                <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild isActive={isActive}>
                        <Link to={`/chat/${item.id}`} className="whitespace-nowrap">
                            {item.title}
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            )
          })}
          {hasMore && !loading && !error && ( 
            <SidebarMenuItem>
                <SidebarMenuButton onClick={() => loadChats()} className="cursor-pointer">
                    Load more
                </SidebarMenuButton>
            </SidebarMenuItem>            
          )}

          {loading && (
            <SidebarMenuItem>
                <SidebarMenuButton disabled>
                    <Skeleton className="w-full"/>
                </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}