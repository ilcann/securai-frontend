import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { Theme } from '@radix-ui/themes'
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from 'next-themes'
import ChatLayout from './layouts/chat-layout.tsx'
import NewChatPage from './pages/chat/new-chat.tsx'
import ChatPage from './pages/chat/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" storageKey="vite-ui-theme">
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/chat" element={<ChatLayout />}>
              <Route index element={<NewChatPage />} />
              <Route path=":chatid" element={<ChatPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/chat" />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </ThemeProvider>
  </StrictMode>
)
