import { SessionType } from "../enum/session-type.enum";

export interface ISession {
    id: number;
    name: string;
    description: string;
    sessionType: SessionType;
    active: boolean;
    currents: boolean;
}
