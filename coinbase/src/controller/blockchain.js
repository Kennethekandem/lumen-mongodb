const CoinKey = require('coinkey')
const ci = require('coininfo')

class Blockchain {

    static generate = async (req, res) => {

        const ck = CoinKey.createRandom();

        const private_key = ck.privateKey.toString('hex');
        console.log(private_key)

        const keyPair = new CoinKey(new Buffer.from(private_key, 'hex'));

        // const network = 'mainne';

        // keyPair.versions = ci('BTC-TEST').versions;

        const address = keyPair.publicAddress;
        const wif = keyPair.privateWif;

        let updated_at, created_at;
        created_at = updated_at = Date.now();

        res.json({
            private_key,
            wif,
            address
        })

    }
}

module.exports = Blockchain
