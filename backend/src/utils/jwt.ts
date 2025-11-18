import jwt from 'jsonwebtoken';
import { UserPayload } from '../types';

const ACCESS_SECRET: string = process.env.JWT_ACCESS_SECRET || 'access-secret';
const REFRESH_SECRET: string = process.env.JWT_REFRESH_SECRET || 'refresh-secret';
const ACCESS_EXPIRY = process.env.JWT_ACCESS_EXPIRY || '15m';
const REFRESH_EXPIRY = process.env.JWT_REFRESH_EXPIRY || '7d';

export const generateAccessToken = (payload: UserPayload): string => {
  return jwt.sign(payload as object, ACCESS_SECRET, { expiresIn: ACCESS_EXPIRY } as any);
};

export const generateRefreshToken = (payload: UserPayload): string => {
  return jwt.sign(payload as object, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRY } as any);
};

export const verifyAccessToken = (token: string): UserPayload => {
  return jwt.verify(token, ACCESS_SECRET) as UserPayload;
};

export const verifyRefreshToken = (token: string): UserPayload => {
  return jwt.verify(token, REFRESH_SECRET) as UserPayload;
};
