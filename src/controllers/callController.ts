// import { ProductService } from "@services/productService";
import { CallService } from "@services/callService";
import { Request, Response } from "express";

export const callController = {
    signup_s2s(req: Request, res: Response): any {
        const result = CallService.sendSignUpS2S()
    },
    trigger_s2s(req: Request, res: Response): void {

    },
    multi_signup_s2s(req: Request, res: Response): void {

    },
    multi_trigger_s2s(req: Request, res: Response): void {

    }
    // async handleHomePage(req: Request, res: Response): Promise<void> {
    //     res.send("Home Page");
    // },
    // async handleAddProduct(req: Request, res: Response): Promise<void> {
    //     const product = await ProductService.create({
    //         name: "New Product",
    //         price: 100,
    //     });
    //     res.json({
    //         success: true,
    //         product,
    //     });
    // },
};
