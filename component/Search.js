import React, { Component } from 'react'

export default class Header extends Component {

    handleSearch = (event) => {
        this.props.searchmovie(event.target.value)
    }

    render() {
        return (
            <div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
                    </div>
                    <input type="text" class="form-control" placeholder="Type movie name to search"
                        // value={this.state.searchString}
                        onChange={this.handleSearch} aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>


                </div>
                )
            }
        }
