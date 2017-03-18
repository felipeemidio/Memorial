#include<iostream>
#include<GL/gl.h>
#include<GL/glu.h>
#include<GL/glut.h>

struct Vector3 {
    GLfloat x;
    GLfloat y;
    GLfloat z;
};

GLfloat n[6][3] = {  /* 6 retas normais de um cubo  */
  {-1.0, 0.0, 0.0}, {0.0, 1.0, 0.0}, {1.0, 0.0, 0.0},
  {0.0, -1.0, 0.0}, {0.0, 0.0, 1.0}, {0.0, 0.0, -1.0} };
GLint faces[6][4] = {  /* Vertex indices for the 6 faces of a cube. */
  {0, 1, 2, 3}, {3, 2, 6, 7}, {7, 6, 5, 4},
  {4, 5, 1, 0}, {5, 6, 2, 1}, {7, 4, 0, 3} };
GLfloat v[8][3];  /* Será */

bool pressKey = false;
bool click = false;

Vector3 pos;
Vector3 point;

float x_old = 0;
float y_old = 0;

/*
 * Normalize a vector3.
 */
Vector3 normalize(Vector3 v){
    GLfloat maior;
    std::cout << "ENTER v:\n   x: " << v.x << " y: "<< v.y << " z: " << v.z << std::endl;
    if( abs(v.x) >= abs(v.y) && abs(v.x) >= abs(v.z) )
        maior = abs(v.x);
    else if(abs(v.y) >= abs(v.x) && abs(v.y) >= abs(v.z))
        maior = abs(v.y);
    else if( abs(v.z) >= abs(v.x) && abs(v.z) >= abs(v.y) )
        maior = abs(v.z);

    std::cout << "maior: " << maior << std::endl;

    v.x = v.x / maior;
    v.y = v.y / maior;
    v.z = v.z / maior;

    std::cout << "OUT v:\n   x: " << v.x << " y: "<< v.y << " z: " << v.z << std::endl;

    return v;
}

void drawBox() {
    /* Adjust cube position to be asthetic angle. */
    glTranslatef(0.0, 0.0, -1.0);
    glRotatef(60, 1.0, 0.0, 0.0);
    glRotatef(-20, 0.0, 0.0, 1.0);

    // Desenha um cubo.
    int i;
    for (i = 0; i < 6; i++) {
        if(pressKey){
            glColor3f(1.0, 0.0, 0.0);
        }
        else{
            // Seleciona a cor de desenho no modelo RGB.
            glColor3f(0.2, 0.2, 1.0);
        }
        glBegin(GL_QUADS);
        glNormal3fv(&n[i][0]);
        glColor3f(1.0, 0.0, 0.0);
        glVertex3fv(&v[faces[i][0]][0]);
        glVertex3fv(&v[faces[i][1]][0]);
        glColor3f(0.0, 1.0, 0.0);
        glVertex3fv(&v[faces[i][2]][0]);
        glVertex3fv(&v[faces[i][3]][0]);
        glEnd();
    }
}

/*
 * draw objects to render;
 */
void display(void){
    glLoadIdentity(); // Zera a matrix para a matrix identidade.

    gluLookAt( pos.x, pos.y, pos.z,
                point.x, point.y, point.z,
                0.0, 1.0, 0.0);

    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    drawBox(); //Desenha um cubo.

    glFlush(); // Força a execução dos comandos do openGL em tempo finito.
    glutSwapBuffers(); // Troca os buffers de desenho.
}

void init(){

    glClearColor(1.0, 1.0, 1.0, 1.0);

    /* Setup cube vertex data. */
    v[0][0] = v[1][0] = v[2][0] = v[3][0] = -1;
    v[4][0] = v[5][0] = v[6][0] = v[7][0] = 1;
    v[0][1] = v[1][1] = v[4][1] = v[5][1] = -1;
    v[2][1] = v[3][1] = v[6][1] = v[7][1] = 1;
    v[0][2] = v[3][2] = v[4][2] = v[7][2] = 1;
    v[1][2] = v[2][2] = v[5][2] = v[6][2] = -1;

    pos.x = 0.0;
    pos.y = 0.0;
    pos.z = 5.0;

    point.x = 0.0;
    point.y = 0.0;
    point.z = 0.0;

    /* Use depth buffering for hidden surface elimination. */
    glEnable(GL_DEPTH_TEST);
    // Faz a projeção de acordo com as coordenadas do OpenGL (é diferente dos pixel da tela do PC)
    glMatrixMode(GL_PROJECTION);

    gluPerspective( /* field of view in degree */ 40.0,
    /* aspect ratio */ 1.0,
    /* Z near */ 1.0, /* Z far */ 20.0);

    glMatrixMode(GL_MODELVIEW);

    //Chama a funçao que vai renderizar todos os objetos
    glutDisplayFunc( display );
}

/*
 * Ações de acordo com a tecla inserida
 */
void keyboardAction(unsigned char key, int x, int y){

    Vector3 direction;
    direction.x = point.x - pos.x;
    direction.y = point.y - pos.y;
    direction.z = point.z - pos.z;
    direction = normalize(direction);

    float smooth = 0.1;
    switch (key){
        case 'W':smooth += 0.2;
        case 'w':
            point.x += direction.x * smooth;
            point.y += direction.y * smooth;
            point.z += direction.z * smooth;
            pos.x += direction.x * smooth;
            pos.y += direction.y * smooth;
            pos.z += direction.z * smooth;
            break;
        case 'S':smooth += 0.2;
        case 's':
            point.x -= direction.x * smooth;
            point.y -= direction.y * smooth;
            point.z -= direction.z * smooth;
            pos.x -= direction.x * smooth;
            pos.y -= direction.y * smooth;
            pos.z -= direction.z * smooth;
            break;


    }

    switch (key){
        case 'a':
            pos.x -= 0.1;
            point.x -= 0.1;
            break;
        case 'd':
            pos.x += 0.1;
            point.x += 0.1;
            break;
    }
    std::cout << "  direction:\n   x: " << direction.x << " y: "<< direction.y << " z: " << direction.z << std::endl;

    glutPostRedisplay();
}

/*
 * Faz a rotação de acordo com a movimentação do mouse.
 */
void doRotation(int x, int y){
    //std::cout << x-x_old << " x " << x << " x_old " << x_old << std::endl;
    // Cotrola força de rotação.
    if(x - x_old > 50 or x_old - x > 50){
        x_old = x;
    }
    if(y - y_old > 50 or y_old - y > 50){
        y_old = y;
    }

    // Rotação em x.
    if(x > x_old){
        point.x -= 0.002 * (x-x_old);
        x_old =  x;
    }
    else{
        point.x += 0.002 * (x_old-x);
        x_old =  x;
    }

    // Rotação em y.
    if(y > y_old){
        point.y += 0.002 * (y-y_old);
        y_old =  y;
    }
    else{
        point.y -= 0.002 * (y_old-y);
        y_old =  y;
    }

    glutPostRedisplay();
}

/*
 * Pega os clicks do mouse.
 */
void mouseClicks(int button, int state, int x, int y) {

    if(button == GLUT_MIDDLE_BUTTON && state == GLUT_DOWN) {
        std::cout << "change color" << std::endl;
        std::cout << "  point:\n   x: " << point.x << " y: "<< point.y << " z: " << point.z << std::endl;
        pressKey = !pressKey;
    }

    glutPostRedisplay();

}

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


