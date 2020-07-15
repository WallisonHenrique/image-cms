import React from 'react';
class DownloadQueueRow extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(item) {
		this.props.removeFromDownload(item.image);
	}

	render() {
		const {queue} = this.props;
		if(!queue || queue.length === 0)
			return <tr><td colSpan="3">Sua lista de download está vazia</td></tr>
		return queue.map((item, index) => 
			<tr key={item.image.id}>
				<td><img src={require(`../data/images/${item.image.path}`)}/></td>
				<td>{ item.image.name }</td>
				<td><input type="checkbox" onChange={() => this.handleChange(item)}/></td>
			</tr>
		)
	}
}

export default DownloadQueueRow;