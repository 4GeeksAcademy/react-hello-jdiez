import React from "react";
import Navbar from "./Navbar";
import { Hero } from "./Hero";
import { Card } from "./Card";
import { Footer } from "./Footer";

//create your first component
const Home = () => {

	const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam rem, perspiciatis magni aspernatur et quam ex dolor labore exercitationem veritatis necessitatibus vero neque, incidunt consequuntur, nobis ipsum excepturi vel cumque.";

	return (
		<>
			<Navbar />
			<div className="container">
				<Hero />
				<div className="d-flex gap-4 text-center">
					<Card title="Copa Argentina" description={description} image="https://www.fiebrefutbol.es/wp-content/uploads/2012/08/Posesi%C3%B3n-001-Recibe-bal%C3%B3n-en-el-cuadrado-7x7.jpg" />
					<Card title="Liga Profesional" description={description} image="https://static.vecteezy.com/system/resources/previews/026/388/726/non_2x/football-scene-with-soccer-player-on-futuristic-digital-background-generative-ai-photo.jpg" />
					<Card title="Copa Sudamericana" description={description} image="https://previews.123rf.com/images/alphaspirit/alphaspirit1606/alphaspirit160600008/59132375-los-jugadores-de-f%C3%BAtbol-juegan-en-un-estadio-con-la-audiencia.jpg" />
					<Card title="Copa Libertadores" description={description} image="https://img.freepik.com/fotos-premium/jugadores-futbol-estadio-estadio-al-fondo_801994-406.jpg" />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
