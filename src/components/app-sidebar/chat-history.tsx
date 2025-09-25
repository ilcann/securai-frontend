import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton } from "../ui/sidebar";

const conversationHistory = [
  {
    period: "Today",
    conversations: [
      {
        id: "t1",
        title: "Project Roadmap Discussion",
        lastMessage:
          "Let's prioritize the authentication features for the next sprint.",
        timestamp: new Date().setHours(new Date().getHours() - 2),
      },
      {
        id: "t2",
        title: "API Documentation Review",
        lastMessage:
          "The endpoint descriptions need more detail about rate limiting.",
        timestamp: new Date().setHours(new Date().getHours() - 5),
      },
      {
        id: "t3",
        title: "Frontend Bug Analysis",
        lastMessage:
          "I found the issue - we need to handle the null state in the user profile component.",
        timestamp: new Date().setHours(new Date().getHours() - 8),
      },
    ],
  },
  {
    period: "Yesterday",
    conversations: [
      {
        id: "y1",
        title: "Database Schema Design",
        lastMessage:
          "Let's add indexes to improve query performance on these tables.",
        timestamp: new Date().setDate(new Date().getDate() - 1),
      },
      {
        id: "y2",
        title: "Performance Optimization",
        lastMessage:
          "The lazy loading implementation reduced initial load time by 40%.",
        timestamp: new Date().setDate(new Date().getDate() - 1),
      },
    ],
  },
  {
    period: "Last 7 days",
    conversations: [
      {
        id: "w1",
        title: "Authentication Flow",
        lastMessage: "We should implement the OAuth2 flow with refresh tokens.",
        timestamp: new Date().setDate(new Date().getDate() - 3),
      },
      {
        id: "w2",
        title: "Component Library",
        lastMessage:
          "These new UI components follow the design system guidelines perfectly.",
        timestamp: new Date().setDate(new Date().getDate() - 5),
      },
      {
        id: "w3",
        title: "UI/UX Feedback",
        lastMessage:
          "The navigation redesign received positive feedback from the test group.",
        timestamp: new Date().setDate(new Date().getDate() - 6),
      },
    ],
  },
  {
    period: "Last month",
    conversations: [
      {
        id: "m1",
        title: "Initial Project Setup",
        lastMessage:
          "All the development environments are now configured consistently.",
        timestamp: new Date().setDate(new Date().getDate() - 15),
      },
      {
        id: "m2",
        title: "Requirements Gathering",
        lastMessage:
          "The stakeholders approved the feature specifications document.",
        timestamp: new Date().setDate(new Date().getDate() - 22),
      },
      {
        id: "m3",
        title: "Tech Stack Selection",
        lastMessage:
          "We decided on Next.js, Tailwind, and a serverless backend architecture.",
        timestamp: new Date().setDate(new Date().getDate() - 28),
      },
      {
        id: "m4",
        title: "Project Planning",
        lastMessage: "We need to create a project plan for the next sprint.",
        timestamp: new Date().setDate(new Date().getDate() - 30),
      },
      {
        id: "m5",
        title: "Code Review",
        lastMessage: "We need to review the code for the next sprint.",
        timestamp: new Date().setDate(new Date().getDate() - 35),
      },
      {
        id: "m6",
        title: "Bug Discussion",
        lastMessage: "We need to discuss the bugs for the next sprint.",
        timestamp: new Date().setDate(new Date().getDate() - 37),
      },
      {
        id: "m7",
        title: "Project Planning",
        lastMessage: "We need to create a project plan for the next sprint.",
        timestamp: new Date().setDate(new Date().getDate() - 30),
      },
    ],
  },
];

const ChatHistory = () => {
    return (
    <>
        {conversationHistory.map((conversation) => (
            <SidebarGroup key={conversation.period}>
                <SidebarGroupLabel>{conversation.period}</SidebarGroupLabel>
                <SidebarMenu>
                    {conversation.conversations.map((conversation) => (
                    <SidebarMenuButton key={conversation.id}>
                        <span>{conversation.title}</span>
                    </SidebarMenuButton>
                    ))}
                </SidebarMenu>
            </SidebarGroup>
        ))}
    </>
    );
};

export default ChatHistory;