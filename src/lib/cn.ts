import { extendTailwindMerge } from 'tailwind-merge';

// Nama token di bawah ini harus cermin dari @theme di src/styles/theme.css
export const cn = extendTailwindMerge({
  extend: {
    theme: {
      color: [
        'ice-white',
        'void-black',
        'carbon',
        'graphite',
        'slate',
        'iron',
        'steel',
        'fog',
        'iron-edge',
        'electric-cobalt',
        'signal-orange',
      ],
      font: ['monument', 'mono'],
      text: ['caption', 'body', 'heading-sm', 'heading', 'display'],
      leading: ['caption', 'body', 'heading-sm', 'heading', 'display'],
      tracking: ['caption', 'body', 'heading-sm', 'heading', 'display'],
      radius: ['3xl-2'],
      container: ['page'],
    },
  },
});
