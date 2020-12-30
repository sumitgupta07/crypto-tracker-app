import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addCryptoToken, removeCryptoToken, fetchCryptoData} from '../actions/crypto';

const CryptoPriceTracker = () => {
  const cryptoData = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, []);

  const handleRemoveToken = (e, symbol) => {
    if (cryptoData.activeCount > 1) {
      dispatch(removeCryptoToken(symbol));
    }
  };

  const handleAddToken = (e) => {
    if (cryptoData.activeCount < 10) {
      dispatch(addCryptoToken(e.target.value));
    }
  };

  const addToken = () => (
    <div className='select-container'>
      <label htmlFor='add-crypto'>Add Crypto Token</label>
      <select id='add-crypto' value={''} onChange={handleAddToken}>
        <option value=''>--add token--</option>
        {cryptoData.tokenList.map(
          (token) =>
            !token.selected && (
              <option value={token.symbol} key={token.id}>
                {token.symbol}
              </option>
            )
        )}
      </select>
    </div>
  );

  const tokenTable = () => (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>CMC Rank</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cryptoData &&
            cryptoData.tokenList.map(
              (token) =>
                token.selected && (
                  <tr key={token.id}>
                    <td>{token.symbol}</td>
                    <td>{token.cmc_rank}</td>
                    <td>{token.price}</td>
                    <td>
                      <button onClick={(e) => handleRemoveToken(e, token.symbol)} disabled={cryptoData.activeCount === 1}>
                        remove
                      </button>
                    </td>
                  </tr>
                )
            )}
        </tbody>
      </table>
    </div>
  );

  if (cryptoData.loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {addToken()}
      {tokenTable()}
    </>
  );
};

export default CryptoPriceTracker;
