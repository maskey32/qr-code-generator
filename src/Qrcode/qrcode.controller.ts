import { Controller, Get } from "@nestjs/common";
import { QrcodeService } from "./qrcode.service";

@Controller('qrcode')
export class QrcodeController {
    constructor(private qrcodeService: QrcodeService) {}

    @Get()
    async getQrcode(): Promise<{ message: string; result: string; }> {
        const qrcode = await this.qrcodeService.getQrcode();

        return {
            message: 'Successfully fetched QR Code',
            result: qrcode
        }
    }
};