import React from 'react';

class ImageList extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.isChecked = this.isChecked.bind(this);
	}

	isChecked(img) {
		if(this.props.queue){
			const found = this.props.queue.find((item) => img.id === item.image.id);
			if(found)
				return found;
			else
				return false;
		}
		else
			return false;
	}

	handleChange() {
		//placeholder
	}

	handleClick(checked, image) {
		this.props.callback(checked, image);
	}

	render() {
		const { images } = this.props;

		if (!images) {
			return <h4>Não há imagens na galeria.</h4>
		}

		return images.map((image) => {
			const checked = this.isChecked(image);
			return <div key={image.id} className="col-3">
				<div className={`ImageItem ${checked ? 'checked' : ''}`} onClick={() => this.handleClick(checked, image)}>
					<div className="ImageItem-bg">
						<img src={require(`../data/images/${image.path}`)} alt={image.description} title={image.name}/>
					</div>
					<input type="checkbox" checked={checked} onChange={this.handleChange} />
				</div>
			</div>
		});
	}
}

export default ImageList;