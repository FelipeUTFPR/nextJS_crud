module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'from-green-400',
    'from-blue-400',
    'from-gray-400',
    'to-gray-700',
    'to-blue-700',
    'to-green-700',
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
//versão de produção:
  //Para garantir que essas classes sejam lidas pelo tailwind são geradas expressões regulares
//classes geradas dinâmicamente com interpolação, não serão excluídas
