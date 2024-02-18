import Sales from "../modals/sales";
import { Express, Request, Response } from "express";

export default function (app: Express, _db: any) {
  app.post("/sales", async (req: Request, res: Response) => {
    const sale = new Sales(req.body);
    console.log(sale);
    try {
      await sale.save();
      res.status(200).send(sale);
    } catch (err) {
      res.status(500).send({ message: "Error adding sale", error: err });
    }
  });
  app.get("/sales", async (_req: Request, res: Response) => {
    try {
      const sales = await Sales.find();
      res.status(200).send(sales);
    } catch (err) {
      res.status(500).send({ message: "Error fetching sales", error: err });
    }
  });
}
