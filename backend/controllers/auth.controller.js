import { createUser, getUserByEmail } from "../db/db.js";
import bcrypt from "bcryptjs";

class AuthController {
  static async signUp(ctx) {
    try {
      const { email, password } = ctx.request.body;

      if (!email || !password) {
        ctx.throw(400, "Email and password required");
      }

      const [userExists] = await getUserByEmail(email);

      if (userExists) {
        ctx.throw(400, "User already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const [user] = await createUser(email, hashedPassword);

      ctx.body = { user };
    } catch (err) {
      ctx.throw(500, err.message);
    }
  }
}

export default AuthController;
