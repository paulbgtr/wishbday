import { createUser, getUserByEmail } from "../db/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

  static async signIn(ctx) {
    try {
      const { email, password } = ctx.request.body;

      if (!email || !password) {
        ctx.throw(400, "Email and password required");
      }

      const [userExists] = await getUserByEmail(email);

      if (!userExists) {
        ctx.throw(400, "User does not exist");
      }

      if (!(await bcrypt.compare(password, userExists.password))) {
        ctx.throw(400, "Password is incorrect");
      }

      const token = jwt.sign({ userId: userExists.id }, "test", {
        expiresIn: "7d",
      });

      ctx.cookies.set("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      });

      ctx.body = {
        message: "User logged in successfully",
      };
    } catch (err) {
      ctx.throw(500, err.message);
    }
  }
}

export default AuthController;
