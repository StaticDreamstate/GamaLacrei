import Criptografia from "./Criptografia";
import bcrypt from "bcryptjs";

const criptografia = new Criptografia(bcrypt);
export { criptografia };
