import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  public async generate({ auth, request, response }: HttpContextContract) {
    const { username, password } = request.body();
    try {
      const token = await auth
        .use("api")
        .attempt(username, password, { expiresIn: "7 days" });
      return token;
    } catch {
      return response.abort("provided arguments were not formatted correctly");
    }
  }
}
