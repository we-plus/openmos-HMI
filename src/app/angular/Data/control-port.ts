export class ControlPort {
    uniqueId: string;
    name: string;
    description: string;
    // Refactoring from type to portType
    portType: string;
    direction: string;
    registered: Date;
}
