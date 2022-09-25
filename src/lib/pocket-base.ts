import PocketBase from 'pocketbase';
import { DB_URL } from "../config";

export const client = new PocketBase(DB_URL);
