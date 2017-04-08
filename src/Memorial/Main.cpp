/**
    Main.cpp
    Purpose: Construct the 3D envoriment.

    @author Felipe E. E. Silva
    @version 1.0 30/03/17
*/

#include<iostream>
#include<GL/gl.h>
#include<GL/glu.h>
#include<GL/glut.h>
#include<math.h>

#include "myMath.h"
#include "formas.h"
#include "SOIL.h"

bool pressKey = false;
bool click = false;
bool isOpen = false;
bool isDoorMoving = false;

Vector3 pos;

GLfloat angularSpeed = 0.0f;
GLfloat angleX = 0.0f;
GLfloat angleY = 0.0f;

float x_old = 0;
float y_old = 0;

//texture variables
GLuint texture_id[9];

/**
    Defini as configurações iniciais.
*/
void init();

/**
    Desenha na tela.
*/
void display();

/**
    Ações de acordo com a tecla inserida.

    @param key The char representing the key pressed on the keyboard.
    @param x The x position of the mouse when key was pressed.
    @param y The y position of the mouse when key was pressed.
*/
void keyboardAction(unsigned char key, int x, int y);

/**
    Pega os clicks do mouse.

    @param button The clicked mouse button.
    @param x The x position of the click.
    @param y The y position of the click.
 */
void mouseClicks(int button, int state, int x, int y);

/**
    Faz a rotação de acordo com a movimentação do mouse.

    @param x The x position of the mouse arrow.
    @param y The y position of the mouse arrow.
*/
void doRotation(int x, int y);

/**
    Make the rotation of the doors.
*/
void moveDoor();

void loadTextureFromFile(char *filename,int index)
{

	 int width, height;

	 unsigned char* image = SOIL_load_image(filename, &width, &height, 0, SOIL_LOAD_RGBA);
	 //printf("%d %d\n", width, height);
    glPixelStorei(GL_UNPACK_ALIGNMENT, 1);
    glGenTextures(1, &texture_id[index]);
    glBindTexture(GL_TEXTURE_2D, texture_id[index]);

    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);

    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, GL_RGBA, GL_UNSIGNED_BYTE, image);
}

void init_textures(){
    loadTextureFromFile( (char*)"stone_floor.jpg", 0  );


}


/// Controla as operações do programa.
int main(int argc, char** argv){

    // Carrega as funções do GLUT.
    glutInit(&argc, argv);

    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH); // Seleciona as bit-masks (2 desenhos simultaneos e cores RGB).

    glutInitWindowSize(1000,800); // Tamanho da Tela.
    glutInitWindowPosition (200, 200); // Posição inicial da Tela.
    glutCreateWindow ("Memorial da Republica 3D"); // Cria uma janela.
    //Chama a funçao que vai renderizar todos os objetos
    glutDisplayFunc( display );
    glutKeyboardFunc( keyboardAction );
    glutMouseFunc( mouseClicks );
    glutMotionFunc( doRotation );

    init_textures();
    init();


    glutMainLoop(); // Mantém a tela em loop.

    return 0;
}

/// Defini as configurações iniciais.
void init() {

    // Posicao inicial da camera.
    pos.x = 0.0f;
    pos.y = 0.0f;
    pos.z = 0.0f;

    // Cor da rela de fundo.
    glClearColor(1.0f, 1.0f, 1.0f, 1.0f);



    // Habilita o teste de profundidade.
    glEnable(GL_DEPTH_TEST);



    // Faz a projeção de acordo com as coordenadas do OpenGL (é diferente dos pixel da tela do PC)
    glMatrixMode(GL_PROJECTION);

    gluPerspective( /* field of view in degree */ 40.0f,
    /* aspect ratio */ 1.0f,
    /* Z near */ 1.0f, /* Z far */ 100.0f);

    glMatrixMode(GL_MODELVIEW);


}

/// Desenha na tela.
void display(void){

    /* Usa depth buffering para eliminar as camadas escondidas. */
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT );

    glLoadIdentity(); // Zera a matrix para a matrix identidade.

    // Transformações.
    glRotatef(angleY, 1.0f, 0.0f, 0.0f);
    glRotatef(angleX, 0.0f, 1.0f, 0.0f);
    glTranslatef(pos.x, pos.y, pos.z );
    //std::cout << "  ANGLE:\n   x: " << angleX << " y: "<< angleY << std::endl;
    //std::cout << "  POSITION:\n   x: " << pos.x << " y: "<< pos.y << " z: " << pos.z << std::endl;

    glColor3f(0.0f, 0.0f, 0.75f);
    drawRetangulo(0.0f, 0.0f, -5.0f, 1.0f, 3.0f, 1.0f);

    drawDoor2(0.0f, 0.0f, -7.0f, 3.0f, 3.0f, 0.5f, 0.0f, angularSpeed);

    glEnable(GL_TEXTURE_2D);
    //glEnable(GL_TEXTURE_GEN_S);
    //glEnable(GL_TEXTURE_GEN_T);

    glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_DECAL);

    glBindTexture(GL_TEXTURE_2D, texture_id[0]);

    glColor3f(0.75f, 0.75f, 0.75f);
    drawSquare(0.0f, -1.0f, 0.0f, 10.0, 10.0);


    //glDisable(GL_TEXTURE_GEN_S);
    //glDisable(GL_TEXTURE_GEN_T);
    glDisable(GL_TEXTURE_2D);

    glFlush(); // Força a execução dos comandos do openGL em tempo finito.
    glutSwapBuffers(); // Troca os buffers de desenho.

}

/// Ações de acordo com a tecla inserida.
void keyboardAction(unsigned char key, int x, int y){

    // Pega o vetor de frente local.
    GLfloat radY = (angleY * M_PI)/180;
    Vector3 localForward = getLocalForward( angleX );
    localForward.y = sin(radY);
    localForward = normalize(localForward);

    float smooth = 0.02;
    switch (key){
        case 'W':
            smooth += 0.1;
        case 'w':
            smooth += 0.02;
            pos.x -= localForward.x * smooth;
            pos.y += localForward.y * smooth;
            pos.z += localForward.z * smooth;
            break;
        case 'S':smooth += 0.1;
        case 's':
            smooth += 0.02;
            pos.x += localForward.x * smooth;
            pos.y -= localForward.y * smooth;
            pos.z -= localForward.z * smooth;
            break;
        case 'A':
            smooth += 0.1;
        case 'a':
            pos.x += localForward.z * smooth ;
            pos.z += localForward.x * smooth ;
            break;
        case 'D':
            smooth += 0.1;
        case 'd':
            pos.x -= localForward.z * smooth ;
            pos.z -= localForward.x * smooth ;
            break;

        case ' ':
            if (!isDoorMoving){
                isDoorMoving = true;
                glutIdleFunc( moveDoor );
            }
            break;

    }
    //std::cout << "  position:\n   x: " << pos.x << " y: "<< pos.y << " z: " << pos.z << std::endl;
    //std::cout << "  angle:\n   x: " << angleX << " y: "<< angleY << std::endl;

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

/// Make the rotation of the doors.
void moveDoor(){
    // If door is close.
    if(!isOpen){
        angularSpeed += 1.0f;
        if( angularSpeed >= 90 ){
            glutIdleFunc( NULL );
            isOpen = true;
            isDoorMoving = false;
        }
    }
    // If door is open.
    else{
        angularSpeed -= 1.0f;
        if(angularSpeed <= 0){
            glutIdleFunc( NULL);
            isOpen = false;
            isDoorMoving = false;
        }
    }
    glutPostRedisplay();
}
