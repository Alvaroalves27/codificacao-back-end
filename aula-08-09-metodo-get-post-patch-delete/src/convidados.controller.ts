import { Controller, Get, Post, Body } from "@nestjs/common";
import { CriarConvidadoDto } from "./criar-convidado.dto.js";

@Controller('convidados')
export class ConvidadosController {

    @Get()
    listarConvidados(){
        return [
            'Rebeca',
            'Liam',
            'Cauê',
            'Emanuelly',
            'Jamily' ,
            'Vitória',   
         ];
    }
    @Post()
    criarConvidados(@Body() criarConvidado: CriarConvidadoDto){
        console.log(`[OPERADORA NAYRA] Novo convidado(a) Registrado(a): ${criarConvidado.nome}`);

        return {
            mensagem: `Convidado(a) ${criarConvidado.nome}, foi adicionado(a) com sucesso! `,
            dados: criarConvidado,
        }
    }
}