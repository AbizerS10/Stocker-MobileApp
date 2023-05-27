// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
     "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        card: 'var(--color-bg-card)',
        page: 'var(--color-bg-page)',
        message: 'var(--color-bg-message)',
        accountInfo: 'var(--color-bg-accountinfo)',
        appreciateComment: 'var(--color-bg-appreciatecomment)',
        improveComment: 'var(--color-bg-improvecomment)',
        viewMore: 'var(--color-bg-viewmore)',
        post : 'var(--color-bg-post)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        card: 'var(--color-text-card)',
        page: 'var(--color-text-page)',
        message: 'var(--color-text-message)',
        grayish: 'var(--color-text-grayish)',
        blackGray: 'var(--color-text-blackgray)',
        appreciateComment: 'var(--color-text-appreciatecomment)',
        improveComment: 'var(--color-text-improvecomment)',
        tertiary: 'var(--color-text-tertiary)',
        comment: 'var(--color-border-comment)'
      },
      borderWidth: {
        1: 1,
      },
      borderColor: {
        tertiary : 'var(--color-border-tertiary)'
      }
    },
  },
  plugins: [],
}
