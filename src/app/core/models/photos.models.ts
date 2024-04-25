export class Photo {

    id!: number;
    title!: string;
    description!: string;
    creationDate!: Date;
    likes!: number;
    imageUrl!: string;
    location?: string;
    hasClicked!: boolean;

}
