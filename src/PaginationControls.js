import React, { Component } from "react";
import { PaginationButtons } from "./PaginationButtons";

export class PaginationControls extends Component {

    constructor(props) {
        super(props);
        this.pageSizes = this.props.sizes || [1, 3, 5];
        this.arrayKeys = [
            {label: "nome", value: "name"},
            {label: "descrição", value: "description"}
        ];
        this.sortKeys = this.props.keys || this.arrayKeys;
    }

    handlePageSizeChange = (ev) => {
        this.props.setPageSize(ev.target.value);
    }

    handleSortPropertyChange = (ev) => { 
        this.props.setSortProperty(ev.target.value);
    }

    render() {
        return <div className="m-2">
                <div className="text-center m-1">            
                    <PaginationButtons currentPage={this.props.currentPage} 
                        pageCount={this.props.pageCount} 
                        navigate={ this.props.navigateToPage }/>
                </div>
                <div className="form-inline justify-content-center">
                    <select className="form-control"
                            onChange={ this.handlePageSizeChange } 
                            value={ this.props.pageSize|| this.pageSizes[0] }>
                        { this.pageSizes.map(s => 
                            <option value={s} key={s}>{s} por página</option>
                        )}
                    </select>
                    <select className="form-control"
                            onChange={ this.handleSortPropertyChange } 
                            value={ this.props.sortKey || this.sortKeys[0].value }>
                        { this.sortKeys.map(k => 
                            <option value={k.value} key={k.value}>
                                Ordenar por { k.label }
                            </option>
                        )}
                    </select>
            </div>
        </div>
    }
}
