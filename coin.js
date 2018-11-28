import React from 'react';

class CustomDropdown extends React.Component {
    render () {
        const cryptos = this.props.cryptos;
        return (
        <div>
        <form>
            <label>
                Cryptocurrency
            
            <select>
            {
                cryptos.map(crypto => {
                    return <option value={crypto.symbol} key={crypto.id}>{crypto.symbol}</option>
                })

            }

            </select>
            </label>
        </form>
        </div>    
        )
    }
}

export default CustomDropdown;