// import { ProductService } from "@services/productService";
import { CallService } from "@services/callService";
import { Request, Response } from "express";

export const callController = {
    signup_s2s(req: Request, res: Response): any {
        const response = CallService.sendSignUpS2S();
        res.json(response);
    },
    trigger_s2s(req: Request, res: Response): void {
        const response = CallService.sendTriggerS2S();
        res.json(response);
    },
    multi_signup_s2s(req: Request, res: Response): void {

    },
    async multi_trigger_s2s(req: Request, res: Response): Promise<void> {
        let count = 0;
        const maxRequests = 10; // gửi tối đa 10 lần
        const intervalMs = 5000; // 5 giây

        const intervalId = setInterval(async () => {
            await CallService.sendTriggerS2S();
            count++;

            if (count >= maxRequests) {
                clearInterval(intervalId);
                console.log("✅ Đã gửi đủ 10 request, dừng lại.");
            }
        }, intervalMs);

        res.json("🚀 Bắt đầu gửi request định kỳ...");
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
