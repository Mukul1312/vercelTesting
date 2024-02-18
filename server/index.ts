import express, { Express } from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import Sales from "./modals/sales";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { initTRPC } from "@trpc/server";
import { z } from "zod";
var cors = require("cors");

// import salesRoutes from "./routes";
// import { publicProcedure, router } from "./trpc";

const app: Express = express();

const uri = "mongodb+srv://mukul1312:zHnPE0bXI15yzdg7@testing.6izewpb.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: any) => console.log(err));
app.use(cors());

// const PORT = 3001;

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = Awaited<ReturnType<typeof createContext>>;
export const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  // find all sales in the database and return them
  getSales: t.procedure.query(async () => {
    const sales = await Sales.find({});
    return sales;
  }),
});
export type AppRouter = typeof appRouter;

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(4000);

// salesRoutes(app, {});

// const appRouter = router({
//   greeting: publicProcedure.query(() => "hello tRPC v10!"),
// });

// Export only the type of a router!
// This prevents us from importing server code on the client.
// export type AppRouter = typeof appRouter;

// app.use("/trpc", createExpressMiddleware({ router: appRouter }));

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
