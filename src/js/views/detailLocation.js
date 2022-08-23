import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Location } from "../component/details/location";

const DetailLocation = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params)
	useEffect(() => {
		actions.loadInfoData(params.category, params.theid);
	}, []);
	const getcomponentByCategory = category => {
	    if (category == "location") {
			return <LocationDetail value={store.result.properties} />;
	};
};
	return (
		<div className="container">
			<h1>{store.result.properties ? store.result.properties.name : ""}</h1>
			<img className="rounded mx-auto d-block" src="https://th.bing.com/th/id/R.cbf86e42d4dabbd07069b35e42e8c062?rik=oX4Ly63EEvERCw&riu=http%3a%2f%2fi1.kym-cdn.com%2fphotos%2fimages%2foriginal%2f000%2f692%2f455%2ff16.gif&ehk=ezAIvUC1ALr0YAkxLzlLl3D4JSP8dUhJcY7TTP%2ft%2fBk%3d&risl=&pid=ImgRaw&r=0" />
			<br />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat sodales leo, id feugiat metus
				semper sed. Pellentesque dapibus metus quis volutpat mattis. Donec commodo mollis magna, non ornare quam
				tincidunt at. Fusce eu nibh eget ex luctus venenatis. Sed at odio blandit, euismod quam nec, iaculis
				ante.
			</p>
			<br />
			{getcomponentByCategory(params.category)}
			<br />
			<div className="text-center">
				<Link to="/">
					<button className="btn btn-primary btn-lg">Back home</button>
				</Link>
			</div>
		</div>
	);
    };
    
export default DetailLocation;