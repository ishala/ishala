import { extendTailwindMerge } from 'tailwind-merge';

// Cukup daftarkan token berkunci non-numerik; kunci numerik sudah dikenali validator bawaan tailwind-merge
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
      text: ['caption', 'body', 'heading-sm', 'heading', 'display', 'title', 'hero'],
      leading: ['caption', 'body', 'heading-sm', 'heading', 'display', 'title', 'hero', 'prose'],
      tracking: ['caption', 'body', 'heading-sm', 'heading', 'display', 'title', 'hero'],
      radius: ['3xl-2'],
      container: ['page', 'prose'],
    },
  },
});
