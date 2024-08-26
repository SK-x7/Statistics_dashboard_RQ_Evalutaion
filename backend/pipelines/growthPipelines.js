const dailyGrowthPipeline = [
    {
      $match: {
        cancelled_at: null, // Exclude cancelled orders
        confirmed: true     // Include only confirmed orders
      }
    },
    {
      $addFields: {
        createdAtDate: {
          $dateFromString: { dateString: "$created_at" } // Convert string to date
        }
      }
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAtDate" },
          month: { $month: "$createdAtDate" },
          day: { $dayOfMonth: "$createdAtDate" }
        },
        totalSales: {
          $sum: { $toDouble: "$total_price_set.shop_money.amount" }
        }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } // Sort by year, month, and day
    },
    {
      $setWindowFields: {
        sortBy: { "_id.year": 1, "_id.month": 1, "_id.day": 1 },
        output: {
          previousSales: {
            $shift: {
              output: "$totalSales",
              by: -1
            }
          }
        }
      }
    },
    {
      $addFields: {
        salesGrowthRate: {
          $cond: [
            { $eq: ["$previousSales", 0] },
            0,
            {
              $multiply: [
                {
                  $divide: [
                    { $subtract: ["$totalSales", "$previousSales"] },
                    "$previousSales"
                  ]
                },
                100
              ]
            }
          ]
        }
      }
    },
    {
      $project: {
        _id: 1,
        totalSales: 1,
        previousSales: 1,
        salesGrowthRate: 1
      }
    }
  ];
  
  
  
  const monthlyGrowthPipeline = [
    {
      $match: {
        cancelled_at: null, // Exclude cancelled orders
        confirmed: true     // Include only confirmed orders
      }
    },
    {
      $addFields: {
        createdAtDate: {
          $dateFromString: { dateString: "$created_at" } // Convert string to date
        }
      }
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAtDate" },
          month: { $month: "$createdAtDate" }
        },
        totalSales: {
          $sum: { $toDouble: "$total_price_set.shop_money.amount" }
        }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1 } // Sort by year and month
    },
    {
      $setWindowFields: {
        sortBy: { "_id.year": 1, "_id.month": 1 },
        output: {
          previousSales: {
            $shift: {
              output: "$totalSales",
              by: -1
            }
          }
        }
      }
    },
    {
      $addFields: {
        salesGrowthRate: {
          $cond: [
            { $eq: ["$previousSales", 0] },
            0,
            {
              $multiply: [
                {
                  $divide: [
                    { $subtract: ["$totalSales", "$previousSales"] },
                    "$previousSales"
                  ]
                },
                100
              ]
            }
          ]
        }
      }
    },
    {
      $project: {
        _id: 1,
        totalSales: 1,
        previousSales: 1,
        salesGrowthRate: 1
      }
    }
  ];
  
  const quarterlyGrowthPipeline = [
    {
      $match: {
        cancelled_at: null, // Exclude cancelled orders
        confirmed: true     // Include only confirmed orders
      }
    },
    {
      $addFields: {
        createdAtDate: {
          $dateFromString: { dateString: "$created_at" } // Convert string to date
        }
      }
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAtDate" },
          quarter: { $ceil: { $divide: [{ $month: "$createdAtDate" }, 3] } } // Calculate the quarter
        },
        totalSales: {
          $sum: { $toDouble: "$total_price_set.shop_money.amount" }
        }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.quarter": 1 } // Sort by year and quarter
    },
    {
      $setWindowFields: {
        sortBy: { "_id.year": 1, "_id.quarter": 1 },
        output: {
          previousSales: {
            $shift: {
              output: "$totalSales",
              by: -1
            }
          }
        }
      }
    },
    {
      $addFields: {
        salesGrowthRate: {
          $cond: [
            { $eq: ["$previousSales", 0] },
            0,
            {
              $multiply: [
                {
                  $divide: [
                    { $subtract: ["$totalSales", "$previousSales"] },
                    "$previousSales"
                  ]
                },
                100
              ]
            }
          ]
        }
      }
    },
    {
      $project: {
        _id: 1,
        totalSales: 1,
        previousSales: 1,
        salesGrowthRate: 1
      }
    }
  ];
  
  const yearlyGrowthPipeline = [
    {
      $match: {
        cancelled_at: null, // Exclude cancelled orders
        confirmed: true     // Include only confirmed orders
      }
    },
    {
      $addFields: {
        createdAtDate: {
          $dateFromString: { dateString: "$created_at" } // Convert string to date
        }
      }
    },
    {
      $group: {
        _id: { year: { $year: "$createdAtDate" } },
        totalSales: {
          $sum: { $toDouble: "$total_price_set.shop_money.amount" }
        }
      }
    },
    {
      $sort: { "_id.year": 1 } // Sort by year
    },
    {
      $setWindowFields: {
        sortBy: { "_id.year": 1 },
        output: {
          previousSales: {
            $shift: {
              output: "$totalSales",
              by: -1
            }
          }
        }
      }
    },
    {
      $addFields: {
        salesGrowthRate: {
          $cond: [
            { $eq: ["$previousSales", 0] },
            0,
            {
              $multiply: [
                {
                  $divide: [
                    { $subtract: ["$totalSales", "$previousSales"] },
                    "$previousSales"
                  ]
                },
                100
              ]
            }
          ]
        }
      }
    },
    {
      $project: {
        _id: 1,
        totalSales: 1,
        previousSales: 1,
        salesGrowthRate: 1
      }
    }
  ];
  
  module.exports={dailyGrowthPipeline,monthlyGrowthPipeline,quarterlyGrowthPipeline,yearlyGrowthPipeline}