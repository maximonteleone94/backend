class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
    }

    isCodeUnique(code) {
        return this.products.some((product) => product.code === code);
    }

    validateFields (product) {
        return (
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock
        )
    }

    addProduct(product) {
        if(this.isCodeUnique(product.code)) {
            console.log('Este producto ya existe');
        }
        if(!this.validateFields(product)) {
            console.log('Todos los campos del producto deben ser ingresados');
        }
        const newProduct = {
            ...product,
            id: ++this.id
        }
        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        return product ? product : 'Product not found';
    }
}

const product1 = {
    title: 'APC',
    description: 'Limpiador Multi proposito Liquido',
    price: 1200,
    thumbnail: 'https://www.facebook.com/photo/?fbid=5341924442501948&set=pcb.5341924599168599',
    code: '0001',
    stock: 10
};
const product2 = {
    title: 'Limpia Cristales',
    description: 'Limpia Cristales',
    price: 990,
    thumbnail: 'https://m.facebook.com/MRMDetailing/photos/%EF%B8%8Fultra-glass-cleaner-500ml-limpia-vidrios-con-antiempa%C3%B1ante200/2358457187515370/',
    code: '0002',
    stock: 10
};

const manager = new ProductManager();
console.log(manager.getProducts());
manager.addProduct(product1);
console.log(manager.getProducts());
manager.addProduct(product2);
console.log(manager.getProductById(2));
console.log(manager.getProducts());