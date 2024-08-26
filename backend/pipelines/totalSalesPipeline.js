const dailySalesAgg = [
  {
    $match: {
      cancelled_at: null,
      confirmed: true,
    },
  },
  {
    $addFields: {
      createdAtDate: { $dateFromString: { dateString: "$created_at" } },
    },
  },
  {
    $group: {
      _id: {
        year: { $year: "$createdAtDate" },
        month: { $month: "$createdAtDate" },
        day: { $dayOfMonth: "$createdAtDate" },
      },
      totalSales: { $sum: { $toDouble: "$total_price_set.shop_money.amount" } },
    },
  },
  {
    $sort: {
      "_id.year": 1,
      "_id.month": 1,
      "_id.day": 1,
    },
  },
];

const monthlySalesAgg = [
  {
    $match: {
      cancelled_at: null,
      confirmed: true,
    },
  },
  {
    $addFields: {
      createdAtDate: { $dateFromString: { dateString: "$created_at" } },
    },
  },
  {
    $group: {
      _id: {
        year: { $year: "$createdAtDate" },
        month: { $month: "$createdAtDate" },
      },
      totalSales: { $sum: { $toDouble: "$total_price_set.shop_money.amount" } },
    },
  },
  {
    $sort: {
      "_id.year": 1,
      "_id.month": 1,
    },
  },
];
const quarterlySalesAgg = [
  {
    $match: {
      cancelled_at: null,
      confirmed: true,
    },
  },
  {
    $addFields: {
      createdAtDate: { $dateFromString: { dateString: "$created_at" } },
    },
  },
  {
    $group: {
      _id: {
        year: { $year: "$createdAtDate" },
        quarter: {
          $ceil: { $divide: [{ $month: "$createdAtDate" }, 3] },
        },
      },
      totalSales: { $sum: { $toDouble: "$total_price_set.shop_money.amount" } },
    },
  },
  {
    $sort: {
      "_id.year": 1,
      "_id.quarter": 1,
    },
  },
];

const yearlySalesAgg = [
  {
    $match: {
      cancelled_at: null,
      confirmed: true,
    },
  },
  {
    $addFields: {
      createdAtDate: { $dateFromString: { dateString: "$created_at" } },
    },
  },
  {
    $group: {
      _id: { year: { $year: "$createdAtDate" } },
      totalSales: { $sum: { $toDouble: "$total_price_set.shop_money.amount" } },
    },
  },
  {
    $sort: {
      "_id.year": 1,
    },
  },
];

module.exports={dailySalesAgg,monthlySalesAgg,quarterlySalesAgg,yearlySalesAgg}

