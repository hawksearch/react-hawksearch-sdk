import * as React from 'react';

interface DashCircleSVGProps {
	class: string;
}

/**
 * Dash circle SVG
 *
 * @returns
 */
class DashCircleSVG extends React.Component<DashCircleSVGProps> {
	constructor(props) {
		super(props);
	}

	public static defaultProps: Partial<DashCircleSVGProps> = {
		class: '',
	};

	public render() {
		return (
			<svg
				viewBox="0 0 32 32"
				className={'icon icon-help-header ' + this.props.class}
				focusable="false"
				aria-hidden="true"
			>
				<path
					fill="#5c5c5c"
					d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16v0c0-8.837 7.163-16 16-16v0z"
				/>
				<path
					fill="#fff"
					d="M21.51 17.594h-11.733c-0.884 0-1.6-0.716-1.6-1.6s0.716-1.6 1.6-1.6h11.733c0.884 0 1.6 0.716 1.6 1.6s-0.716 1.6-1.6 1.6z"
				/>
			</svg>
		);
	}
}

export default DashCircleSVG;
