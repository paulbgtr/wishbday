import { createUser, getUserByEmail, getUserById } from "../db/db.js";
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
        ctx.status = 403;
        ctx.body = {
          message: "Email and password required",
        };
        return;
      }

      const [userExists] = await getUserByEmail(email);

      if (!userExists) {
        ctx.status = 404;
        ctx.body = {
          message: "User does not exist",
        };
        return;
      }

      if (!(await bcrypt.compare(password, userExists.password))) {
        ctx.status = 401;
        ctx.body = {
          message: "Invalid password",
        };
        return;
      }

      const token = jwt.sign({ userId: userExists.id }, "test", {
        expiresIn: "7d",
      });

      ctx.cookies.set("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      });

      ctx.status = 200;
      ctx.body = {
        message: "User logged in successfully",
      };
    } catch (err) {
      console.log(err);
      ctx.status = 500;
      ctx.body = {
        message: "Error while signing up",
      };
    }
  }

  static async signOut(ctx) {
    try {
      const token = ctx.cookies.get("token");

      if (!token) {
        ctx.status = 401;
        ctx.body = "Not authenticated";
        return;
      }

      ctx.cookies.set("token", "", {
        expires: new Date(1),
        path: "/",
      });

      ctx.status = 200;
      ctx.body = {
        message: "You have been successfully signed out",
      };
    } catch (err) {
      ctx.throw(500, err.message);
    }
  }

  static async me(ctx) {
    try {
      const token = ctx.cookies.get("token");

      try {
        const { userId } = jwt.verify(token, "test");

        const [user] = await getUserById(userId);

        if (!user) {
          ctx.status = 401;
          ctx.body = "Not authenticated";
          return;
        }

        ctx.status = 200;
        ctx.body = { user };
      } catch (err) {
        ctx.throw(401, "Not authenticated");
      }
    } catch (err) {
      ctx.throw(401, err.message);
    }
  }
}

export default AuthController;
