import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  IconCreditCard,
  IconUserPlus,
  IconCoins,
  IconAlertTriangle,
  IconUsers,
  IconSettings,
} from "@tabler/icons-react";

export const data = {
  navMain: [
    {
      title: "Créditos",
      items: [
        {
          title: "Cartera de Créditos",
          url: "/creditos",
          icon: IconCreditCard,
        },
        {
          title: "Nuevo Crédito",
          url: "/creditos/nuevo",
          icon: IconUserPlus,
        },
        {
          title: "Aplicar Pago",
          url: "/pagos",
          icon: IconCoins,
        },
        {
          title: "Créditos Vencidos",
          url: "/creditos/vencidos",
          icon: IconAlertTriangle,
        },
      ],
    },
    {
      title: "Administración",
      items: [
        {
          title: "Usuarios y Cobradores",
          url: "/usuarios",
          icon: IconUsers,
        },
        {
          title: "Configuración",
          url: "/configuracion",
          icon: IconSettings,
        },
      ],
    },
  ],
};

export function SidebarHome({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b border-sidebar-border px-4 py-5 dark:border-sidebar-border">
        <h1 className="font-heading text-lg font-semibold tracking-tight text-sidebar-primary dark:text-sidebar-primary">
          App Creditos
        </h1>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-sidebar-primary dark:text-sidebar-primary">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={<a href={item.url} />}
                      className="data-[active]:bg-sidebar-primary data-[active]:text-sidebar-primary-foreground dark:data-[active]:bg-sidebar-primary dark:data-[active]:text-sidebar-primary-foreground"
                    >
                      <item.icon data-icon="inline-start" />
                      {item.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
