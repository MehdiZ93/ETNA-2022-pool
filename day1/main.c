#include <stdio.h>

void star(int x) {
  int spaces;
  
  if (x > 0) {
    spaces = x;
    //stars top
    for(int i = 0; x - i > 0; i++) {
      for (int j = i; j < 3 * x; j++) {
	printf(" ");
      }
      printf("*");
      if(i > 0){
	printf(" ");
	if (i > 1){
	  for(int k = 0; k < (i - 1) * 2; k++){
	    printf(" ");
	  }
	}
	printf("*");
      }
      printf("\n");
    }
	
    //stars top line
        spaces = x;
    for(int i = 0; i < 2 * x + 1; i++){
      printf("*");
    }
    for(int i = 0; i < (x * 2) - 1; i++){
      printf(" ");
    }
    for(int i = 0; i < 2 * x + 1; i++){
      printf("*");
    }
    printf("\n");

    /*    for(int i = 0; i <= (2 * x) + 1; i++){
      printf("*");
    }
    for(int i = 0; i < ((x - 1) * 2) - 1; i++){
      printf(" ");
    }
    for(int i = 0; i <= (2 * x) + 1; i++){
      printf("*");
    }
    printf("\n");*/
	
    //stars body top

    for(int i = 1; i <= x; i++) {
      for (int j = 0; j < i; j++) {
	printf(" ");
      }
      printf("* ");
      spaces = x - i;
      for(int k = 0; k < (4 * x - 1) + (spaces * 2); k++){
	printf(" ");
      }

      printf("*\n");
    }
	
    //stars body bottom
    for(int i = x - 1; i > 0; i--) {
      for (int j = 0; j < i; j++) {
	printf(" ");
      }
      printf("*");
      spaces = x - i;
      for(int k = 0; k < (4 * x) + (spaces * 2); k++){
	printf(" ");
      }
      printf("*\n");
    }
	
    //stars bottom line
    spaces = x;
    for(int i = 0; i < 2 * x + 1; i++){
      printf("*");
    }
    for(int i = 0; i < (x * 2) - 1; i++){
      printf(" ");
    }
    for(int i = 0; i < 2 * x + 1; i++){
      printf("*");
    }
    printf("\n");

    //stars bottom
    for(int i = 2 * x; i <= 3 * x; i++) {
      for (int j = 0; j < i; j++) {
	printf(" ");
      }
      printf("*");
      if (spaces > 0){ 
	printf(" ");
	if (spaces > 1){
	  for(int k = 0; k < (spaces - 1) * 2; k++){
	    printf(" ");
	  }
	}
	printf("*\n");
	spaces--;
      }
    }
    printf("\n");
  }
}


int main() {
  for (int i = 0; i <= 10; ++i)
    star(i);
    return 0;
}
