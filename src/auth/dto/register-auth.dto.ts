import { IsEmail, isEmail, IsNotEmpty, isNotEmpty,
     IsString, isString, MinLength, minLength } from "class-validator";

export class RegisterAuthDto{
   
    @IsNotEmpty({ message: 'El nombre no debería estar vacío' })
    @IsString({ message: 'El nombre debe ser texto' })
    name:string;

    @IsNotEmpty({ message: 'El apellido no debería estar vacío' })
    @IsString({ message: 'El nombre debe ser texto' })
    lastname:string;

    @IsNotEmpty({ message: 'El correo no debería estar vacío' })
    @IsString({ message: 'El correo debe ser texto' })
    @IsEmail({},{message: 'El email, no es válido'})
    email:string;
   
    @IsNotEmpty({ message: 'El teléfono no debería estar vacío' })
    @IsString({ message: 'El teléfono debe ser números' })
    phone:string;
   
    @IsNotEmpty({ message: 'La contraseña no debería estar vacía' })
    @IsString({ message: 'La contraseña debe ser texto' })
    @MinLength(6,{message:"Minimo 6 caracteres"})
    password:string;
}
