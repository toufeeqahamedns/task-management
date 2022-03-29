import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(authCredentialDto: AuthCredentialDto): Promise<void>;
    signIn(authCredentialDto: AuthCredentialDto): Promise<{
        accessToken: string;
    }>;
}
