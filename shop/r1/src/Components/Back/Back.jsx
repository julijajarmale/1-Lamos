import CatsCrud from './Cats/Crud';
import ProductsCrud from './Products/Crud';
import Nav from './Nav'


function Back({show}) {

    if (show === 'admin'){
    return (
        <Nav>
<h1>Back</h1>
   </Nav>
    )
}
if (show === 'cats'){
    return (
<CatsCrud/>

    )
}

if (show === 'products'){
    return (
<ProductsCrud/>

    )
}
}
export default Back