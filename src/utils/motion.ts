export const staggerContainer = (staggerChildren:number, delayChildren:number) => ({
	hidden: { opacity: 0 },
	show: {
    opacity: 1,
		transition: {
			staggerChildren,
			delayChildren,
		},
	},
});

export const Fade = () => ({
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
    y: 0,
		transition: {
			ease: 'easeInOut',
		},
	},
});