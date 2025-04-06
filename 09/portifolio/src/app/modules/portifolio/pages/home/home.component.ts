import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { TechnologyComponent } from '../../components/technology/technology.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { GithubViewComponent } from '../../components/github-view/github-view.component';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { ImageInfo } from '../../interface/image-info.interface';
import { ProjectInfo } from '../../interface/project-info.interface';
import { ExperienceInfo } from '../../interface/experience-info.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports:[HeaderComponent, AboutMeComponent, TechnologyComponent, ProjectsComponent, ExperienceComponent, FooterComponent, GithubViewComponent, MatSidenavModule, MatIconModule,NavigationComponent]
})
export class HomeComponent {
  public imagens: ImageInfo[] = [
    {
      url:'../../../../../assets/technology/angular-icon.png',
      tooltip:'Angular'
    },
    {
      url:'../../../../../assets/technology/csharp-icon.png',
      tooltip:'C#'
    },
    {
      url:'../../../../../assets/technology/css-icon.png',
      tooltip:'CSS'
    },
    {
      url:'../../../../../assets/technology/html-icon.png',
      tooltip:'HTML'
    },
    {
      url:'../../../../../assets/technology/javascript-icon.png',
      tooltip:'Javascript'
    },
    {
      url:'../../../../../assets/technology/java-icon.png',
      tooltip:'Java'
    },
    {
      url:'../../../../../assets/technology/spring-boot-icon.png',
      tooltip:'Spring boot'
    },
    {
      url:'../../../../../assets/technology/unity-icon.png',
      tooltip:'Unity'
    }
  ]
  public projects: ProjectInfo[] = [
    {
      projectDetails:'Tecnologias: Angular, Spring Boot',
      projectName:'Crud Cursos',
      projectUrl:'https://github.com/MarcoAs25/CrudCursos',
      image: {
        url:'../../../../../assets/projects/crud_cursos.jpg',
        tooltip:'Crud com Angular & Spring'
      }
    },
    {
      projectDetails:'Tecnologias: Angular, Spring Boot, JWT',
      projectName:'Login JWT',
      projectUrl:'https://github.com/MarcoAs25/login-jwt-front',
      image: {
        url:'../../../../../assets/projects/login_jwt.jpg',
        tooltip:'Sitema de Login com JWT'
      }
    },
    {
      projectDetails:'Tecnologias: Angular, HTML, CSS, JS',
      projectName:'Desafios Codelândia',
      projectUrl:'https://github.com/MarcoAs25/codelandia',
      image: {
        url:'../../../../../assets/projects/desafios_codelandia.jpg',
        tooltip:'Projetos propostos pela comunidade codelândia'
      }
    },
    {
      projectDetails:'Tecnologias: Unity, C#',
      projectName:'Flappy Bird Clone',
      projectUrl:'https://github.com/MarcoAs25/Flappy-Bird-Clone',
      image: {
        url:'../../../../../assets/projects/flappy_bird.png',
        tooltip:'Clone do famoso jogo Flappy Bird'
      }
    },
    {
      projectDetails:'Tecnologias: Unity, C#',
      projectName:'DOOM Clone',
      projectUrl:'https://github.com/MarcoAs25/Flappy-Bird-Clone',
      image: {
        url:'../../../../../assets/projects/doom.png',
        tooltip:'Clone do famoso jogo DOOM'
      }
    },
    {
      projectDetails:'Tecnologias: C++',
      projectName:'Árvore B em Disco',
      projectUrl:'https://github.com/MarcoAs25/DiskBtree',
      image: {
        url:'../../../../../assets/projects/disk_btree.png',
        tooltip:'Implementação da estrutura de dados árvore b'
      }
    }

  ]
  public experiences: ExperienceInfo[] = [
    {
      role: "Desenvolvedor Fullstack Java",
      time: "Find Soluções: Ago/2024 - Atualmente",
      tasks: "Atuação no desenvolvimento de módulos para o aplicativo App Cidades, atendendo prefeituras e câmaras municipais em diversas regiões do Brasil, utilizando Java (Spring) e Angular. Principais destaques: Criação do sistema de zoneamento escolar, otimizando o acesso ao transporte público por rotas específicas; sistema de vagas de emprego com cadastro de empresas, publicação de vagas e dashboards com métricas; sistema de tickets de feira, que permite a concessão de valores para compra em feiras municipais; criação de páginas e integração com API para autenticação em hotspot Mikrotik, fornecendo internet gratuita à população; melhorias de performance em dashboards, com foco em responsividade e experiência do usuário."
    },
    {
      role: "Desenvolvedor Fullstack Java (Estágio)",
      time: "Find Soluções: Jun/2023 - Fev/2024",
      tasks: "Atuação como estagiário no desenvolvimento full-stack utilizando Java (Spring/Spring Boot) e Angular no App Cidades, plataforma voltada para gestão pública. Principais entregas: Criação de sistema de agendamento de serviços com formulários dinâmicos e customizáveis por entidade; desenvolvimento de sistema de geração de credenciais personalizadas com templates reutilizáveis e integração com outros módulos; integração de APIs externas REST e GraphQL para ampliar a interoperabilidade da plataforma."
    },
    {
      role: "Bolsista de Iniciação Científica",
      time: "CNPQ: Mai/2021 - Mar/2022",
      tasks: "Fui responsável pela criação e implementação de um protótipo de um equipamento laboratorial acessível a deficientes visuais para aprendizado de Química, tendo como foco  uma maior autonomia para deficientes visuais, neste projeto foi utilizado C++, eletrônica, orientação e diversos módulos para arduíno."
    },
    {
      role: "Bolsista de Iniciação Científica",
      time: "IFMG: Jul/2022 - Abr/2023",
      tasks: "Seguindo a linha de tecnologias assistivas, também fui responsável pela criação de uma tabela periódica acessível a deficientes visuais utilizando a plataforma arduino, c++, e módulos para a síntese de fala."
    },
    {
      role: "Desenvolvedor Unity C#",
      time: "Freelancer: Mai/2022 - Abr/2023",
      tasks: "Integrações com anúncios (Ads), utilização de bibliotecas de multiplayer (Photon Network), utilização de arquitetura de scriptable objects, modificação de asssets para fins comerciais (malbers animations)."
    }
  ]
}
