import 'dotenv/config'

const sentryConfig = {
    dsn: process.env.SENTRY_DSN!,
    traceRates: Number.parseFloat(process.env.SENTRY_TRACE_RATES!)
}

export default sentryConfig