type BackgroundProps = {
	className: string;
};

const Background = ({ className }: BackgroundProps) => {
	const count = 100;
	const stars = [];
	for (let i = 0; i < count; i++) {
		// Random Initial Positions
		const x = Math.random() * 99;
		const y = Math.random() * 99; // 0-100%

		const size = 1 + Math.random() * 2; // Static stars smaller

		stars.push({ x, y, size });
	}

	return (
		<div
			id="star-container"
			className={`w-full h-full ${className}`}
			style={{
				background: `radial-gradient(1200px 800px at 80% 10%, rgba(124, 58, 237, .25), transparent 60%),
                    radial-gradient(1000px 700px at 10% 90%, rgba(6, 182, 212, .22), transparent 55%),
                    #0b0f14`,
			}}
		>
			<div className="w-full h-full relative">
				{stars.map((star, index) => (
					<div
						key={index}
						className="star"
						style={{
							left: `${star.x}%`,
							top: `${star.y}%`,
							width: `${star.size}px`,
							height: `${star.size}px`,
						}}
					></div>
				))}
			</div>
		</div>
	);
};

export default Background;
