import AppSidebar from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router"

const ChatLayout = () => {
  const queryClient = new QueryClient();

  
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </QueryClientProvider>
  )
}

export default ChatLayout