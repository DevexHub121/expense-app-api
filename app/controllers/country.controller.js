const axios = require('axios');

exports.findAll = async (req, res) => {
  try {

    const config = {
        headers: {
          'X-CSCAPI-KEY': 'b1MzbmhRdnRkemZZaUxYM3hoRk1ydVJYeUNmdUxGZW8xY0djdW56UA==',
        },
      };
      
      axios.get('https://api.countrystatecity.in/v1/countries', config)
        .then(response => {
          console.log('response.data-------------------');
          console.log('response.data-------------------');
          console.log(response.data);
          res.json({ success: true, data:response.data });
        })
        .catch(error => {
            res.json({ success: false, data:error });
          console.error('Error:', error);
        });

  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err });
  }
};