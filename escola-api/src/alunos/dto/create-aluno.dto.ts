import { IsString, 
        IsNotEmpty,
        IsInt,
        Min,
        IsArray,
        ArrayMinSize } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {
  @ApiProperty({
    example: 'Matheus Silva',
    description: 'Nome do aluno',
    
  })

  @IsString()
  @IsNotEmpty({
    message:'O nome é obrigatório e não pode estar vazio!'
  })
  nome: string;
@ApiProperty({
    example: 25,
    description: 'Idade do aluno'
  })

  @IsInt({
    message:'A idade deve ser um número inteiro'
  })
  @Min(0,{
    message:'A idade não pode ser negativa.'
  })
  idade: number;
  @ApiProperty({
    example: '999',
    description: 'Matrícula do aluno',
    
  })
  @IsString()
  @IsNotEmpty({
    message:'A Matricula é obrigatoria'
  })
  matricula: string;

  @IsString({each: true, message:'Cada curso deve ser um texto'})
  @IsArray()
  @ApiProperty({
    example: ['Letras Lingua Portuguesa', 'Ciências da Computação'],
    description: 'Cursos em que o aluno está matriculado'
  })
  @ArrayMinSize(1,{
    message:'O aluno deve estar matriculado em pelo menos um curso'
  })
  cursos: string[];
  
}