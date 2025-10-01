import { IsNotEmpty, IsString } from 'class-validator';

//Validaciónes para el teléfono agregar

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    name?:String;
    @IsNotEmpty()
    @IsString()
    lastname?:String;
    @IsNotEmpty()
    @IsString()
    phone?:String;

    // @IsNotEmpty({ message: 'El teléfono no debería estar vacío' })
    // @IsString({ message: 'El teléfono debe ser números' })
    // phone:string;
}