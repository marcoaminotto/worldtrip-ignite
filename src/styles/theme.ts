import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		black: '#000000',
		white: '#F5F8FA',

		gray: {
			'800': '#1C1401',
			'500': '#999999',
			'400': '#DADADA',
		},
		yellow: {
			'500': '#FFBA08',
		},
		blue: {
			'900': '#47585B',
		},
	},
	fonts: {
		heading: 'Poppins, Helvetica, Arial, sans-serif',
		body: 'Poppins, Helvetica, Arial, sans-serif',
	},
	styles: {
		global: {
			body: {
				bg: 'white',
				color: 'blue.900',
			},
		},
	},
});
