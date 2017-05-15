
/**
    memorial.h
    Purpose: Draw memorial environment.


    @author Felipe E. E. Silva
    @version 1.0 30/03/17
*/

#include "formas.h"
#ifndef _MEMORIAL_H
#define _MEMORIAL_H


/**
    Desenha uma porta.

    @param centerX Posicao no eixo x onde se encontra o centro do poligono.
    @param centerY Posicao no eixo y onde se encontra o centro do poligono.
    @param centerZ Posicao no eixo z onde se encontra o centro do poligono.
    @param width Largura do poligono.
    @param height Altura do poligono.
    @param depth Profundidade do poligono.
    @param angle o angulo do vetor normal a porta (frente local)
    @param angularSpeed velocidade ao qual a porta abre.
*/
void drawDoor(float centerX, float centerY, float centerZ, float width, float height, float depth, float angle, float angularSpeed);

void drawStar(float centerX, float centerY, float centerZ);

/**
    Desenha uma porta com 2 metades.

    @param centerX Posicao no eixo x onde se encontra o centro do poligono.
    @param centerY Posicao no eixo y onde se encontra o centro do poligono.
    @param centerZ Posicao no eixo z onde se encontra o centro do poligono.
    @param width Largura do poligono.
    @param height Altura do poligono.
    @param depth Profundidade do poligono.
    @param angle o angulo do vetor normal a porta (frente local)
    @param angularSpeed velocidade ao qual a porta abre.
*/
void drawDoor2(float centerX, float centerY, float centerZ, float width, float height, float depth, float angle, float angularSpeed);


void drawEntrada ( float originX, float originY, float originZ , GLuint *texture_id) {
    glBindTexture(GL_TEXTURE_2D, texture_id[-1]);

    glColor4f(1, 1, 1, 0.5);

    drawRetangulo(-3.0f, -1.5f, -12.0f, 3.0f, 3.0f, 0.1f) ;
    drawRetangulo(3.0f, -1.5f, -12.0f, 3.0f, 3.0f, 0.1f) ;

    glPushMatrix();
    glTranslatef(-6.0f, -1.5f, -12.5f);
    glRotatef(-15.0f, 0.0f, 1.0f, 0.0f);
    drawRetangulo(0.0f, 0.0f, 0.0f, 3.5f, 3.0f, 0.5f);
    glPopMatrix();

    glPushMatrix();
    glTranslatef(6.0f, -1.5f, -12.5f);
    glRotatef(20.0f, 0.0f, 1.0f, 0.0f);
    drawRetangulo(0.0f, 0.0f, 0.0f, 3.0f, 3.0f, 0.5f);
    glPopMatrix();

    drawRetangulo(-3.0f, -1.5f, -27.0f, 3.0f, 3.0f, 0.1f) ;
    drawRetangulo(3.0f, -1.5f, -27.0f, 3.0f, 3.0f, 0.1f) ;

    glPushMatrix();
    glTranslatef(7.8f, -1.5f, -24.0f);
    glRotatef(90.0f, 0.0f, 1.0f, 0.0f);
    drawRetangulo(0.0f, 0.0f, 0.0f, 3.5f, 3.0f, 0.5f);
    glPopMatrix();

    glPushMatrix();
    glTranslatef(-6.0f, -1.5f, -26.5f);
    glRotatef(20.0f, 0.0f, 1.0f, 0.0f);
    drawRetangulo(0.0f, 0.0f, 0.0f, 3.6f, 3.0f, 0.5f);
    glPopMatrix();

    glPushMatrix();
    glTranslatef(6.0f, -1.5f, -26.5f);
    glRotatef(-20.0f, 0.0f, 1.0f, 0.0f);
    drawRetangulo(0.0f, 0.0f, 0.0f, 3.5f, 3.0f, 0.5f);
    glPopMatrix();

    //tapaburaco
    drawRetangulo(7.9f, -1.5f, -13.0f, 1.0f, 3.0f, 0.1f) ;
    glPushMatrix();
    glTranslatef(-7.5f, -1.5f, -25.5f);
    glRotatef(35.0f, 0.0f, 1.0f, 0.0f);
    drawRetangulo(0.0f, 0.0f, 0.0f, 1.0f, 3.0f, 0.1f) ;
    glPopMatrix();

    glColor4f(1, 1, 1, 1);

    // rua da frente.
    glBindTexture(GL_TEXTURE_2D, texture_id[1]);
    drawRetangulo(0.0f, -2.0f, -4.45f, 20.0f, 2.0f, 0.9f) ;
    drawRetangulo(0.0f, -2.0f, -1.5f, 20.0f, 2.0f, 1.0f) ;

    glBindTexture(GL_TEXTURE_2D, texture_id[2]);
    //Escadas
    drawRetangulo(2.6f, -1.1f, -5.1f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(2.6f, -1.3f, -5.3f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(2.6f, -1.5f, -5.5f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(2.6f, -1.7f, -5.7f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(2.6f, -1.9f, -5.9f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(2.6f, -2.1f, -6.1f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(2.6f, -2.3f, -6.3f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(2.6f, -2.5f, -6.5f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(2.6f, -2.7f, -6.7f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(2.6f, -2.9f, -6.9f, 2.0f, 0.2f, 0.2f) ;

    drawRetangulo(-2.6f, -1.1f, -5.1f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(-2.6f, -1.3f, -5.3f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(-2.6f, -1.5f, -5.5f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(-2.6f, -1.7f, -5.7f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(-2.6f, -1.9f, -5.9f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(-2.6f, -2.1f, -6.1f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(-2.6f, -2.3f, -6.3f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(-2.6f, -2.5f, -6.5f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(-2.6f, -2.7f, -6.7f, 2.0f, 0.2f, 0.2f) ;
    drawRetangulo(-2.6f, -2.9f, -6.9f, 2.0f, 0.2f, 0.2f) ;

    // Paredes do quartinho
    glBindTexture(GL_TEXTURE_2D, texture_id[3]);
    drawRetangulo(0.0f, -2.0f, -4.95f, 20.0f, 2.0f, 0.1f );

    drawRetangulo(1.55f, -2.0f, -6.25f, 0.1f, 2.0f, 2.5f );
    drawRetangulo(-1.55f, -2.0f, -6.25f, 0.1f, 2.0f, 2.5f );

    drawRetangulo(-8.0f, -1.5f, -14.0f, 0.5f, 3.5f, 3.5f );

    //paredes internas lado direito
    drawRetangulo(8.0f, -1.5f, -15.0f, 0.3f, 3.5f, 3.0f) ;
    drawRetangulo(8.0f, -1.5f, -20.85f, 0.3f, 3.5f, 2.7f) ;

    // Desenha as coisas perta da escada
    drawSphere(1.5f, 0.2f, -5.1f, 0.2f);
    drawRetangulo(1.5f, -0.5f, -5.1f, 0.2f, 1.0f, 0.3f);
    drawSphere(3.7f, 0.2f, -5.1f, 0.2f);
    drawRetangulo(3.7f, -0.5f, -5.1f, 0.2f, 1.0f, 0.3f);
    drawSphere(-1.5f, 0.2f, -5.1f, 0.2f);
    drawRetangulo(-1.5f, -0.5f, -5.1f, 0.2f, 1.0f, 0.3f);
    drawSphere(-3.7f, 0.2f, -5.1f, 0.2f);
    drawRetangulo(-3.7f, -0.5f, -5.1f, 0.2f, 1.0f, 0.3f);

    //Desenha a parede que acompanha a escada.
    glPushMatrix();
    glTranslatef(3.7f, -2.7f, -6.2f);
    glRotatef(-45.0f, 1.0f, 0.0f, 0.0f);
    glTranslatef(-3.7f, 2.7f, 6.2f);

    drawRetangulo(3.7f, -2.7f, -6.2f, 0.2f, 1.5f, 4.2f);
    glPopMatrix();

    glPushMatrix();
    glTranslatef(-2.6f, -2.7f, -6.2f);
    glRotatef(-45.0f, 1.0f, 0.0f, 0.0f);
    glTranslatef(2.6f, 2.7f, 6.2f);

    drawRetangulo(-3.7f, -2.7f, -6.2f, 0.2f, 1.5f, 4.2f);
    glPopMatrix();

    glBindTexture(GL_TEXTURE_2D, texture_id[0]);
    drawRetangulo(0.0f, -2.0f, -3.0f, 20.0f, 2.0f, 2.0f );
    //Desenha o solo
    drawRetangulo(0.0f, -3.5f, -20.0f, 40.0f, 1.0f, 40.0f);

    glBindTexture(GL_TEXTURE_2D, texture_id[7]);

    // Desenha o chao que dá para as rampas de descida.
    drawRetangulo(-11.0f, -2.0f, -6.0f, 2.0f, 2.0f , 10.0f);
    drawRetangulo(11.0f, -2.0f, -6.0f, 2.0f, 2.0f , 10.0f);

    // Rampa de descida laterais para a entrada.
    glPushMatrix();
    glTranslatef(-6.0f, -2.0f, -10.0f);
    glRotatef(-15.0f, 0.0f, 0.0f, 1.0f);
    glTranslatef(6.0f, 1.5f, 10.0f);

    drawRetangulo(-6.0f, -2.0f, -8.5f, 8.0f, 1.0f, 2.0f);
    glPopMatrix();

    glPushMatrix();
    glTranslatef(6.0f, -2.0f, -10.0f);
    glRotatef(15.0f, 0.0f, 0.0f, 1.0f);
    glTranslatef(-6.0f, 1.5f, 10.0f);

    drawRetangulo(6.0f, -2.0f, -8.5f, 8.0f, 1.0f, 2.0f);
    glPopMatrix();

    glBindTexture(GL_TEXTURE_2D, texture_id[3]);

    //Desenha o solo da parte de cima
    drawRetangulo(-3.5f, 0.40f, -11.4f, 4, 1.0, 0.5 );
    drawRetangulo(3.5f, 0.40f, -11.4f, 4, 1.0, 0.5 );
    drawRetangulo(0.0f, 0.45f, -27.0f, 10, 1.0, 0.5 );
    drawRetangulo(0.0f, 0.45f, -27.0f, 10, 1.0, 0.5 );
    drawRetangulo(7.8f, 0.45f, -23.6f, 0.5, 1.0, 3.5 );

    glPushMatrix();
    glTranslatef(6.6f, -0.45f, -12.5f);
    glRotatef(30.0f, 0.0f, 1.0f, 0.0f);
    glTranslatef(-6.6f, 0.45f, 12.5f);

    drawRetangulo(6.6f, 0.45f, -12.5f, 4, 1.0, 0.5 );

    glPopMatrix();

    glPushMatrix();
    glTranslatef(-6.6f, -0.45f, -12.5f);
    glRotatef(-30.0f, 0.0f, 1.0f, 0.0f);
    glTranslatef(6.6f, 0.45f, 12.5f);

    drawRetangulo(-6.6f, 0.45f, -12.5f, 4, 1.0, 0.5 );

    glPopMatrix();

    glPushMatrix();
    glTranslatef(-6.6f, 0.45f, -26.0f);
    glRotatef(30.0f, 0.0f, 1.0f, 0.0f);
    drawRetangulo(0.0f, 0.0f, 0.0f, 4, 1.0, 0.5 );
    glPopMatrix();

    glPushMatrix();
    glTranslatef(6.6f, 0.45f, -26.0f);
    glRotatef(-30.0f, 0.0f, 1.0f, 0.0f);
    drawRetangulo(0.0f, 0.0f, 0.0f, 4, 1.0, 0.5 );
    glPopMatrix();

    glBindTexture(GL_TEXTURE_2D, texture_id[3]);
    drawRing( -8.0f, -3.1f, -19.5f, 7.0f, 4.0f, 30, 0.05f, -110.0f, 0.0f, 90.0f, 1);

    glBindTexture(GL_TEXTURE_2D, texture_id[2]);
    drawRing( -7.80f, -3.4f, -19.5f, 7.0f, 3.5f, 30, 0.3f, -110.0f, 0.0f, 90.0f, 1);

    drawRing( 6.7f, -1.5f, -17.3f, 5.0f, 3.5f, 30, 0.3f, 130.0f, 0.0f,  -15.0f, 0.6);

    glBindTexture(GL_TEXTURE_2D, texture_id[3]);
    drawRing( -7.75f, -0.8f, -20.0f, 5.0f, 4.0f, 30, 0.05f, -90.0f, 0.0f, 90.0f, 1);

    drawRing( 7.1f, -0.9f, -17.0f, 5.0f, 4.0f, 30, 0.1f, -90.0f, 0.0f,  0.0f, 0.5);
    drawRing( 7.0f, -1.2f, -17.3f, 5.0f, 4.0f, 30, 0.05f, 130.0f, 0.0f,  -15.0f, 0.6);

    drawRing( 5.5f, -0.8f, -17.3f, 5.0f, 4.0f, 30, 0.05f, 90.0f, 0.0f,  -15.0f, 0.4);

    //Pilastras
    cilindro(1.5f, -1.5f, -12.0f, 0.2f,  3.0f, 10);
    cilindro(-1.5f, -1.5f, -12.0f, 0.2f,  3.0f, 10);

    // Desenha o teto
    glBindTexture(GL_TEXTURE_2D, texture_id[6]);

    // Monumento
    drawRetangulo(0.0f, 0.75f, -22.0f, 1, 0.1, 1.5 );
    glPushMatrix();
    glTranslatef(0.0f, 0.75f, -21.75f);
    glRotatef(25.0f, 1.0f, 0.0f, 0.0f);
    drawRetangulo(0.0f, 0.0f, 0.0f, 1, 0.1, 1.5 );
    glPopMatrix();
    glPushMatrix();
    glTranslatef(0.0f, 0.75f, -22.0f);
    glRotatef(45.0f, 1.0f, 0.0f, 0.0f);
    drawRetangulo(0.0f, 0.0f, 0.0f, 1, 0.1, 1.5 );
    glPopMatrix();
    glPushMatrix();
    glTranslatef(0.0f, 1.1f, -22.0f);
    glRotatef(-45.0f, 1.0f, 0.0f, 0.0f);
    drawStar(0.0,0.0,0.0);
    glPopMatrix();

    // Rampas de subida ao topo do memorial
    glPushMatrix();
    glTranslatef(0.0f, -1.0f, -5.0f);
    glRotatef(15.0f, 1.0f, 0.0f, 0.0f);
    glTranslatef(0.0f, 1.0f, 5.0f);

    GLfloat mat_specular[] = { 1.0, 1.0, 1.0, 1.0 };
    GLfloat mat_shininess[] = { 60.0 };
    glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, mat_specular);
    glMaterialfv(GL_FRONT_AND_BACK, GL_SHININESS, mat_shininess);

    drawRetangulo(0.0f, -1.25f, -8.0f, 3.0f, 0.5f, 7.0f);
    glPopMatrix();

    drawRetangulo(0.0f, 0.45f, -19.25f, 3, 0.5, 16 );

    glBindTexture(GL_TEXTURE_2D, texture_id[5]);
    drawRetangulo(-3.25f, 0.45f, -19.25f, 3.5, 0.5, 16 );
    drawRetangulo(3.25f, 0.45f, -19.25f, 3.5, 0.5, 16 );

    drawRing( -7.75f, 0.44f, -20.0f, 4.8f, 0.5f, 30, 2.0f, -90.0f, 0.0f, 90.0f, 1);
    drawRing( 7.1f, 0.44f, -17.0f, 4.9f, 0.5f, 30, 1.0f, -90.0f, 0.0f,  0.0f, 0.5);
    drawRing( 5.5f, 0.44f, -17.3f, 4.9f, 0.5f, 30, 1.0f, 90.0f, 0.0f,  -15.0f, 0.4);

    glBegin(GL_QUADS);
        glTexCoord2f(0.0, 0.0); glVertex3f( 7.75, 0.65, -25.5 );
        glTexCoord2f(0.0, 1.0); glVertex3f( 5, 0.65, -27 );
        glTexCoord2f(1.0, 1.0); glVertex3f( 5, 0.65, -11.25);
        glTexCoord2f(1.0, 0.0); glVertex3f( 7.75, 0.65, -12.9);
	glEnd();

	glBegin(GL_QUADS);
        glTexCoord2f(0.0, 0.0); glVertex3f( -7.75, 0.65, -25.5 );
        glTexCoord2f(0.0, 1.0); glVertex3f( -5, 0.65, -27 );
        glTexCoord2f(1.0, 1.0); glVertex3f( -5, 0.65, -11.25);
        glTexCoord2f(1.0, 0.0); glVertex3f( -7.75, 0.65, -12.9);
	glEnd();

    glBindTexture(GL_TEXTURE_2D, texture_id[8]);
    glPushMatrix();
    glTranslatef(7.0f, -2.5f, -6.0f);
    glRotatef(-30, 1.0f, 0.0f, 0.0f);
	drawRetangulo(0.0f, 0.0f, 0.0f, 6.5, 0.5, 3.5 );
    drawRetangulo(-14.0f, 0.0f, 0.0f, 6.5, 0.5, 3.5 );
	glPopMatrix();

    glBindTexture(GL_TEXTURE_2D, texture_id[-1]);
	//Bandeira
	cilindro(0.0f, 3.0f, -25.5f, 0.01, 5.0, 10);

	glBindTexture(GL_TEXTURE_2D, texture_id[9]);

    glBegin(GL_QUADS);
        glTexCoord2f(0.0, 0.0); glVertex3f(  0.0, 5, -25.5 );
        glTexCoord2f(0.0, 1.0); glVertex3f( 0.0, 4, -25.5 );
        glTexCoord2f(1.0, 1.0); glVertex3f(  0.0, 4.0, -27.0 );
        glTexCoord2f(1.0, 0.0); glVertex3f(  0.0, 5.0, -27.0 );
	glEnd();

	// Puff
	glBindTexture(GL_TEXTURE_2D, texture_id[11]);
	cilindro(0.0f, -2.7f, -19.0f, 0.6f, 0.6f, 16.0f);

}

void drawCadeira(float centerX, float centerY, float centerZ){
    drawRetangulo(centerX, centerY, centerZ, 0.5, 0.05, 0.5);
    // Pernas da cadeira.
    cilindro(centerX + 0.22,  centerY - 0.25  , centerZ + 0.22, 0.01, 0.5f, 6);
    cilindro(centerX + 0.22,  centerY - 0.25  , centerZ - 0.22, 0.01, 0.5f, 6);
    cilindro(centerX - 0.22,  centerY - 0.25  , centerZ + 0.22, 0.01, 0.5f, 6);
    cilindro(centerX - 0.22,  centerY - 0.25  , centerZ - 0.22, 0.01, 0.5f, 6);

    cilindro(centerX + 0.22,  centerY + 0.25  , centerZ - 0.22, 0.01, 0.5f, 6);
    cilindro(centerX - 0.22,  centerY +0.25  , centerZ - 0.22, 0.01, 0.5f, 6);

    drawRetangulo(centerX, centerY + 0.5 , centerZ - 0.2, 0.5, 0.3, 0.05);
}

void drawBanco ( float centerX, float centerY, float centerZ, float width, float height, float depth ) {
    // Desenha o banco.
    drawRetangulo( centerX, centerY, centerZ, width, 0.1f, depth);

    // Desenha as pernas do banco.
    glPushMatrix();
    glTranslatef(centerX, centerY, centerZ);
    glRotatef(90,  0.0f, 0.0f, 1.0f);
    glTranslatef(-centerX, -centerY, -centerZ);

    drawRetangulo( centerX  - (height/2), centerY - (width/2) + 0.05f, centerZ, height - 0.05f, 0.1f, depth);
    drawRetangulo( centerX  - (height/2), centerY + (width/2) - 0.05f, centerZ, height - 0.05f, 0.1f, depth);
    glPopMatrix();
}

/// Desenha uma porta.
void drawDoor(float centerX, float centerY, float centerZ, float width, float height, float depth, float angle, float angularSpeed) {

    Vector3 localForward = getLocalForward( angle );

    std::cout << "Foward:\n   X: " << localForward.x << " Z: " << localForward.z << std::endl;

    // Posiciona a primeira porta
    glPushMatrix();
    glTranslatef( centerX , centerY, centerZ );
    glRotatef( angularSpeed, 0.0f, 1.0f, 0.0f);
    glTranslatef( -( width/4 )*localForward.z, 0.0f, (width/4)*localForward.x );
    glRotatef( angle, 0.0f, 1.0f, 0.0f);

    // Desenha a porta.
    drawRetangulo( 0.0f, 0.0f, 0.0f , width/2, height, depth);
    // Back to the origin position.
    glPopMatrix();
}

/// Desenha uma porta com 2 metades.
void drawDoor2(float centerX, float centerY, float centerZ, float width, float height, float depth, float angle, float angularSpeed){

    Vector3 localForward = getLocalForward( angle );

    // Posiciona a primeira porta
    glPushMatrix();
    glTranslatef( centerX +(width/2)*localForward.z , centerY, centerZ - (width/2)*localForward.x );
    glRotatef( -angularSpeed, 0.0f, 1.0f, 0.0f);
    glTranslatef( -( width/4 )*localForward.z, 0.0f, (width/4)*localForward.x );
    glRotatef( angle, 0.0f, 1.0f, 0.0f);
    // Desenha a porta.
    drawRetangulo( 0.0f, 0.0f, 0.0f , width/2, height, depth);
    // Back to the origin position.
    glPopMatrix();

    // Posiciona a segunda porta porta
    glPushMatrix();
    glTranslatef( centerX -(width/2)*localForward.z, centerY, centerZ + (width/2)*localForward.x);
    glRotatef( angularSpeed, 0.0f, 1.0f, 0.0f);
    glTranslatef( ( width/4 )*localForward.z, 0.0f, -(width/4)*localForward.x );
    glRotatef( angle, 0.0f, 1.0f, 0.0f);
    //Desenha outra porta.
    drawRetangulo( 0.0f, 0.0f, 0.0f , width/2, height, depth);
    // Back to the origin position.
    glPopMatrix();
}

void drawCoiso(float centerX, float centerY, float centerZ, float angle){
    // Posiciona o negocio q nao sei o nome.
    glPushMatrix();
    glTranslatef( centerX , centerY , centerZ );
    glRotatef( angle, 0.0f, 1.0f, 0.0f);
    glTranslatef( -centerX , -centerY , -centerZ );

    glBegin(GL_QUADS);
        glTexCoord2f(0.0, 0.0); glVertex3f( centerX-0.5, centerY+0.5, centerZ+0.2 );
        glTexCoord2f(0.0, 1.0); glVertex3f( centerX-0.5, centerY-0.5, centerZ+0.2 );
        glTexCoord2f(1.0, 1.0); glVertex3f( centerX+0.5, centerY-0.5, centerZ+0.2);
        glTexCoord2f(1.0, 0.0); glVertex3f( centerX+0.5,centerY+0.5, centerZ+0.2);
	glEnd();
	glDisable(GL_TEXTURE_2D);

	glColor3f(0.3, 0.3, 0.8);
    drawRetangulo( centerX, centerY-1.05f, centerZ , 1.5f, 0.1f, 0.5f);
    drawRetangulo( centerX, centerY, centerZ+0.1f , 1.0f, 2.0f, 0.1f);
    drawRetangulo( centerX, centerY, centerZ-0.1f , 1.0f, 2.0f, 0.1f);
    drawRetangulo( centerX, centerY-0.1, centerZ , 1.0f, 1.8f, 0.1f);
    glColor3f(1, 1, 1);
    glEnable(GL_TEXTURE_2D);
    glPopMatrix();
}

void drawStar(float centerX, float centerY, float centerZ)  {
    glBegin (GL_POLYGON);
        glVertex3f( centerX, centerY, centerZ );

        glVertex3f( centerX , centerY + 0.4, centerZ );
        glVertex3f( centerX - 0.1, centerY + 0.1, centerZ );

        glVertex3f( centerX  - 0.3, centerY + 0.1, centerZ);
        glVertex3f( centerX  - 0.125, centerY - 0.1, centerZ);

        glVertex3f( centerX  - 0.2, centerY - 0.4, centerZ );
        glVertex3f( centerX , centerY - 0.2, centerZ );

        glVertex3f( centerX  + 0.2, centerY - 0.4, centerZ );
        glVertex3f( centerX  + 0.125, centerY - 0.1, centerZ );

        glVertex3f( centerX  + 0.3, centerY + 0.1, centerZ );
        glVertex3f( centerX  + 0.1, centerY + 0.1, centerZ );

        glVertex3f( centerX  , centerY + 0.4, centerZ );

    glEnd();
}

#endif
