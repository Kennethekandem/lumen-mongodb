var providers = {
    /**
     * Input: Address to retrieve the balance from.
     * Output: The balance in Satoshis.
     */
    balance: {
        mainnet: {
            blockexplorer: function (addr) {
                return request.get('https://blockexplorer.com/api/addr/' + addr + '/balance').send().then(function (res) {
                    return parseFloat(res.body);
                });
            },
            blockchain: function (addr) {
                return request.get('https://blockchain.info/q/addressbalance/' + addr + '?confirmations=6').send().then(function (res) {
                    return parseFloat(res.body);
                });
            }
        },
        testnet: {
            blockexplorer: function (addr) {
                return request.get('https://testnet.blockchain.info/q/addressbalance/' + addr + '/balance').send().then(function (res) {
                    return parseFloat(res.body);
                });
            }
        }
    },
    /**
     * Input: Requested processing speed. "fastest", "halfHour" or "hour"
     * Output: Fee rate in Satoshi's per Byte.
     */
    fees: {
        mainnet: {
            earn: function (feeName) {
                return request.get('https://bitcoinfees.earn.com/api/v1/fees/recommended').send().then(function (res) {
                    return res.body[feeName + "Fee"];
                });
            }
        },
        testnet: {
            earn: function (feeName) {
                return request.get('https://bitcoinfees.earn.com/api/v1/fees/recommended').send().then(function (res) {
                    return res.body[feeName + "Fee"];
                });
            }
        }
    },
    /**
     * Input: Sending user's BitCoin wallet address.
     * Output: List of utxo's to use. Must be in standard format. { txid, vout, satoshis, confirmations }
     */
    utxo: {
        mainnet: {
            blockexplorer: function (addr) {
                return request.get('https://blockchain.info/unspent?active=' + addr).send().then(function (res) {
                    return res.body.unspent_outputs.map(function (e) {
                        return {
                            txid: e.tx_hash_big_endian,
                            vout: e.tx_output_n,
                            satoshis: e.value,
                            confirmations: e.confirmations
                        };
                    });
                });
            },
            blockchain: function (addr) {
                return request.get('https://blockchain.info/unspent?active=' + addr).send().then(function (res) {
                    return res.body.unspent_outputs.map(function (e) {
                        return {
                            txid: e.tx_hash_big_endian,
                            vout: e.tx_output_n,
                            satoshis: e.value,
                            confirmations: e.confirmations
                        };
                    });
                });
            }
        },
        testnet: {
            blockexplorer: function (addr) {


                return axios.get('https://testnet-api.smartbit.com.au/v1/blockchain/address/'+addr+'/unspent').then(function (res) {
                    let data = res.data.unspent;

                    return data.map(function (e) {

                        return {
                            txid: e.txid,
                            vout: e.n,
                            satoshis: e.value_int,
                            confirmations: e.confirmations
                        };
                    });
                }).catch( function (err) {
                    return {
                        response: {
                            text: err
                        }
                    }
                });
            }
        }
    },
    /**
     * Input: A hex string transaction to be pushed to the blockchain.
     * Output: None
     */
    pushtx: {
        mainnet: {
            blockexplorer: function (hexTrans) {
                return request.post('https://blockexplorer.com/api/tx/send').send('rawtx=' + hexTrans);
            },
            blockchain: function (hexTrans) {
                return request.post('https://blockchain.info/pushtx').send('tx=' + hexTrans);
            }
        },
        testnet: {
            blockexplorer: function (hexTrans) {
                return request.post('https://testnet.blockexplorer.com/api/tx/send').send('rawtx=' + hexTrans);
            },
            blockcypher: function (hexTrans) {
                // return request.post('https://api.blockcypher.com/v1/btc/test3/txs/push').send('{"tx":"' + hexTrans + '"}');
                // return request.post('https://testnet.blockexplorer.com/api/tx/send').send('rawtx=' + hexTrans);

                return request.post('https://testnet-api.smartbit.com.au/v1/blockchain/pushtx').send(JSON.stringify({
                    "hex": hexTrans
                }));

            }
        }
    }
}
