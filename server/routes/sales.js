const mongoose = require("mongoose");
const Sales = require("../modals/sales");

module.exports = function (app, db) {
  app.post("/sales", async (req, res) => {
    const sale = new Sales(req.body);
    console.log(sale);
    try {
      await sale.save();
      res.status(200).send(sale);
    } catch (err) {
      res.status(500).send({ message: "Error adding sale", error: err });
    }
  });
  app.get("/sales", async (req, res) => {
    try {
      const sales = await Sales.find();
      res.status(200).send(sales);
    } catch (err) {
      res.status(500).send({ message: "Error fetching sales", error: err });
    }
  });
  app.get("/sales/:id", (req, res) => {
    Sales.findById(req.params.id, (err, sale) => {
      if (err) {
        res.status(500).send({ message: "Error fetching sale", error: err });
      }
      res.status(200).send(sale);
    });
  });
  app.put("/sales/:id", (req, res) => {
    Sales.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, sale) => {
      if (err) {
        res.status(500).send({ message: "Error updating sale", error: err });
      }
      res.status(200).send(sale);
    });
  });
  app.delete("/sales/:id", (req, res) => {
    Sales.findByIdAndDelete(req.params.id, (err, sale) => {
      if (err) {
        res.status(500).send({ message: "Error deleting sale", error: err });
      }
      res.status(200).send(sale);
    });
  });
};
