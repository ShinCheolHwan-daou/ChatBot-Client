function Portfolio({user, assets}) {
    return (
        <div className="text-white p-6 rounded-lg shadow-md w-full">
            <h2 className="text-lg font-semibold mb-4">💰 {user.name}님의 자산 현황</h2>
            {
                assets.map((asset) => {
                    switch (asset.category) {
                        case 0:
                            return (
                                <div key={`asset-category-${asset.category}`}>
                                    <p className="text-gray-300 mb-2">💵 현금 자산: <span
                                        className="font-bold text-green-400">{asset.amount.toLocaleString()}</span></p>
                                </div>
                            );
                        case 1:
                            return (<div key={`asset-category-${asset.category}`}>
                                <p className="text-gray-300 mb-4">📈 주식 자산: <span
                                    className="font-bold text-blue-400">300,000</span></p>
                                <div>
                                    {
                                        asset.user_stocks.map(stock => {
                                            const avg_price = stock.total_price / stock.quantity;
                                            const change_percent = ((stock.current_price - avg_price) / avg_price) * 100;
                                            const change_color = change_percent >= 0 ? "text-green-400" : "text-red-400";

                                            return (
                                                <div key={`user-stock-${stock.stock_name}`}
                                                     className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-3">
                                                    <h3 className="font-semibold text-lg">{stock.stock_name}</h3>
                                                    <p className="text-gray-400">보유
                                                        수량: {stock.quantity.toLocaleString()}주</p>
                                                    <p className="text-gray-400">평균
                                                        매수가: {avg_price.toLocaleString()}원</p>
                                                    <p className="text-gray-400">현재가: {stock.current_price.toLocaleString()}원</p>
                                                    <p className={`${change_color} font-semibold`}>
                                                        {change_percent.toFixed(2)}%
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>);
                        default:
                            return (<div key={`asset-category-${asset.category}`}></div>);
                    }
                })
            }
        </div>
    );
}

export default Portfolio;