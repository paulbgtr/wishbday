import { createUser, getUserByEmail } from "../db/db.js";

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

      // todo - hash password

      const user = await createUser(email, password);

      ctx.body = { user };
    } catch (err) {
      ctx.throw(500, err.message);
    }
  }
}

export default AuthController;
