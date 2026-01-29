import React, { useEffect, useState } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

type BackgroundProps = {
	className: string;
};

const Background = ({ className }: BackgroundProps) => {
	const count = 150;

	const [stars, setStars] = useState<Star[]>([]);

	useEffect(() => {
		const starsList: Star[] = [];

		for (let i = 0; i < count; i++) {
			const x = Math.random() * 99;
			const y = Math.random() * 99;            // 0 - 100%

			const size = 1 + Math.random() * 2;      // Static stars smaller

			const duration = 2 + Math.random() * 3;  // 2 to 5 seconds
			const delay = Math.random() * 5;         // 0 to 5 seconds

			starsList.push({ x, y, size, duration, delay });
		}

		setStars(starsList);
	}, [count]);

	return (
		<div
			id="star-container"
			className={`w-full h-full ${className}`}
			style={{
				background: `radial-gradient(circle,rgba(33, 29, 73, 1) 0%, rgba(1, 2, 11, 1) 100%)`,
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
						"--duration": `${star.duration}s`,
						"--delay": `${star.delay}s`,
					} as React.CSSProperties}
					/>
				))}
			</div>
		</div>
	);
};

export default Background;
