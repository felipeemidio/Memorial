/**
    Main.cpp
    Purpose: For now, it do everything.

    @author Felipe E. E. Silva
    @version 1.0 26/03/17
*/

#include<iostream>
#include<GL/gl.h>
#include<GL/glu.h>
#include<GL/glut.h>
#include<math.h>

#include "formas.h"

struct Vector3 {
    GLfloat x;
    GLfloat y;
    GLfloat z;
};

bool pressKey = false;
bool click = false;

Vector3 pos;

GLfloat angleX = 0.0f;
GLfloat angleY = 0.0f;

float x_old = 0;
float y_old = 0;

/**
    Defini as configurações iniciais.
*/
void init();

/**
    Desenha na tela.
*/
void display(void);

/**
    Return the absolute value of a number.

    @param n Number that will be analysed.
    @return absolute value of n.
*/
GLfloat getAbs( GLfloat n);

/**
    Return 1 if n is positive or -1 if negative.

    @param n Number that will be analysed.
    @return 1 for n >= 0 or -1 if not.
*/
int getSign(GLfloat n);

/**
    Normalize a vector3.

    @param v The vector that should be normalized.
    @return The vector normalizes.
*/
Vector3 normalize(Vector3 v);

/**
    Ações de acordo com a tecla inserida.

    @param key The char representing the key pressed on the keyboard.
    @param x The x position of the mouse when key was pressed.
    @param y The y position of the mouse when key was pressed.
*/
void keyboardAction(unsigned char key, int x, int y);

/**
    Faz a rotação de acordo com a movimentação do mouse.

    @param x The x position of the mouse arrow.
    @param y The y position of the mouse arrow.
*/
void doRotation(int x, int y);

/**
    Pega os clicks do mouse.

    @param button The clicked mouse button.
    @param x The x position of the click.
    @param y The y position of the click.
 */
void mouseClicks(int button, int state, int x, int y);

/// Controls operation of the program.
int main(int argc, char** argv){

    // Carrega as funções do GLUT.
    glutInit(&argc, argv);

    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB); // Seleciona as bit-masks (2 desenhos simultaneos e cores RGB).

    glutInitWindowSize(1000,800); // Tamanho da Tela.
    glutInitWindowPosition (200, 200); // Posição inicial da Tela.
    glutCreateWindow ("Memorial da Republica 3D"); // Cria uma janela.
    glutKeyboardFunc( keyboardAction );
    glutMouseFunc( mouseClicks );
    glutMotionFunc( doRotation );

    init();

    glutMainLoop(); // Mantém a tela em loop.

    return 0;
}

/// Defini as configurações iniciais.
void init() {
    // Cor da rela de fundo.
    glClearColor(1.0f, 1.0f, 1.0f, 1.0f);

    // Posicao inicial da camera.
    pos.x = 0.0f;
    pos.y = 0.0f;
    pos.z = 0.0f;

    /* Use depth buffering for hidden surface elimination. */
    glEnable(GL_DEPTH_TEST);
    // Faz a projeção de acordo com as coordenadas do OpenGL (é diferente dos pixel da tela do PC)
    glMatrixMode(GL_PROJECTION);

    gluPerspective( /* field of view in degree */ 40.0,
    /* aspect ratio */ 1.0,
    /* Z near */ 1.0, /* Z far */ 30.0);

    glMatrixMode(GL_MODELVIEW);

    //Chama a funçao que vai renderizar todos os objetos
    glutDisplayFunc( display );
}

/// Desenha na tela.
void display(void){

    glLoadIdentity(); // Zera a matrix para a matrix identidade.

    // Transformações.
    glRotatef(angleY, 1.0f, 0.0f, 0.0f);
    glRotatef(angleX, 0.0f, 1.0f, 0.0f);
    std::cout << "  ANGLE:\n   x: " << angleX << " y: "<< angleY << std::endl;
    std::cout << "  POSITION:\n   x: " << pos.x << " y: "<< pos.y << " z: " << pos.z << std::endl;

    glTranslatef(pos.x, pos.y, pos.z );

    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    drawCube(); // Desenha um cubo.

    glFlush(); // Força a execução dos comandos do openGL em tempo finito.
    glutSwapBuffers(); // Troca os buffers de desenho.
}

/// Return the absolute value of a number.
GLfloat getAbs( GLfloat n){
    if(n > 0)
        return n;
    else if(n < 0)
        return -n;
    return 0.0f;
}

/// Return 1 if n is positive or -1 if negative.
int getSign(GLfloat n) {
    if(n>= 0)
        return 1;
    else
        return -1;
}

/// Normalize a vector3.
Vector3 normalize(Vector3 v){
    GLfloat maior;

    Vector3 absolute;
    absolute.x = getAbs(v.x);
    absolute.y = getAbs(v.y);
    absolute.z = getAbs(v.z);

    if( absolute.x >= absolute.y && absolute.x >= absolute.z ){
        maior = absolute.x;
    }
    else if( absolute.y >= absolute.x && absolute.y >= absolute.z ){
        maior = absolute.y;
    }
    else if( absolute.z >= absolute.x && absolute.z >= absolute.y ){
        maior = absolute.z;
    }

    v.x = v.x / maior;
    v.y = v.y / maior;
    v.z = v.z / maior;

    return v;
}

/// Ações de acordo com a tecla inserida.
void keyboardAction(unsigned char key, int x, int y){

    GLfloat radX = (angleX * M_PI)/180;
    GLfloat radY = (angleY * M_PI)/180;

    // Vetor que direciona a frente local da camera.
    Vector3 _forward;
    _forward.x = 1* sin(radX);//*getSign(angleX);
    _forward.y = 1* sin(radY);
    _forward.z = 1* cos(radX);
    _forward = normalize(_forward);

    std::cout << "  foward:\n   x: " << _forward.x << " y: "<< _forward.y << " z: " << _forward.z << std::endl;

    float smooth = 0.02;
    switch (key){
        case 'W':
            smooth += 0.1;
        case 'w':
            smooth += 0.02;
            pos.x -= _forward.x * smooth;
            pos.y += _forward.y * smooth;
            pos.z += _forward.z * smooth;
            break;
        case 'S':smooth += 0.1;
        case 's':
            smooth += 0.02;
            pos.x += _forward.x * smooth;
            pos.y -= _forward.y * smooth;
            pos.z -= _forward.z * smooth;
            break;
        case 'A':
            smooth += 0.1;
        case 'a':
            pos.x += _forward.z * smooth ;
            pos.z += _forward.x * smooth ;
            break;
        case 'D':
            smooth += 0.1;
        case 'd':
            pos.x -= _forward.z * smooth ;
            pos.z -= _forward.x * smooth ;
            break;
    }
    std::cout << "  position:\n   x: " << pos.x << " y: "<< pos.y << " z: " << pos.z << std::endl;
    std::cout << "  angle:\n   x: " << angleX << " y: "<< angleY << std::endl;

    glutPostRedisplay();
}

/// Faz a rotação de acordo com a movimentação do mouse.
void doRotation(int x, int y){
    //std::cout << x-x_old << " x " << x << " x_old " << x_old << std::endl;

    float smoothRotation = 0.01;

    // Cotrola força de rotação.
    if(x - x_old > 100 or x_old - x > 100){
        x_old = x;
    }
    if(y - y_old > 100 or y_old - y > 100){
        y_old = y;
    }

    angleX += smoothRotation * (x_old-x);
    angleY += smoothRotation * (y_old-y);

    y_old =  y;
    x_old =  x;

    glutPostRedisplay();
}

/// Pega os clicks do mouse.
void mouseClicks(int button, int state, int x, int y) {

    if(button == GLUT_MIDDLE_BUTTON && state == GLUT_DOWN) {
        std::cout << "change color" << std::endl;
        std::cout << "  angle:\n   x: " << angleX << " cosX " << cos(angleX) << " senX " << sin(angleX)<<" y: "<< angleY << std::endl;

        pressKey = !pressKey;
    }

    glutPostRedisplay();
}
