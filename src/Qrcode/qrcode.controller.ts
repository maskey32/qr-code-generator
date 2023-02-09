import { Controller, Get } from "@nestjs/common";
import { QrcodeService } from "./qrcode.service";

@Controller('qrcode')
export class QrcodeController {
    constructor(private qrcodeService: QrcodeService) {}

    @Get()
    getQrcode() {
        const qrcode = this.qrcodeService.getQrcode();
    }
};