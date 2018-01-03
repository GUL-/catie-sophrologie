/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

class HomeSplash extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="postHeader">
          <img src={siteConfig.baseUrl + 'img/catie-sophrologie-main.jpg'}/>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || 'en';

    return (
      <div>
        <HomeSplash language={language}/>
        <div className="mainContainer">
          <Container padding={['bottom']}>
            <h1>
              Qui suis-je ?
            </h1>
            <MarkdownBlock>
              Formée à l'IFS Paris, je reçois à mon cabinet ou me déplace à votre domicile pour un accompagnement individualisé.
              J'interviens également dans votre entreprise pour des séances de groupe sur le bien-être au travail, la concentration, la
              gestion du stress, ....
            </MarkdownBlock>
          </Container>
          <Container padding={['bottom']} background="light">
            <h1>
              Services
            </h1>
            <p>
              En quête de bien-être pour vous-même ou vos collaborateurs ? Envie d'améliorer votre concentration, votre gestion du stress ou encore votre créativité, combattre vos phobies ou vos addictions ? Je serai heureuse de mettre à disposition mes compétences de sophrologue pour vous permettre d'atteindre vos objectifs.
            </p>
            <GridBlock
              align="justify"
              contents={[
                {
                  title: 'Séances individuelles',
                  content: 'Accompagnement thérapeutique personnalisé pour trouver les moyens nécessaires à l’atteinte de l’objectif. ' +
                  '(Stress, sommeil, concentration…)\n\nLes tarifs sont de 45 € au cabinet et 50 € à domicile.\n\nJe reçois également à' +
                  ' Paris au tarif de 60 €.\n\nDurée : 1h.'
                },
                {
                  title: 'Séances de groupe',
                  content: 'Accompagnement à la découverte de la sophrologie ou à l’entraînement à la sophrologie.\n\nSéance de groupe' +
                  ' ouvert : sans demande particulière, temps de relaxation pour se détendre\n\nSéance de groupe fermé : partage d’un ' +
                  'objectif commun précis (gestion de stress, préparation accouchement …)\n\nLes tarifs varient selon la demande.\n\nDurée : 1h.'
                },
                {
                  title: 'Ateliers thématiques',
                  content: 'Utilisation de la sophrologie pour traiter un thème spécifique à un groupe de personnes.\n\nL’atelier se ' +
                  'compose d’une partie théorique sur le sujet et d’une partie pratique d’exercices adaptés au thème.\n\nLes tarifs' +
                  ' varient selon la demande.\n\nDurée : 1/2 journée.'
                }
              ]}
              layout="threeColumn"
            />
          </Container>

          <Container padding={['bottom']}>
            <h1 style={{textAlign: 'center'}}>
              Ils ont fait appel à mes services
            </h1>
            <GridBlock
              layout="twoColumn"
              contents={[
                {
                  content: '_J\'avais l\'objectif de pouvoir me concentrer davantage. Catie m\'a enseigné tout un ensemble de techniques, respiratoires, gestuelles et de visualisation dans ce sens. Certaines m\'ont très vite convenu, et m\'ont permis notamment de rapidement retrouver le calme intérieur avant une prise de parole devant plusieurs centaines de personnes. Dans mon quotidien, c\'est davantage quand je sens que mon esprit divague alors que j\'ai besoin de produire un travail que je fais appel à ces techniques. Un grand merci à Catie pour ses enseignements théoriques et pratiques, et son accompagnement progressif, adapté et personnalisé._',
                  title: 'Gabriel',
                },
                {
                  content: '_Un grand merci à toi Catie, qui a su me faire prendre conscience de beaucoup sur moi même. Nous avons pu atteindre notre objectif grâce aux 10 séances, évacuer le stress, installer le calme, me concentrer, me détendre, apprendre à observer, écouter. Je recommande à 100%._',
                  title: 'Marie',
                },
                {
                  content: '_Nous avons testé la sophro en entreprise avec notre équipe. ' +
                  'En 1h, tout le monde était bien plus détendu ! Des exercices simples à la portée de tout le monde._',
                  title: 'Julien - CEO Appaloosa',
                },
                {
                  content: '_Initiation à la sophrologie avec Catie. Détente assurée ainsi qu une bonne nuit de sommeil. Et sa voix est un délice !!!!_',
                  title: 'Stéphanie',
                }
              ]}
            />
          </Container>

        </div>
      </div>
    );
  }
}

module.exports = Index;
