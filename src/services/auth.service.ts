import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
  static async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return { email, password: hashedPassword };
  }

  static async login(email: string, password: string) {
    const user = { email, password: 'hashed_password_from_db' };
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error('Invalid credentials');
    return jwt.sign({ email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  }
}

export default AuthService;

