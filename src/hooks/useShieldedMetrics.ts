import { useEffect, useState } from 'react'

// Same live endpoints the source page queries for the hero KPIs.
const METRICS = {
  volume: 'https://token-api.zama.org/token/cumulative-tvs',
  tvl: 'https://token-api.zama.org/token/tvs',
} as const

type MetricKey = keyof typeof METRICS
type Metrics = Partial<Record<MetricKey, string>>

const format = (value: number) => '$' + Math.round(value).toLocaleString('en-US')

export function useShieldedMetrics() {
  const [metrics, setMetrics] = useState<Metrics>({})

  useEffect(() => {
    const controller = new AbortController()
    for (const key of Object.keys(METRICS) as MetricKey[]) {
      fetch(METRICS[key], { signal: controller.signal })
        .then((res) => res.json())
        .then((value: unknown) => {
          if (value != null) setMetrics((m) => ({ ...m, [key]: format(Number(value)) }))
        })
        .catch((e: unknown) => {
          if (!controller.signal.aborted) console.warn(`Fetch failed for ${key}:`, e)
        })
    }
    return () => controller.abort()
  }, [])

  return metrics
}
