import {
  getContactByUserId,
  getContactsByUserId,
  getUserById,
} from "../db/db.js";

class ContactsController {
  static async getContacts(ctx) {
    try {
      const { userId } = ctx.params;

      if (!userId) {
        ctx.status = 400;
        ctx.body = {
          message: "User ID required",
        };
        return;
      }

      const [userExists] = await getUserById(userId);

      if (!userExists) {
        ctx.status = 404;
        ctx.body = {
          message: "User does not exist",
        };
        return;
      }

      const contacts = await getContactsByUserId(userId);

      ctx.status = 200;
      ctx.body = {
        contacts,
      };
    } catch (err) {
      ctx.throw(500, err.message);
    }
  }

  static async getContact(ctx) {
    const { userId, contactId } = ctx.params;

    if (!userId || !contactId) {
      ctx.status = 400;
      ctx.body = {
        message: "User ID and contact ID required",
      };
      return;
    }

    const [userExists] = await getUserById(userId);

    if (!userExists) {
      ctx.status = 404;
      ctx.body = {
        message: "User does not exist",
      };
      return;
    }

    const [contact] = await getContactByUserId(userId, contactId);

    if (!contact) {
      ctx.status = 404;
      ctx.body = {
        message: "Contact does not exist",
      };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      contact,
    };
  }
}

export default ContactsController;
