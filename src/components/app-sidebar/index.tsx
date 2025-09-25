import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../ui/sidebar";
import ChatHistory from "./chat-history";
import { Flex } from "@radix-ui/themes";
import { NavMain } from "./nav-main";

const AppSidebar = () => {

    return (
        <Sidebar>
            <SidebarHeader className="flex flex-col">
                <Flex direction="row" align="center" gap={'2'} px={'2'} py={'4'}>
                    <div className="flex flex-row items-center gap-2 px-2">
                        <div className="bg-primary/10 size-8 rounded-md"></div>
                        <div className="text-md font-base text-primary tracking-tight">
                        zola.chat
                        </div>
                    </div>
                </Flex>
                <NavMain />
            </SidebarHeader>
            <SidebarContent>
                <ChatHistory />
            </SidebarContent>
            <SidebarFooter>
                footer
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar;