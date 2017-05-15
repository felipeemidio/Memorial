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
#include "memorial.h"
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

void specialKeyboardAction(int key, int x, int y) ;

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
	 if( image == NULL){
        std::cout << "ERROR: HAS NO IMAGE  NAMED '" << filename << "'!" <<  std::endl;
        //return;
	 }

    glPixelStorei(GL_UNPACK_ALIGNMENT, 1);
    glGenTextures(1, &texture_id[index]);
    glBindTexture(GL_TEXTURE_2D, texture_id[index]);

    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);

    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, GL_RGBA, GL_UNSIGNED_BYTE, image);
}

void init_textures() {
    loadTextureFromFile( (char*)"Texturas/cement.jpg", 0  );
    loadTextureFromFile( (char*)"Texturas/stone01.jpg", 1  );
    loadTextureFromFile( (char*)"Texturas/stone02.jpg", 2  );
    loadTextureFromFile( (char*)"Texturas/old_white_wall.jpg", 4  );
    loadTextureFromFile( (char*)"Texturas/white_wall2.jpg", 3  );
    loadTextureFromFile( (char*)"Texturas/stone04.jpg", 5  );
    loadTextureFromFile( (char*)"Texturas/floor_black.jpg", 6  );
    loadTextureFromFile( (char*)"Texturas/pavimento.jpg", 7  );
    loadTextureFromFile( (char*)"Texturas/grass.jpg", 8  );
    loadTextureFromFile( (char*)"Texturas/brasil.jpg", 9  );
    loadTextureFromFile( (char*)"Texturas/madeira.jpg", 10  );
    loadTextureFromFile( (char*)"Texturas/couro.jpg", 11  );
    loadTextureFromFile( (char*)"Texturas/durval.jpg", 12  );
    loadTextureFromFile( (char*)"Texturas/marcelo.jpg", 13  );
    loadTextureFromFile( (char*)"Texturas/alessandra.jpg", 14  );
    loadTextureFromFile( (char*)"Texturas/rubens.jpg", 15  );
    loadTextureFromFile( (char*)"Texturas/harnon.jpg", 16  );
    loadTextureFromFile( (char*)"Texturas/caio.jpg", 17  );
     loadTextureFromFile( (char*)"Texturas/victor.jpg", 18 );
     loadTextureFromFile( (char*)"Texturas/tamy.jpg", 19 );


}


/// Controla as operações do programa.
int main(int argc, char** argv){

    // Carrega as funções do GLUT.
    glutInit(&argc, argv);

    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH); // Seleciona as bit-masks (2 desenhos simultaneos e cores RGB).


    glutInitWindowSize(1000,800); // Tamanho da Tela.
    glutInitWindowPosition (200, 200); // Posição inicial da Tela.
    glutCreateWindow ("Memorial da Republica 3D"); // Cria uma janela.

    init_textures();
    init();

    //Chama a funçao que vai renderizar todos os objetos
    glutDisplayFunc( display );
    glutKeyboardFunc( keyboardAction );
    glutSpecialFunc( specialKeyboardAction );
    glutMouseFunc( mouseClicks );
    glutMotionFunc( doRotation );


    glutMainLoop(); // Mantém a tela em loop.

    return 0;
}

/// Defini as configurações iniciais.
void init() {

    GLfloat mat_specular[] = { 1.0, 1.0, 1.0, 1.0 };
    GLfloat mat_shininess[] = { 50.0 };
    GLfloat light_position[] = { 1.0, 5.0, 0.0, 0.0 };

    GLfloat light_ambient[4]={0.2,0.2,0.2,1.0};
    // Posicao inicial da camera.
    pos.x = 0.0f;
    pos.y = 0.0f;
    pos.z = 0.0f;

    // Cor da tela de fundo.
    glClearColor(0.5f, 0.6f, 0.9f, 1.0f);

	glLightfv(GL_LIGHT0, GL_AMBIENT, light_ambient);
    glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);
    glMaterialfv(GL_FRONT, GL_SHININESS, mat_shininess);

    // Especifica cor da luz e sua localização.
    glLightfv(GL_LIGHT0, GL_POSITION, light_position);

    // Habilita o sistema de luz.
    glEnable(GL_LIGHTING);
    // Habilita a cor padrao GL_LIGHT0 que é a luz branca.
    glEnable(GL_LIGHT0);

    glEnable(GL_COLOR_MATERIAL);

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

    drawDoor2(0.0f, -1.5f, -12.0f, 3.0f, 3.0f, 0.2f, 0.0f, angularSpeed);
    drawDoor2(0.0f, -1.5f, -27.0f, 3.0f, 3.0f, 0.2f, 180.0f, angularSpeed);








    drawCadeira(5.0f, -2.5f, -14.0f);



    //cilindro(0.0f, 0.0f, -20.0f, 10.5f, 0.5f, 20);
    //drawRing(5.0f, 0.5f, -20.0f, 10.5f, 0.5f, 30, 0.05f, 90.0f, 99.0f, 1.9);

    // bancos
    drawBanco(0.0f, -2.75f, -5.25f, 3.0f, 0.3f, 0.5f);
    glPushMatrix();
    glTranslatef( 1.25f, -2.75f, -6.5f);
    glRotatef(90, 0.0, 1.0, 0.0);
    drawBanco(0.0f, 0.0f, 0.0f, 2.0f, 0.3f, 0.5f);
    glPopMatrix();

    glPushMatrix();
    glTranslatef( -1.25f, -2.75f, -6.5f);
    glRotatef(90, 0.0, 1.0, 0.0);
    drawBanco(0.0f, 0.0f, 0.0f, 2.0f, 0.3f, 0.5f);
    glPopMatrix();

    //drawSphere(0.0, 3.0, -4.0, 0.5);

    drawStar(0.0f, -2.0f, -5.06f);

    glEnable(GL_TEXTURE_2D);

    glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_DECAL);


    glBindTexture(GL_TEXTURE_2D, texture_id[12]);
    drawCoiso(0.0f,  -1.9f, -16.0f, 0.0f);

    glBindTexture(GL_TEXTURE_2D, texture_id[13]);
    drawCoiso(3.0f,  -1.9f, -17.0f, 45.0f);

    glBindTexture(GL_TEXTURE_2D, texture_id[14]);
    drawCoiso(4.0f,  -1.9f, -19.0f, 90.0f);

    glBindTexture(GL_TEXTURE_2D, texture_id[15]);
    drawCoiso(3.0f,  -1.9f, -21.0f, 135.0f);

    glBindTexture(GL_TEXTURE_2D, texture_id[16]);
    drawCoiso(0.0f,  -1.9f, -23.0f, 180.0f);
    glBindTexture(GL_TEXTURE_2D, texture_id[17]);
    drawCoiso(-3.0f,  -1.9f, -17.0f, -45.0f);
    glBindTexture(GL_TEXTURE_2D, texture_id[18]);
    drawCoiso(-4.0f,  -1.9f, -19.0f, -90.0f);
    glBindTexture(GL_TEXTURE_2D, texture_id[19]);
    drawCoiso(-3.0f,  -1.9f, -21.0f, -135.0f);

    glBindTexture(GL_TEXTURE_2D, texture_id[10]);
    drawDoor2(8.0f, -1.5f, -18.0f, 3.0f, 3.5f, 0.2f, 90.0f, angularSpeed);

    drawEntrada(0.0f, 0.0f, -3.0f, texture_id);

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

void specialKeyboardAction(int key, int x, int y) {
    float rotation = 1.0f;
    switch(key)
    {
        case GLUT_KEY_UP:
            angleY -= rotation;
            break;
        case GLUT_KEY_DOWN:
            angleY += rotation;
            break;
        case GLUT_KEY_LEFT:
            angleX -= rotation;
            break;
        case GLUT_KEY_RIGHT:
            angleX += rotation;
            break;
    }

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

    float smoothRotation = 0.05;

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
