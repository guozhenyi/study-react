
function ProductRow(props) {
    const p = props.product;
    const name = p.stocked ? p.name : (<span style={{color:'red'}}>{p.name}</span>);
    return (
        <tr>
            <td>{name}</td>
            <td>{p.price}</td>
        </tr>
    );
}

function ProductCategoryRow(props) {
    const title = props.title;
    return (
        <tr>
            <th colSpan="2">{title}</th>
        </tr>
    );
}

function ProductTable(props) {
    const search = props.search;
    const stockOnly = props.stockOnly;
    const products = props.products;

    const rows = [];
    let lastCategory = null;

    products.forEach((p) => {
        if (p.name.indexOf(search) === -1) {
            return;
        }
        if (stockOnly && !p.stocked) {
            return;
        }
        if (p.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={p.category} key={p.category} />);
        }
        rows.push(<ProductRow product={p} key={p.name} />);
        lastCategory = p.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        let value;
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        } else {
            value = event.target.value;
        }
        // this.setState({[name]: value});
        this.props.onSearchChange(name, value);
    }

    render() {
        const search = this.props.search;
        const stockOnly = this.props.stockOnly;

        return (
            <div>
                <form name='form1'>
                    <div>
                        <input type="text" name="search" value={search} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="checkbox" name="stockOnly" checked={stockOnly} onChange={this.handleChange} />
                        <span>Only show products in stock</span>
                    </div>
                </form>
            </div>
        );
    }
}


class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            stockOnly: false,
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    convertDataToTree(products) {
        let catMap = {};
        products.map((p) => {
            if (p.category in catMap) {
                catMap[p.category].products.push({
                    name: p.name,
                    price: p.price,
                    stocked: p.stocked,
                });
            } else {
                catMap[p.category] = {
                    title: p.category,
                    products: [
                        {
                            name: p.name,
                            price: p.price,
                            stocked: p.stocked,
                        }
                    ]
                };
            }
        });

        return Object.values(catMap);
    }

    handleSearchChange(name, value) {
        console.log('change ', {[name]: value});

        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <SearchBar search={this.state.search} stockOnly={this.state.stockOnly} onSearchChange={this.handleSearchChange} />
                <ProductTable products={this.props.products} search={this.state.search} stockOnly={this.state.stockOnly} />
            </div>
        );
    }
}

const mockProducts = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

ReactDOM.render(
    <FilterableProductTable products={mockProducts} />,
    document.getElementById('product_jsx')
);


