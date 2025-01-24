"use client"

import { faker } from "@faker-js/faker"
import { Rss } from "lucide-react"
import React from "react"
import { Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/ui/chart"

import { Badge } from "../ui/badge"

const chartConfig = {
  usersgraph: {
    label: "User graph",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

function generateMetrics() {
  const metrics = [];
  const now = new Date(); // Current time
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000); // Time one hour ago

  for (let time = oneHourAgo; time <= now; time.setMinutes(time.getMinutes() + 2)) {
    metrics.push({
      timestamp: time.toLocaleTimeString(), // ISO format for easy parsing
      value: faker.number.int({ min: 0, max: 50 }), // Random value between 0 and 99
    });
  }

  return metrics;
}

export function UsersOverview() {
  const metrics = React.useMemo(() => generateMetrics(), [])
  return (
    <Card className="w-fit md:min-w-[80vh]">
      <CardHeader className="flex flex-row content-start justify-between pb-0">
        <div>
          <CardTitle>Players Added per Minute</CardTitle>
          <CardDescription>Last Hour</CardDescription>
        </div>
        <div>
          <Badge variant="secondary" className="gap-2 text-sm">
            Live
            <span className="relative flex size-4">
              <Rss className='absolute inline-flex size-full animate-ping opacity-75' />
              <Rss className='relative inline-flex size-4' />
            </span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={metrics}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <XAxis
              dataKey="timestamp"
              tickLine={false}
              axisLine={false}
              interval={'equidistantPreserveStart'}
              minTickGap={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Line
              name="added"
              dataKey="value"
              type="natural"
              stroke="var(--color-usersgraph)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
