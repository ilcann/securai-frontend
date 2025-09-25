import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "../ui/sidebar";

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader>
                header
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    content
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                footer
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar;