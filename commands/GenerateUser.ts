import { BaseCommand } from "@adonisjs/core/build/standalone";
import User from "App/Models/User";

export default class GenerateUser extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = "generate:user";

  /**
   * Command description is displayed in the "help" output
   */
  public static description = "Enter username and password for user generation";

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  };

  public async run() {
    const username = await this.prompt.ask("Enter username");
    const password = await this.prompt.ask("Enter password");
    await User.create({ username, password });
  }
}
