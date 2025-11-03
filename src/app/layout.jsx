import '../styles/index.css'
import SmoothScroll from '../components/common/SmoothScroll'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: {
    default: 'Erus Business Management Platform',
    template: 'Erus Business Management Platform | %s',
  },
  description: 'Revolutionize your business with AI-powered automated administration. Integrated accounting, invoicing, and management tools for businesses of all sizes. No dedicated staff required.',
  keywords: 'business management, AI automation, accounting software, invoicing, business administration, automated tools, enterprise solutions',

  openGraph: {
    type: 'website',
    title: {
      default: 'Erus Business Management Platform',
      template: 'Erus Business Management Platform | %s',
    },
    description: 'Transform your business operations with AI-powered automation. Get integrated accounting, invoicing, and administration tools that work without dedicated staff.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden w-full m-0 p-0">
        <SmoothScroll />
        {children}

        <script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Ferusbusin6077back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.9" />
        <script type="module" src="https://static.rocket.new/rocket-shot.js?v=0.0.1" /></body>
    </html>
  )
}