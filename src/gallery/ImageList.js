import React from 'react';

class ImageList extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(evt) {

		evt.currentTarget.classList.add('selected');
	}

	render() {
		const images = this.props.images ? this.props.images : undefined;

		if (!images) {
			return <h4>Não há imagens na galeria.</h4>
		}

		return images.map((img) =>
			<div key={img.id} className="col-3">
				<div className="item-img" onClick={this.handleClick}>
					<img src={require(`../data/images/${img.path}`)} alt={img.description} title={img.name}/>
					<input type="checkbox"/>
				</div>
			</div>
		);
	}
}

export default ImageList;