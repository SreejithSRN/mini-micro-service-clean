import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { cartRoutes } from "../infrastructure/routes/cartRoutes";
import { dependencies } from "../config/dependencies";

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 8004;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", cartRoutes(dependencies));

const errorHandler: any = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  const errorResponse = {
    errors: [{ message: err?.message || "Something went wrong" }],
  };
  return res.status(500).json(errorResponse);
};

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`connected to Cart Service at ${PORT}`);
});

export default app;
