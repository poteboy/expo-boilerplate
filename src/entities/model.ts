export type Model = {
  uid: string;
  createdAt: Date | TimeStamp;
};

export type TimeStamp = {
  nanoseconds: number;
  seconds: number;
};

export class Entity {
  public model: Model;
  constructor(uid?: string) {
    this.model = this.createModel(uid);
  }

  private generateUid(): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let autoId = '';
    for (let i = 0; i < 28; i++) {
      autoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return autoId;
  }

  private createModel = (uid?: string): Model => {
    return {
      uid: uid ?? this.generateUid(),
      createdAt: new Date(),
    };
  };
}

export const isModel = (arg: unknown): arg is Model => {
  if (!arg) return false;
  const _model = arg as Model;
  try {
    return !!_model.uid && !!_model.createdAt;
  } catch {
    return false;
  }
};
