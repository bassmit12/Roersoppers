import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  subtitle?: string
  icon: LucideIcon
}

export function StatsCard({ title, value, subtitle, icon: Icon }: StatsCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-4 inline-flex rounded-lg bg-blue-50 p-3 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm font-medium text-gray-600">{title}</p>
      {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
    </div>
  )
}

