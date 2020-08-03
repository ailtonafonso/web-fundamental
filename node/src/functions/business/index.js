

const business = express.Router();
business.get('/ping', (req, res)=> {res.status(200).json('ping')});
module.exports = business;

const produto = {nomeProduto, valorProduto};
const valorMaximoProduto = Object.keys(produto)
                                  .filter(key => key !== '')
                                  .map(key => ({ [key]: produto[key] }))
                                  .reduce((accumulator, current) =>
                                      ({ ...accumulator, ...current }),
                                      {}
                                  )
 
console.log('valor maximo e o nome do produto: ', valorMaximoProduto);


