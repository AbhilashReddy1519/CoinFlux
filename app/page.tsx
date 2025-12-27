import React from "react";

const Home = () => {
	return (
		<>
			<div
				className="w-50 h-30 m-auto my-10 rounded-3xl"
				style={{
					boxShadow:
						"-5px 0px 10px yellow, 5px 0px 10px red",
				}}>
				<p className="text-5xl text-transparent bg-clip-text bg-linear-to-tr from-blue-500 via-red-600 to-purple-600">
					Coin Flux
				</p>
			</div>
		</>
	);
};

export default Home;
