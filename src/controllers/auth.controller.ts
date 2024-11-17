import { Request, Response } from 'express';
import AuthService from '../services/auth.service';


export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await AuthService.login(email, password);
    res.status(200).json({ token }); 
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await AuthService.register(email, password);
    res.status(201).json({ user }); 
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

