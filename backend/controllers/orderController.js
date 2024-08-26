
const { yearlyGrowthPipeline, quarterlyGrowthPipeline, monthlyGrowthPipeline, dailyGrowthPipeline } = require("../pipelines/growthPipelines");
const {dailySalesAgg,monthlySalesAgg,quarterlySalesAgg,yearlySalesAgg}=require("../pipelines/totalSalesPipeline");
const { yearlyRepeatCustomersPipeline, quarterlyRepeatCustomersPipeline, monthlyRepeatCustomersPipeline, dailyRepeatCustomersPipeline } = require("../pipelines/repeatCustomers");
const { clvPipeline } = require("../pipelines/clvPipeline");


const { getDatabase } = require("../server");

const dbName=process.env.DB_NAME;
const orderCollection=process.env.ORDER_COLLECTION;

exports.getTotalSales=async (req, res, next)=>{
    try {
      const db = await getDatabase(dbName);
      const Orders = db.collection(orderCollection);
      let Agg;
      let timeline = req.params.timeline;
      let year = req.params.year;
      console.log(timeline);
      if (timeline == "lifetime") {
        Agg = yearlySalesAgg
      } else if (timeline === "quarterly") {
        Agg = quarterlySalesAgg
      } else if (timeline === "yearly") {
        Agg = monthlySalesAgg
      } else if (timeline === "monthly") {
        Agg = dailySalesAgg;
      } else {
        return res.status(404).json({
          status: "failed",
          message: "Invalid timeline",
          suggestion: "Valid timeline are lifetime, quarterly, yearly, monthly",
        });
      }
  
      const result = await Orders.aggregate(Agg).toArray(); // Use async/await to get the result
  
      if (result.length) {
        res.json({
          length: result.length,
          result,
        }); // Send the result if documents are found
      } else {
        res.status(404).send({ data: "No documents found" }); // Send a 404 response if no documents are found
      }
    } catch (error) {
      res.status(500).send({ error: error.message }); // Handle errors properly
    }
  }
  
  
  exports.getGrowth =async (req, res, next) => {
    try {
      const db = await getDatabase(dbName);
      const Orders = db.collection(orderCollection);
  
      let Agg;
      let timeline = req.params.timeline;
      if (timeline === "lifetime") {
        Agg = yearlyGrowthPipeline
      } else if (timeline === "quarterly") {
        Agg = quarterlyGrowthPipeline
      } else if (timeline === "yearly") {
        Agg = monthlyGrowthPipeline
      } else if (timeline === "monthly") {
        Agg = dailyGrowthPipeline
      } else {
        return res.status(404).json({
          status: "failed",
          message: "Invalid timeline",
          suggestion: "Valid timeline are lifetime, quarterly, yearly, monthly",
        });
      }
  
      const result = await Orders.aggregate(Agg).toArray(); // Use async/await to get the result
  
      if (result.length) {
        res.json({
          length: result.length,
          result,
        }); // Send the result if documents are found
      } else {
        res.status(404).send({ data: "No documents found" }); // Send a 404 response if no documents are found
      }
    } catch (error) {
      res.status(500).send({ error: error.message }); // Handle errors properly
    }
  }
  
  exports.getRepeatCustomers=async (req, res, next) => {
    try {
      const db = await getDatabase(dbName);
      const Orders = db.collection(orderCollection);
  
      let Agg;
      let timeline = req.params.timeline;
      if (timeline === "lifetime") {
        Agg = yearlyRepeatCustomersPipeline
      } else if (timeline === "quarterly") {
        Agg = quarterlyRepeatCustomersPipeline
      } else if (timeline === "yearly") {
        Agg = monthlyRepeatCustomersPipeline
      } else if (timeline === "monthly") {
        Agg = dailyRepeatCustomersPipeline
      } else {
        return res.status(404).json({
          status: "failed",
          message: "Invalid timeline",
          suggestion: "Valid timeline are lifetime, quarterly, yearly, monthly",
        });
      }
  
      const result = await Orders.aggregate(Agg).toArray(); // Use async/await to get the result
  
      if (result.length) {
        res.json({
          length: result.length,
          result,
        }); // Send the result if documents are found
      } else {
        res.status(404).send({ data: "No documents found" }); // Send a 404 response if no documents are found
      }
    } catch (error) {
      res.status(500).send({ error: error.message }); // Handle errors properly
    }
  }
  
  
  
  exports.getClv=async (req, res, next) => {
    try {
      const db = await getDatabase(dbName);
      const Orders = db.collection(orderCollection);
  
      const result = await Orders.aggregate(clvPipeline).toArray(); // Use async/await to get the result
  
      if (result.length) {
        res.json({
          length: result.length,
          result,
        }); // Send the result if documents are found
      } else {
        res.status(404).send({ data: "No documents found" }); // Send a 404 response if no documents are found
      }
    } catch (error) {
      res.status(500).send({ error: error.message }); // Handle errors properly
    }
  }