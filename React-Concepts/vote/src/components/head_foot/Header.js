import React from 'react';

class Header extends Component {

  state = {(


  )}

  render (

    <div className='ui unstackable items'>
      <Product
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
      />
    </div>
  );
}
