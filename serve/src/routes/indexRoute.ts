import { Request, Response, Application } from "express";
export default class IndexRoutes {
  public static routes(app: Application): void {
    app
      .route("/")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          hello: <string>"hii"
        });
      })
      .post((req: Request, res: Response) => {
        res.status(200).json({
          post: <string>"hell",
          body: req.body
        });
      });
  }
}
