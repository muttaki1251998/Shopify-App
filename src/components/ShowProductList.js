import React from 'react';
import { fetchProducts } from '../actions';
import { connect } from 'react-redux';

class ShowProductList extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
    console.log(this.props);
  }

  renderProducts(){
    return this.props.products.map(product => {
      return(
        <div className="column is-one-third" style={{padding:'40px 40px', marginTop:'100px'}}>
          <div className="card" >
            <div className="card-image" style={{padding: '20px 20px'}}>
              <img src={product.media.source} />
            </div>
            <div className="card-content">
              <div className="media-content">
                <p className="title is-4" style={{fontSize: '30px'}}>{product.name}</p>
                <span className="tag is-info is-light" style={{fontSize: '30px'}}>{product.price.formatted_with_symbol}</span>
              </div>
            </div>
          </div>
        </div>
      );
    })
  }
  
  render() {
    return(
      <div className="column columns is-multiline">
        {this.renderProducts()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { products: Object.values(state.shop) }
}

export default connect(mapStateToProps, { fetchProducts })(ShowProductList);