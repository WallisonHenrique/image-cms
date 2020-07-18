import React, { Component } from "react";
import { ValidatedForm } from "../forms/ValidatedForm";

export class Bait extends Component {

    constructor(props) {
        super(props);
        this.defaultAttrs = { type: "text", required: true };
        this.formModel = [
                { label: "Nome"},
                { label: "Email", attrs: { type: "email" }}]
    }

    handleSubmit = (formData) => {
        const order = { ...formData, totalDownloads: this.props.downloadItems, images: this.props.downloadQueue.map(item => 
            ({  quantity: item.quantity, image_id: item.image.id})) }

        this.props.placeOrder(order);
        this.props.downloadQueue.forEach((item) => {
            const url = require(`../data/images/${item.image.path}`);
            const anchor = document.createElement('a');

            anchor.href = url;
            anchor.download = url;

            anchor.click();
        });

        this.props.clearDownload();
        this.props.history.push("/thanks");
    }

    handleCancel = () => {
        this.props.history.push("/downloads");
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <h1 className="navbar-brand">IMAGE CMS</h1>
                </div>
            </div>        
            <div className="row">
                <div className="col m-2">
                    <ValidatedForm formModel={ this.formModel } 
                        defaultAttrs={ this.defaultAttrs } 
                        submitCallback={ this.handleSubmit } 
                        cancelCallback={ this.handleCancel } 
                        submitText="Fazer Download" 
                        cancelText="Retornar para Galeria" />
                </div>    
            </div>        
        </div>
    }
}
