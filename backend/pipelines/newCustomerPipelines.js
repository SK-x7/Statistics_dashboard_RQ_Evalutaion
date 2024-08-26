const dailyNewCustomersPipeline = [
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
        newCustomersCount: { $sum: 1 }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } // Sort by date
    }
  ];
  const monthlyNewCustomersPipeline = [
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
        newCustomersCount: { $sum: 1 }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1 } // Sort by year and month
    }
  ];
  const quarterlyNewCustomersPipeline = [
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
        newCustomersCount: { $sum: 1 }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.quarter": 1 } // Sort by year and quarter
    }
  ];
  const yearlyNewCustomersPipeline = [
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
        newCustomersCount: { $sum: 1 }
      }
    },
    {
      $sort: { "_id.year": 1 } // Sort by year
    }
  ];
  
  module.exports={dailyNewCustomersPipeline,quarterlyNewCustomersPipeline,yearlyNewCustomersPipeline,monthlyNewCustomersPipeline}