'use client'

import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
} from 'lucide-react'
import * as React from 'react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { TeamSwitcher } from '@/components/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

// This is sample data.
const temp_data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Remote Module 1',
      url: '/remote1',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '/remote1/test1',
        },
        {
          title: 'Starred',
          url: '/remote1/test1',
        },
        {
          title: 'Settings',
          url: '/remote1/test1',
        },
      ],
    },
    {
      title: 'Remote Module 2',
      url: '/remote2',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '/remote2/test2',
        },
        {
          title: 'Explorer',
          url: '/remote2/test2',
        },
        {
          title: 'Quantum',
          url: '/remote2/test2',
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={temp_data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={temp_data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={temp_data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
