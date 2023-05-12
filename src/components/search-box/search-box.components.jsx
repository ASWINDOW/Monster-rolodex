import { Component } from "react";

class SearchBox extends Component {
    render() {
        return (
            <input
                // type="search"
                // placeholder="Search Monster"
                // onChange={(event) => {
                //     const searchString = event.target.value.toLowerCase();
                //     console.log(event.target.value);

                //     this.setState(() => {
                //         return { searchField: searchString }
                //     })
                // }}
                className={`search-box ${this.props.className} `}
                type="search"
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />

        );
    }
}
export default SearchBox