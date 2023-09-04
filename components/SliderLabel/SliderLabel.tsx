import { createStyles, RangeSlider, rem } from '@mantine/core';

// add props for setting the default value
// add props for setting the min and max values
// add props for setting the step value
// add props for setting the label
// add props for setting the labelAlwaysOn
// add props for setting the classNames
// add props for setting the styles
interface SliderLabelProps {
	defaultValue: [number, number];
	min: number;
	max: number;
	labelPrefix?: string;
	thumbWidth?: number;
}



const useStyles = createStyles((theme) => ({
	label: {
		top: 0,
		height: rem(28),
		lineHeight: rem(28),
		width: rem(34),
		padding: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 700,
		backgroundColor: 'transparent',
	},

	thumb: {
		backgroundColor: theme.colors[theme.primaryColor][6],
		height: rem(28),
		// padding: rem(14),
		width: rem(34),
		border: 'none',
	},

	dragging: {
		transform: 'translate(-50%, -50%)',
	},

	root: {
		marginTop: rem(20),
		marginBottom: rem(20),
	}
}));

export function SliderLabel(props: SliderLabelProps) {
	const { classes } = useStyles();
	const { defaultValue, min, max, labelPrefix, thumbWidth } = props;
	return <RangeSlider
		defaultValue={defaultValue}
		min={min}
		max={max}
		labelAlwaysOn
		classNames={{ ...classes }}
		styles={{ thumb: { width: `${rem(thumbWidth) || 34}` } }}
		label={(value) => `${labelPrefix || ''}${value}`}
	/>;
	// return <RangeSlider labelAlwaysOn defaultValue={[16, 30]} classNames={classes} />;
}