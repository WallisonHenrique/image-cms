import React from 'react';
import DownloadQueueRow from './DownloadQueueRow';
import { Link } from 'react-router-dom';

class DownloadQueue extends React.Component {
	render() {
		return(
			<div className="DownloadQueue container">
				<div className="row">
					<div className="col">
						<h2 className="text-center">Fila de download:</h2>
						<Link to="/gallery" className="btn btn-dark m-2">Voltar para galeria</Link>
						<Link to="/bait" className={`btn btn-dark m-2 ${!this.props.downloadItems ? 'disabled' : ''}`}>Fazer download</Link>
						{this.props.downloadQueue 
							?<table className="table table-sm table-striped table-dark text-center">
								<thead>
								    <tr>
								      <th scope="col">Foto</th>
								      <th scope="col">Nome</th>
								      <th scope="col">Remover</th>
								    </tr>
								</thead>
								<tbody>
									<DownloadQueueRow queue={this.props.downloadQueue} removeFromDownload={this.props.removeFromDownload} />
								</tbody>
							</table>
							: <div className="text-center">Não há arquivos para download</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default DownloadQueue;