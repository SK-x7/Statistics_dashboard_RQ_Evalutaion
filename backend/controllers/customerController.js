

const { geographicalDistributionPipeline } = require("../pipelines/geoDistributionPipeline");
const { yearlyNewCustomersPipeline, quarterlyNewCustomersPipeline, monthlyNewCustomersPipeline, dailyNewCustomersPipeline } = require("../pipelines/newCustomerPipelines");

const { getDatabase } = require("../server");
const dbName=process.env.DB_NAME;
const customerCollection=process.env.CUSTOMER_COLLECTION;

exports.getNewCustomers=async (req, res, next) => {
    try {
      const db = await getDatabase(dbName);
      const Customers = db.collection(customerCollection);
  
      let Agg;
      let timeline = req.params.timeline;
      if (timeline === "lifetime") {
        Agg = yearlyNewCustomersPipeline
      } else if (timeline === "quarterly") {
        Agg = quarterlyNewCustomersPipeline
      } else if (timeline === "yearly") {
        Agg = monthlyNewCustomersPipeline
      } else if (timeline === "monthly") {
        Agg = dailyNewCustomersPipeline
      } else {
        return res.status(404).json({
          status: "failed",
          message: "Invalid timeline",
          suggestion: "Valid timeline are lifetime, quarterly, yearly, monthly",
        });
      }
  
      const result = await Customers.aggregate(Agg).toArray(); // Use async/await to get the result
  
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
  

  
  
exports.getGeoDistribution=async (req, res, next) => {
    try {
      const db = await getDatabase(dbName);
      const Customers = db.collection(customerCollection);
  
      const result = await Customers.aggregate(
        geographicalDistributionPipeline
      ).toArray(); // Use async/await to get the result
  
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

