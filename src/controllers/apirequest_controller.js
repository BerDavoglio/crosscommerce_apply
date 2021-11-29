const axios = require('axios');

function sortForMe(lists) {
    let verifier = false;
    while (!verifier) {
        verifier = true;
        for (let i = 1; i < lists.length; i++) {
            if (lists[i - 1] > lists[i]) {
                verifier = false;
                let t = lists[i - 1];
                lists[i - 1] = lists[i];
                lists[i] = t;
            }
        }
    }

    return lists;
}

class APIRequestController {
    async index(req, res) {
        try {
            let x = [];
            let val = 1;
            do {
                await axios.get('http://challenge.dienekes.com.br/api/numbers?page=' + val.toString())
                    .then(response => {
                        response.data.numbers.forEach(value => {
                            x.push(value);
                        })
                    })
                val++;
            } while (val < 10001)

            sortForMe(x);

            return res.json({"numbers": x});
        } catch (err) {
            return res.status(400).json({errors: err});
        }
    }
}

export default new APIRequestController();