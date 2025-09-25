import AppSidebar from "@/components/app-sidebar"
import ChatHeader from "@/components/chat/chat-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router"

const ChatLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex h-screen flex-col overflow-hidden">
          <ChatHeader />
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default ChatLayout