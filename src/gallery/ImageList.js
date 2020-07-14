import React from 'react';

class ImageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id, evt) {
		this.setState({ ...this.state, [id]: this.state[id] ? false : true })
	}

	render() {
		const images = this.props.images ? this.props.images : undefined;

		if (!images) {
			return <h4>Não há imagens na galeria.</h4>
		}

		return images.map((img) =>
			<div key={img.id} className="col-3">
				<div className={`ItemImage ${this.state[img.id] ? 'selected' : ''}`} onClick={ () => this.handleClick(img.id)}>
					<div className="ItemImage-bg">
						<img src={require(`../data/images/${img.path}`)} alt={img.description} title={img.name}/>
					</div>
					<input type="checkbox" defaultChecked={ this.state[img.id] } onClick={ (evt)=> evt.preventDefault() } />
				</div>
			</div>
		);
	}
}

export default ImageList;