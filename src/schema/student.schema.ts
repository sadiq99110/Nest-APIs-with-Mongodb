import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Student {

    @Prop()
    name: string;

    @Prop()
    roleNumber: number;

    @Prop()
    class: number;

    @Prop()
    gender: string;

    @Prop()
    marks: number;

    @Prop({ type: [String] }) // Define courses as an array of strings
    courses: string[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);