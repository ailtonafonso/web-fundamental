



exports.KPI = () => {
    const Methods = {};

    Methods.MaxProductValue = (req, res) => {
        const url = 'https://api.npoint.io/ddc99d2e9886c8d51328';
        const dbConnnection = connection.DataBase(url).getData();
        dbConnnection
            .then(result => analitcs.DataScience().MaxProductValue(rewsult))
            .then(resultAnalitycs => res.status(200).json(resultAnalitycs));
    }

    
    Methods.MaxProductAmountStatePurchase = (req, res) => {
        const url = 'https://api.npoint.io/ddc99d2e9886c8d51328';
        const dbConnnection = connection.DataBase(url).getData();
        dbConnnection
            .then(result => analitcs.DataScience().MaxProductAmountStatePurchase(rewsult))
            .then(resultAnalitycs => res.status(200).json(resultAnalitycs));
    }

    
    Methods.MaxProductAmountStateCustomer = (req, res) => {
        const url = 'https://api.npoint.io/ddc99d2e9886c8d51328';
        const dbConnnection = connection.DataBase(url).getData();
        dbConnnection
            .then(result => analitcs.DataScience().MaxProductAmountStateCustomer(rewsult))
            .then(resultAnalitycs => res.status(200).json(resultAnalitycs));
    }

    
    Methods.MaxProductAmountMoneyStatePurchase = (req, res) => {
        const url = 'https://api.npoint.io/ddc99d2e9886c8d51328';
        const dbConnnection = connection.DataBase(url).getData();
        dbConnnection
            .then(result => analitcs.DataScience().MaxProductAmountMoneyStatePurchase(rewsult))
            .then(resultAnalitycs => res.status(200).json(resultAnalitycs));
    }

    
    Methods.AverageProductAmountState = (req, res) => {
        const url = 'https://api.npoint.io/ddc99d2e9886c8d51328';
        const dbConnnection = connection.DataBase(url).getData();
        dbConnnection
            .then(result => analitcs.DataScience().AverageProductAmountState(rewsult))
            .then(resultAnalitycs => res.status(200).json(resultAnalitycs));
    }
}