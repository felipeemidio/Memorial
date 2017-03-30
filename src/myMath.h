/**
    myMath.h
    Purpose: Mathematical library.

    @author Felipe E. E. Silva
    @version 1.0 30/03/17
*/

#include<math.h>

#ifndef _MYMATH_H
#define _MYMATH_H

struct Vector3{
    GLfloat x;
    GLfloat y;
    GLfloat z;
};

/**
    Return the absolute value of a number.

    @param n Number that will be analysed.
    @return absolute value of n.
*/
GLfloat getAbs2( GLfloat n);

/**
    Return 1 if n is positive or -1 if negative.

    @param n Number that will be analysed.
    @return 1 for n >= 0 or -1 if not.
*/
int getSign(GLfloat n);

/**
    Return a vector3 that points to the local foward based on the angle.

    @param angle Is the angle in xz plane.
    @return A vector with the direction of local forward.
*/
Vector3 getLocalForward(float angle);

/**
    Normalize a vector3.

    @param v The vector that should be normalized.
    @return The vector normalizes.
*/
Vector3 normalize(Vector3 v);

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

/// Return a vector3 that points to the local foward based on the angle.
Vector3 getLocalForward(float angle){
    GLfloat radians = (angle/180)* M_PI;

    Vector3 _forward;
    _forward.x = sin(radians);
    _forward.y = 0.0f;
    _forward.z = cos(radians);

    return _forward;
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
#endif

