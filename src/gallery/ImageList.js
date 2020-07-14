import React from 'react';

class ImageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id, evt) {
		if (this.state[id]) 
			this.setState({ ...this.state, [id]: false });
		else
			this.setState({ ...this.state, [id]: true });
	}

	handleChecked(evt) {
		evt.preventDefault();
	}

	render() {
		const images = this.props.images ? this.props.images : undefined;

		if (!images) {
			return <h4>Não há imagens na galeria.</h4>
		}

		return images.map((img) =>
			<div key={img.id} className="col-3">
				<div className={`item-img ${this.state[img.id] ? 'selected' : ''}`} onClick={ () => this.handleClick(img.id)}>
					<img src={require(`../data/images/${img.path}`)} alt={img.description} title={img.name}/>
					<input type="checkbox" defaultChecked={ this.state[img.id] } onClick={ (evt)=> evt.preventDefault() } />
				</div>
			</div>
		);
	}
}

export default ImageList;