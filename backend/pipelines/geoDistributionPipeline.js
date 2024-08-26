const geographicalDistributionPipeline = [
    {
      $match: {
        "default_address.city": { $exists: true }
      }
    },
    {
      $group: {
        _id: "$default_address.city",
        customerCount: { $sum: 1 }
      }
    },
    {
      $sort: { customerCount: -1 } // Optional: sort by number of customers
    }
  ];
  
  module.exports={geographicalDistributionPipeline}