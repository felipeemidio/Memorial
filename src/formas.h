/**
    formas.h
    Purpose: Serve as a library to draw some polygons.

    @author Felipe E. E. Silva
    @version 1.0 26/03/17
*/

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

#endif

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

    glBegin(GL_QUADS);
	// top
	//glColor3f(1.0f, 0.0f, 0.0f);
	glNormal3f(1.0f, 1.0f, 1.0f);
	glVertex3fv(v1);
	glVertex3fv(v2);
	glVertex3fv(v6);
	glVertex3fv(v5);

	glEnd();

	glBegin(GL_QUADS);
	// front
	//glColor3f(0.0f, 1.0f, 0.0f);
	glNormal3f(0.0f, 0.0f, 1.0f);
	glVertex3fv(v1);
	glVertex3fv(v2);
	glVertex3fv(v4);
	glVertex3fv(v3);

	glEnd();

	std::cout << "v1 " << v1[0]<<  " " << v1[1] << " " << v1[2] << std::endl;
	std::cout << "v2 " << v2[0]<<  " " << v2[1] << " " << v2[2] << std::endl;
	std::cout << "v3 " << v3[0]<<  " " << v3[1] << " " << v3[2] << std::endl;
	std::cout << "v4 " << v4[0]<<  " " << v4[1] << " " << v4[2] << std::endl;

	glBegin(GL_QUADS);
	// right
	//glColor3f(0.0f, 0.0f, 1.0f);
	glNormal3f(1.0f, 0.0f, 0.0f);
	glVertex3fv(v2);
	glVertex3fv(v6);
	glVertex3fv(v8);
	glVertex3fv(v4);

	glEnd();

	glBegin(GL_QUADS);
	// left
	//glColor3f(0.0f, 0.0f, 0.5f);
	glNormal3f(-1.0f, 0.0f, 0.0f);
	glVertex3fv(v1);
	glVertex3fv(v5);
	glVertex3fv(v7);
	glVertex3fv(v3);

	glEnd();

	glBegin(GL_QUADS);
	// bottom
	//glColor3f(0.5f, 0.0f, 0.0f);
	glNormal3f(0.0f, -1.0f, 0.0f);
	glVertex3fv(v3);
	glVertex3fv(v4);
	glVertex3fv(v8);
	glVertex3fv(v7);

	glEnd();

	glBegin(GL_QUADS);
	// back
	//glColor3f(0.0f, 0.5f, 0.0f);
	glNormal3f(0.0f, 0.0f, -1.0f);
	glVertex3fv(v5);
	glVertex3fv(v6);
	glVertex3fv(v8);
	glVertex3fv(v7);

	glEnd();



}
