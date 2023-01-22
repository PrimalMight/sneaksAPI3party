const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

export default async function handler(req, res) {
   const query = req.query;
   const { limit } = query;

   if(req.method === 'GET'){
      sneaks.getMostPopular(limit, function(err, products){
         if(err) return res.status(500).json({message: 'error on sneaks api side'});
         res.status(200).json(products)
     })
      
     
   }
   else{
       res.status(400).json({message: 'Invalid request method'});
   }
 }
 