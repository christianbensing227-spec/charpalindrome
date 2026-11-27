#include <stdio.h>

int main() {
    char word[100];                      
    int size = 0;                         

    printf("Enter a word: ");            
    scanf("%s", word);                     

    while (word[size] != 0) {      
        size++;
    }

    int tail = size - 1;                  
    int palindrome = 1;                   

    for (int head = 0; head < size / 2; head++) {  
        if (word[head] != word[tail]) {  
            palindrome = 0;              
            break;                       
        }
        tail--;                           
    }
    if (palindrome) {
        printf("\nPalindrome?:YES");       
    }
    else {
        printf("\nPalindrome?:NO");      
    }

    return 0;                         
