import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Thanks extends Component {

    render() {
        const order = this.props.order || {nome: 'Usuário', totalDownloads: 0};
        const firstName = order.nome.split(' ')[0];
        const totalDownloads = order.totalDownloads;
        return <div>
            <div className="col bg-dark text-white">
                <h1 className="navbar-brand">IMAGE CMS</h1>
            </div>
            <div className="m-2 text-center">
                <h2>Obrigado!</h2>
                <p>{firstName}, você realizou { totalDownloads } download(s).</p>
                <Link to="/" className="btn btn-primary">
                    Retornar para galeria.
                </Link>
            </div>
        </div>
    }
}
