import { ApiProperty } from '@nestjs/swagger';

export class CriarProdutoDto {

    //!nome do produto
  @ApiProperty({
    example:'Café Grão de Ouro 500g',
description:'Nome Comercial do produto cadastrado',
  })
  nome: string;
  //!preco do produto
    @ApiProperty({
       example:9.99,
       description:'Preço unitario do produto ',
})
  preco:number;

  //!genero do produto
  @ApiProperty({
    example:'Alimentos',
    description:'Categoria do produto',
  })
  categoria: string;
}