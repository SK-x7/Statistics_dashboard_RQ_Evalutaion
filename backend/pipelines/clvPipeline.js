const clvPipeline =[
    {
      $match: {
        confirmed: true,
        cancelled_at: null
      }
    },
    {
      $addFields: {
        created_at_date: { $dateFromString: { dateString: "$created_at" } }
      }
    },
    {
      $sort: { "created_at_date": 1 }
    },
    {
      $group: {
        _id: "$customer.email",
        firstPurchaseDate: { $first: "$created_at_date" },
        totalSpent: { $sum: { $toDouble: "$total_price_set.shop_money.amount" } }
      }
    },
    {
      $addFields: {
        cohortMonth: { $dateToString: { format: "%Y-%m", date: "$firstPurchaseDate" } }
      }
    },
    {
      $group: {
        _id: "$cohortMonth",
        totalCLV: { $sum: "$totalSpent" },
        customerCount: { $sum: 1 }
      }
    },
    {
      $sort: { "_id": 1 }
    }
  ];
  
  module.exports={clvPipeline}