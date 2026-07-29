"use client"

import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"
import {
  IconChartBar,
  IconCoins,
  IconAlertTriangle,
  IconTrendingUp2,
} from "@tabler/icons-react"

const chartData = [
  { month: "Enero", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Abr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Móvil",
    color: "#60a5fa",
  },
} satisfies ChartConfig

const statsData = [
  {
    label: "Créditos Activos",
    value: "1,284",
    change: "+12.5%",
    Icon: IconChartBar,
  },
  {
    label: "Pagos Recibidos",
    value: "$45,230",
    change: "+8.2%",
    Icon: IconCoins,
  },
  {
    label: "Créditos Vencidos",
    value: "87",
    change: "-3.1%",
    Icon: IconAlertTriangle,
  },
  {
    label: "Nuevos Esta Semana",
    value: "23",
    change: "+15.0%",
    Icon: IconTrendingUp2,
  },
]

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, i) => (
          <Card
            key={stat.label}
            className="group/card bg-sidebar shadow-sm transition-shadow duration-200 ease-out hover:shadow-md"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-1">
              <CardTitle className="text-xs font-medium tracking-wide text-sidebar-foreground/60 uppercase">
                {stat.label}
              </CardTitle>
              <div className="size-8 w-12 flex items-center justify-center rounded-md bg-sidebar-accent/50 text-sidebar-primary">
                <stat.Icon />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-heading font-bold text-sidebar-foreground">
                {stat.value}
              </div>
              <p className="text-xs text-sidebar-accent-foreground mt-1">
                {stat.change} vs. mes pasado
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-2 bg-sidebar shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-heading font-medium text-sidebar-foreground">
              Resumen Mensual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[260px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--sidebar-border)" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                  tick={{ fill: "var(--sidebar-foreground)", fontSize: 12 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "var(--sidebar-foreground)", fontSize: 12 }}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-xl bg-popover px-3 py-2 text-xs shadow-lg ring-1 ring-border">
                          <p className="font-medium text-popover-foreground">
                            {label}
                          </p>
                          {payload.map((entry, i) => (
                            <p key={i} style={{ color: entry.color }}>
                              {entry.name}: {entry.value}
                            </p>
                          ))}
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar
                  dataKey="desktop"
                  fill="var(--color-desktop)"
                  radius={[8, 8, 4, 4]}
                />
                <Bar
                  dataKey="mobile"
                  fill="var(--color-mobile)"
                  radius={[8, 8, 4, 4]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="bg-sidebar shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-heading font-medium text-sidebar-foreground">
              Estado General
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {statsData.slice(0, 4).map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between rounded-xl bg-sidebar-accent/50 px-3 py-2"
              >
                <span className="text-sm text-sidebar-foreground">
                  {stat.label}
                </span>
                <span className="text-sm font-medium text-sidebar-primary">
                  {stat.value}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardPage