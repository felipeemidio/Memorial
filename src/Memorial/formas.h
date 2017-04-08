/**
    formas.h
    Purpose: Used as a library to draw some polygons.

    @author Felipe E. E. Silva
    @version 1.0 30/03/17
*/

#include "myMath.h"
#ifndef _FORMAS_H
#define _FORMAS_H

/**
    Desenha um paralelepipedo retangular.

    @param centerX Posicao no eixo x onde se encontra o centro do poligono.
    @param centerY Posicao no eixo y onde se encontra o centro do poligono.
    @param centerZ Posicao no eixo z onde se encontra o centro do poligono.
    @param width Largura do poligono.
    @param height Altura do poligono.
    @param depth Profundidade do poligono.
*/
void drawRetangulo(float centerX, float centerY, float centerZ, float width, float height, float depth );

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


/// Desenha um paralelepipedo retangulo.
void drawRetangulo(float centerX, float centerY, float centerZ, float width, float height, float depth ){
    /*
          5___ 6
         /|   /|
        1_|__2 |
        | 7--|-8
        |/   |/
        3____4
    */
    float v1[3] = {centerX + (width/2), centerY + (height/2) , centerZ - (depth/2)};
    float v2[3] = {centerX - (width/2), v1[1], v1[2]};
    float v3[3] = {v1[0], centerY - (height/2), v1[2]};
    float v4[3] = {v2[0], v3[1], v2[2]};
    float v5[3] = {v1[0], v1[1], centerZ + (depth/2)};
    float v6[3] = {v2[0], v2[1], v5[2]};
    float v7[3] = {v3[0], v3[1], v5[2]};
    float v8[3] = {v4[0], v4[1], v5[2]};
    /*
    std::cout << "v1 " << v1[0]<<  " " << v1[1] << " " << v1[2] << std::endl;
	std::cout << "v2 " << v2[0]<<  " " << v2[1] << " " << v2[2] << std::endl;
	std::cout << "v3 " << v3[0]<<  " " << v3[1] << " " << v3[2] << std::endl;
	std::cout << "v4 " << v4[0]<<  " " << v4[1] << " " << v4[2] << std::endl;
    */

    glBegin(GL_QUADS);
        // top
        glNormal3f(1.0f, 1.0f, 1.0f);
        glTexCoord2f(0.0, 0.0); glVertex3fv(v1);
        glTexCoord2f(0.0, 1.0); glVertex3fv(v2);
        glTexCoord2f(1.0, 1.0); glVertex3fv(v6);
        glTexCoord2f(1.0, 0.0); glVertex3fv(v5);
	glEnd();

	glBegin(GL_QUADS);
        // front
        glNormal3f(0.0f, 0.0f, 1.0f);
        glTexCoord2f(0.0, 0.0); glVertex3fv(v1);
        glTexCoord2f(0.0, 1.0); glVertex3fv(v2);
        glTexCoord2f(1.0, 1.0); glVertex3fv(v4);
        glTexCoord2f(1.0, 0.0); glVertex3fv(v3);
	glEnd();

	glBegin(GL_QUADS);
        // right
        glNormal3f(1.0f, 0.0f, 0.0f);
        glTexCoord2f(0.0, 0.0); glVertex3fv(v2);
        glTexCoord2f(0.0, 1.0); glVertex3fv(v6);
        glTexCoord2f(1.0, 1.0); glVertex3fv(v8);
        glTexCoord2f(1.0, 0.0); glVertex3fv(v4);
	glEnd();

	glBegin(GL_QUADS);
        // left
        glNormal3f(-1.0f, 0.0f, 0.0f);
        glTexCoord2f(0.0, 0.0); glVertex3fv(v1);
        glTexCoord2f(0.0, 1.0); glVertex3fv(v5);
        glTexCoord2f(1.0, 1.0); glVertex3fv(v7);
        glTexCoord2f(1.0, 0.0); glVertex3fv(v3);
	glEnd();

	glBegin(GL_QUADS);
        // bottom
        glNormal3f(0.0f, -1.0f, 0.0f);
        glTexCoord2f(0.0, 0.0); glVertex3fv(v3);
        glTexCoord2f(0.0, 1.0); glVertex3fv(v4);
        glTexCoord2f(1.0, 1.0); glVertex3fv(v8);
        glTexCoord2f(1.0, 0.0); glVertex3fv(v7);
	glEnd();

	glBegin(GL_QUADS);
        // back
        glNormal3f(0.0f, 0.0f, -1.0f);
        glTexCoord2f(0.0, 0.0); glVertex3fv(v5);
        glTexCoord2f(0.0, 1.0); glVertex3fv(v6);
        glTexCoord2f(1.0, 1.0); glVertex3fv(v8);
        glTexCoord2f(1.0, 0.0); glVertex3fv(v7);
	glEnd();
}



void drawRampa(float originX, float originY, float originZ, float width, float height, float angle, float angleRotation){
    glPushMatrix();

    glTranslatef(originX, originY, originZ);
    glRotatef(angleRotation, 0.0f, 1.0f, 0.0f);
    glTranslatef(-originX, -originY, -originZ);

    glBegin(GL_QUADS);
        glTexCoord2f(0.0, 0.0); glVertex3f( originX + (width)/2, originY - angle, originZ + (height/2) );
        glTexCoord2f(0.0, 1.0); glVertex3f( originX - (width)/2, originY- angle, originZ + (height/2) );
        glTexCoord2f(1.0, 1.0); glVertex3f( originX - (width)/2, originY + angle, originZ - (height/2) );
        glTexCoord2f(1.0, 0.0); glVertex3f( originX + (width)/2, originY + angle, originZ - (height/2) );
	glEnd();

	glPopMatrix();
}

void drawSquare(float originX, float originY, float originZ, float width, float height){

    glBegin(GL_QUADS);
        //glNormal3f( 0.0f, 1.0f, 0.0f);
        glTexCoord2f(0.0, 0.0); glVertex3f( originX + (width)/2, originY, originZ + (height/2) );
        glTexCoord2f(0.0, 1.0); glVertex3f( originX - (width)/2, originY, originZ + (height/2) );
        glTexCoord2f(1.0, 1.0); glVertex3f( originX - (width)/2, originY, originZ - (height/2) );
        glTexCoord2f(1.0, 0.0); glVertex3f( originX + (width)/2, originY, originZ - (height/2) );
	glEnd();

}

void drawEntrada(float originX, float originY, float originZ){
    drawRetangulo(4.0f, -1.5f, -3.0f, 8.0f, 1.0f, 4.0f) ;
    drawRetangulo(-4.0f, -1.5f, -3.0f, 8.0f, 1.0f, 4.0f) ;
    drawRetangulo(0.0f, -2.5f, -1.5, 2, 2, 1);
    drawRetangulo(0.0f, -3.5f, -6.0f, 20.0f, 1.0f, 10.0f) ;
    drawRetangulo(-4.5f, -2.5f, -3.0f, 7.0f, 1.0f, 4.0f) ;
    drawRetangulo(4.5f, -2.5f, -3.0f, 7.0f, 1.0f, 4.0f) ;

    glPushMatrix();
    glTranslatef(0.0f, -1.5f, -5.0f);
    glRotatef(15.0f, 1.0f, 0.0f, 0.0f);
    glTranslatef(0.0f, 1.5f, 5.0f);

    //drawRampa(0.0f, 0.0f, -9.0f, 3.0f, 8.0f , 1.0f , 0.0f);
    drawRetangulo(0.0f, -1.5f, -7.0f, 2.0f, 1.0f, 4.0f);
    glPopMatrix();

    drawRetangulo(-9.0f, -2.0f, -5.0f, 2.0f, 2.0f , 8.0f);
    drawRetangulo(9.0f, -2.0f, -5.0f, 2.0f, 2.0f , 8.0f);

    glPushMatrix();
    glTranslatef(-4.0f, -2.0f, -7.0f);
    glRotatef(90.0f, 0.0f, 1.0f, 0.0f);
    glRotatef(15.0f, 2.0f, 0.0f, 0.0f);

    glTranslatef(4.0f, 1.5f, 7.0f);

    //drawRampa(0.0f, 0.0f, -9.0f, 3.0f, 8.0f , 1.0f , 0.0f);
    drawRetangulo(-4.0f, -2.0f, -7.0f, 2.0f, 1.0f, 8.0f);
    glPopMatrix();

    glPushMatrix();
    glTranslatef(4.0f, -2.0f, -7.0f);
    glRotatef(90.0f, 0.0f, 1.0f, 0.0f);
    glRotatef(-15.0f, 2.0f, 0.0f, 0.0f);

    glTranslatef(-4.0f, 1.5f, 7.0f);

    //drawRampa(0.0f, 0.0f, -9.0f, 3.0f, 8.0f , 1.0f , 0.0f);
    drawRetangulo(4.0f, -2.0f, -7.0f, 2.0f, 1.0f, 8.0f);
    glPopMatrix();


}

/// Desenha uma porta.
void drawDoor(float centerX, float centerY, float centerZ, float width, float height, float depth, float angle, float angularSpeed) {

    Vector3 localForward = getLocalForward( angle );

    std::cout << "Foward:\n   X: " << localForward.x << " Z: " << localForward.z << std::endl;

    glColor3f(0.8f, 0.0f, 0.0f); // Cor vermelha

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

    glColor3f(0.8f, 0.0f, 0.0f); // Cor vermelha

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

    glColor3f(0.0f, 0.8f, 0.0f); // cor verde.

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

#endif

