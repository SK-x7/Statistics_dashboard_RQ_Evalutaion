const dailyRepeatCustomersPipeline = [
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
          customerId: "$customer.id",
          year: { $year: "$createdAtDate" },
          month: { $month: "$createdAtDate" },
          day: { $dayOfMonth: "$createdAtDate" }
        },
        purchaseCount: { $sum: 1 }
      }
    },
    {
      $match: { purchaseCount: { $gt: 1 } } // Filter customers with more than one purchase
    },
    {
      $group: {
        _id: {
          year: "$_id.year",
          month: "$_id.month",
          day: "$_id.day"
        },
        repeatCustomersCount: { $sum: 1 }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } // Sort by date
    }
  ];
  
  const monthlyRepeatCustomersPipeline = [
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
          customerId: "$customer.id",
          year: { $year: "$createdAtDate" },
          month: { $month: "$createdAtDate" }
        },
        purchaseCount: { $sum: 1 }
      }
    },
    {
      $match: { purchaseCount: { $gt: 1 } } // Filter customers with more than one purchase
    },
    {
      $group: {
        _id: {
          year: "$_id.year",
          month: "$_id.month"
        },
        repeatCustomersCount: { $sum: 1 }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1 } // Sort by year and month
    }
  ];
  const quarterlyRepeatCustomersPipeline = [
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
          customerId: "$customer.id",
          year: { $year: "$createdAtDate" },
          quarter: { $ceil: { $divide: [{ $month: "$createdAtDate" }, 3] } } // Calculate the quarter
        },
        purchaseCount: { $sum: 1 }
      }
    },
    {
      $match: { purchaseCount: { $gt: 1 } } // Filter customers with more than one purchase
    },
    {
      $group: {
        _id: {
          year: "$_id.year",
          quarter: "$_id.quarter"
        },
        repeatCustomersCount: { $sum: 1 }
      }
    },
    {
      $sort: { "_id.year": 1, "_id.quarter": 1 } // Sort by year and quarter
    }
  ];
  const yearlyRepeatCustomersPipeline = [
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
          customerId: "$customer.id",
          year: { $year: "$createdAtDate" }
        },
        purchaseCount: { $sum: 1 }
      }
    },
    {
      $match: { purchaseCount: { $gt: 1 } } // Filter customers with more than one purchase
    },
    {
      $group: {
        _id: { year: "$_id.year" },
        repeatCustomersCount: { $sum: 1 }
      }
    },
    {
      $sort: { "_id.year": 1 } // Sort by year
    }
  ];
  
  module.exports ={dailyRepeatCustomersPipeline,monthlyRepeatCustomersPipeline,yearlyRepeatCustomersPipeline,quarterlyRepeatCustomersPipeline}