import { HpWand } from "./hp-wand.model";

export class HpCharacter {
    name!: string;
    alternate_names!: string[];
    species!: string;
    gender!: string;
    house!: string;
    dateOfBirth!: string;
    wizard!: boolean;
    ancestry!: string;
    eyeColour!: string;
    hairColour!: string;
    wand!: HpWand;
    patronus!: string;
    hogwartsStudent!: boolean;
    hogwartsStaff!: boolean;
    actor!: string;
    alternate_actors!: string;
    alive!: boolean;
    image!: string;
}