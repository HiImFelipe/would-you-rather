import { v4 as uuidv4 } from "uuid";

export class Choice {
  id!: string;
  text!: string;
  createdAt!: Date;
  updatedAt!: Date;

  private constructor(props: Omit<Choice, "id" | "createdAt" | "updatedAt">) {
    Object.assign(this, props);

    this.id = uuidv4();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static create(props: Omit<Choice, "id" | "createdAt" | "updatedAt">) {
    return new Choice(props);
  }
}
