/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './assets/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        amber: '#C88A2D',
        malt: '#F4EFE6',
        hop: '#2E5E4E',
        charcoal: '#3A3A3A',
        copper: '#9B5E2E'
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Microsoft YaHei',
          'PingFang SC',
          'sans-serif'
        ],
        serif: [
          'Noto Serif SC',
          'Songti SC',
          'SimSun',
          'serif'
        ]
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 17, 17, 0.12)'
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 20% 20%, rgba(200,138,45,0.14), transparent 24%), radial-gradient(circle at 78% 8%, rgba(46,94,78,0.18), transparent 26%), linear-gradient(135deg, #111111 0%, #1C1712 48%, #2E5E4E 100%)"
      }
    }
  },
  plugins: []
};
