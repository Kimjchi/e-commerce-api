const Product = require('../Models/product');

const getAll = async (req, res) => {  
    await Product
        .getAllProducts()
        .then(products => {
            res.status(200).json({      
                message:"Found",
                data: products['rows']
            });
        })
        .catch(e => {
            console.error(e.stack);
            res.status(400).json({       
                message: e.detail   
            });
        });
};

const getProductById = async (req, res) => {  
    const { id } = req.params;
    // Validate params
    if (!id) {
        res.status(400).json({       
            message:"Parameters missing"    
        });
    }
    await Product
        .getProductById(id)
        .then(product => {
            if (product['rows'][0]) {
                res.status(200).json({      
                    message:"Found",
                    data: product['rows'][0]
                });
            } else {
                res.status(404).json({       
                    message: "Product not found"  
                });
            }
        })
        .catch(e => {
            console.error(e.stack);
            res.status(404).json({       
                message: e.detail   
            });
        });
};

const updateProduct = async (req, res) => {  
    const { id } = req.params;
    const { name, description, price } = req.body;
    // Validate params
    if (!name || !description || !price || !id) {
        res.status(400).json({       
            message:"Parameters missing"    
        });
    }
    await Product
        .updateProduct(req.body, id)
        .then(data => {
            if (data.rowCount > 0) {
                res.status(200).json({       
                    message: "Updated" 
                });
            } else {
                res.status(404).json({       
                    message: "Product not found" 
                });
            }            
        })
        .catch(e => {
            console.error(e.stack);
            res.status(400).json({       
                message: e.detail   
            });
        });
};

const createProduct = async (req, res) => {  
    const { name, description, price } = req.body;
    // Validate params
    if (!name || !description || !price) {
        res.status(400).json({       
            message:"Parameters missing"    
        });
    }
    await Product
        .createProduct(req.body)
        .then(newProduct => {
            res.status(201).json({      
                message:"Created"
            });
        })
        .catch(e => {
            console.error(e.stack);
            res.status(400).json({       
                message: e.detail   
            });
        });
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    // Validate params
    if (!id) {
        res.status(400).json({       
            message:"Parameters missing"    
        });
    }
    await Product
        .deleteProductById(id)
        .then(data => {
            if (data.rowCount > 0) {
                res.status(200).json({       
                    message: "Deleted" 
                });
            } else {
                res.status(404).json({       
                    message: "Product not found" 
                });
            }            
        })
        .catch(e => {
            console.error(e.stack);
            res.status(400).json({       
                message: e.detail   
            });
        });
}

module.exports = {
    getAll,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct
};