import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getPublic(){
    return{
      mensagem:'Rota Publica acessa com sucesso!',
      data: new Date(),
    }
  }

  @Get('admin')
  getPrivate(){
    return{
      mensagem:'Bem-vindo ao painel Administrativo',
      data: new Date(),
    }
   }
  }

