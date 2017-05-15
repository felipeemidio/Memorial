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
    Desenha um quadrado.

    @param centerX Posicao no eixo x onde se encontra o centro do quadrado.
    @param centerY Posicao no eixo y onde se encontra o centro do quadrado.
    @param centerZ Posicao no eixo z onde se encontra o centro do quadrado.
    @param width Largura do quadrado.
    @param height Altura do quadrado.
    @param depth Profundidade do quadrado.
*/
void  drawSquare( float originX, float originY, float originZ, float width, float height );


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

///Desenha um quadrado.
void  drawSquare( float originX, float originY, float originZ, float width, float height ) {

    glBegin(GL_QUADS);
        glTexCoord2f(0.0, 0.0); glVertex3f( originX + (width)/2, originY, originZ + (height/2) );
        glTexCoord2f(0.0, 1.0); glVertex3f( originX - (width)/2, originY, originZ + (height/2) );
        glTexCoord2f(1.0, 1.0); glVertex3f( originX - (width)/2, originY, originZ - (height/2) );
        glTexCoord2f(1.0, 0.0); glVertex3f( originX + (width)/2, originY, originZ - (height/2) );
	glEnd();

}

void base(GLfloat raio, GLint segmentos)
{
	GLfloat  alpha;
	int      i;

    alpha = 2*getPI() / segmentos;

	glBegin(GL_POLYGON);
		glNormal3f(0.0,0.0,1.0);
		for(i=0; i<segmentos ;i++)
		{
			glVertex3f(cos(alpha*i)*raio,sin(alpha*i)*raio,0.0);
		}
	glEnd();
}

void corpo( GLfloat raio, GLfloat altura, GLint segmentos)
{
	GLfloat  alpha;
	int i;

	alpha = 2*getPI() / segmentos;

	glBegin(GL_QUADS);
		for(i=0; i<segmentos ;i++)
		{
			glNormal3f(cos(alpha*i),sin(alpha*i),0.0);
			glTexCoord2f(0.0, 0.0); glVertex3f(cos(alpha*i)*raio,sin(alpha*i)*raio,altura/2);
			glTexCoord2f(0.0, 1.0); glVertex3f(cos(alpha*i)*raio,sin(alpha*i)*raio,-altura/2);
			glNormal3f(cos(alpha*(i+1)),sin(alpha*(i+1)),0.0);
			glTexCoord2f(1.0, 1.0); glVertex3f(cos(alpha*(i+1))*raio,sin(alpha*(i+1))*raio,-altura/2);
			glTexCoord2f(1.0, 0.0); glVertex3f(cos(alpha*(i+1))*raio,sin(alpha*(i+1))*raio,altura/2);
		}
	glEnd();
}

void drawRing( float originX, float originY, float originZ,  GLfloat raio, GLfloat altura, GLint segmentos,  GLfloat espessura,
              float rotationX, float rotationY, float rotationZ, float quad){
    glPushMatrix();
    glTranslatef(originX, originY, originZ);
    glRotatef(rotationX, 1.0f, 0.0f, 0.0f);
    glRotatef(rotationY, 0.0f, 1.0f, 0.0f);
    glRotatef(rotationZ, 0.0f, 0.0f, 1.0f);



    GLfloat  alpha;
	int i;

    if(quad < 0 || quad >= 2 ){
            alpha = 2*getPI() / segmentos;
    }
    else {
            alpha = quad*getPI() / segmentos;
    }


	glBegin(GL_QUADS);
		for(i=0; i<segmentos ;i++)
		{
			glNormal3f(cos(alpha*i),sin(alpha*i),0.0);
			glTexCoord2f(0.0, 0.0); glVertex3f(cos(alpha*i)*raio,sin(alpha*i)*raio,altura/2);
			glTexCoord2f(0.0, 1.0); glVertex3f(cos(alpha*i)*raio,sin(alpha*i)*raio,-altura/2);
			glNormal3f(cos(alpha*(i+1)),sin(alpha*(i+1)),0.0);
			glTexCoord2f(1.0, 1.0); glVertex3f(cos(alpha*(i+1))*raio,sin(alpha*(i+1))*raio,-altura/2);
			glTexCoord2f(1.0, 0.0); glVertex3f(cos(alpha*(i+1))*raio,sin(alpha*(i+1))*raio,altura/2);
		}
	glEnd();


	GLfloat raio2 = raio * (1 - espessura);
	glBegin(GL_QUADS);
		for(i=0; i<segmentos ;i++)
		{
			glNormal3f(cos(alpha*i),sin(alpha*i),0.0);
			glTexCoord2f(0.0, 0.0); glVertex3f(cos(alpha*i)*raio2,sin(alpha*i)*raio2,altura/2);
			glTexCoord2f(0.0, 1.0); glVertex3f(cos(alpha*i)*raio2,sin(alpha*i)*raio2,-altura/2);
			glNormal3f(cos(alpha*(i+1)),sin(alpha*(i+1)),0.0);
			glTexCoord2f(1.0, 1.0); glVertex3f(cos(alpha*(i+1))*raio2,sin(alpha*(i+1))*raio2,-altura/2);
			glTexCoord2f(1.0, 0.0); glVertex3f(cos(alpha*(i+1))*raio2,sin(alpha*(i+1))*raio2,altura/2);
		}
	glEnd();

	glBegin(GL_QUADS);
		for(i=0; i<segmentos ;i++)
		{
			glNormal3f(0.0f, 1.0f, 0.0f);
			glTexCoord2f(0.0, 0.0); glVertex3f(cos(alpha*i)*raio,sin(alpha*i)*raio,altura/2);
			glTexCoord2f(0.0, 1.0); glVertex3f(cos(alpha*i)*raio2,sin(alpha*i)*raio2,altura/2);
			glTexCoord2f(1.0, 1.0); glVertex3f(cos(alpha*(i+1))*raio2,sin(alpha*(i+1))*raio2,altura/2);
			glTexCoord2f(1.0, 0.0); glVertex3f(cos(alpha*(i+1))*raio,sin(alpha*(i+1))*raio,altura/2);
		}
	glEnd();

	glBegin(GL_QUADS);
		for(i=0; i<segmentos ;i++)
		{
			glNormal3f(0.0f, -1.0f, 0.0f);
			glTexCoord2f(0.0, 0.0); glVertex3f(cos(alpha*i)*raio,sin(alpha*i)*raio,-altura/2);
			glTexCoord2f(0.0, 1.0); glVertex3f(cos(alpha*i)*raio2,sin(alpha*i)*raio2,-altura/2);
			glTexCoord2f(1.0, 1.0); glVertex3f(cos(alpha*(i+1))*raio2,sin(alpha*(i+1))*raio2, -altura/2);
			glTexCoord2f(1.0, 0.0); glVertex3f(cos(alpha*(i+1))*raio,sin(alpha*(i+1))*raio, -altura/2);
		}
	glEnd();

	glBegin(GL_QUADS);
        i = segmentos;
        glNormal3f(1.0f, 0.0f, 0.0f);
        glTexCoord2f(0.0, 0.0); glVertex3f(cos(alpha*i)*raio,sin(alpha*i)*raio,altura/2);
        glTexCoord2f(0.0, 1.0); glVertex3f(cos(alpha*i)*raio,sin(alpha*i)*raio,-altura/2);
        glTexCoord2f(1.0, 1.0); glVertex3f(cos(alpha*(i))*raio2,sin(alpha*(i))*raio2, -altura/2);
        glTexCoord2f(1.0, 0.0); glVertex3f(cos(alpha*(i))*raio2,sin(alpha*(i))*raio2, altura/2);

        i=0;
        glNormal3f(-1.0f, 0.0f, 0.0f);
        glTexCoord2f(0.0, 0.0); glVertex3f(cos(alpha*i)*raio,sin(alpha*i)*raio,altura/2);
        glTexCoord2f(0.0, 1.0); glVertex3f(cos(alpha*i)*raio,sin(alpha*i)*raio,-altura/2);
        glTexCoord2f(1.0, 1.0); glVertex3f(cos(alpha*(i))*raio2,sin(alpha*(i))*raio2, -altura/2);
        glTexCoord2f(1.0, 0.0); glVertex3f(cos(alpha*(i))*raio2,sin(alpha*(i))*raio2, altura/2);

	glEnd();


    glPopMatrix();
}

void drawSphere(float originX, float originY, float originZ, GLfloat radius){

    glPushMatrix();
    glTranslatef(originX, originY, originZ);
    glutSolidSphere(radius, 50, 50);
    glPopMatrix();
}

void cilindro( float originX, float originY, float originZ, GLfloat raioBase, GLfloat altura, GLint segmentos)
{
    glPushMatrix();
    glRotatef(90.0f, 1.0f, 0.0f, 0.0f);
    glTranslatef(originX, originZ, -originY);

	glPushMatrix();
		glTranslatef(0.0,0.0,altura/2);
		base(raioBase,segmentos);
	glPopMatrix();

	glPushMatrix();
		glTranslatef(0.0,0.0,-altura/2);
        glRotatef(180,1,0,0); // para as normais ficarem para fora
		base(raioBase,segmentos);
	glPopMatrix();

	corpo(raioBase, altura, segmentos);

	glPopMatrix();

}

#endif

