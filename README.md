# File-Organization-using-nodeJs

--> The repository contains a project of organizing file structure to specific folder based on the extension that the file has.
--> Programming Languae : NodeJs. <br><br>

--> Commands for different functionality : <br>
   --> Organize - node main.js organize "path of the source folder(under which you want to organize)" <br>
   --> tree - node main.js tree "path of the source folder(under which you want to organize)" <br>
   --> Help - node main.js help "path of the source folder(under which you want to organize)" <br><br>
   
--> About the code : <br>
  --> Given the path of directory that has several files and folders in it, the code will take the path of that directory as input and will have three functionalities : <br><br>
    --> Organize : It will create a folder named "Organzed folder" and will create folder of different types mentioned in the code under types array, then it will check one by one every file extension and will push the file under that folder created, if there is no file extension found under the list of types which is mentioned then it will create folder called other and it will append into that.
      
      --> Files which needs to be organized. Here all the files need to be organized in seperate folder called "organized folder".
      
![oraganize structure - before](https://github.com/siddhapurahet/File-Organization-using-nodeJs/assets/84630752/eed91e45-424c-4d57-b0d2-c16693ceb0a7)



      --> Files after running Organizing function. Here all the files with same extension are there in one particular folder and rest are in others.

  ![oraganize structure - after](https://github.com/siddhapurahet/File-Organization-using-nodeJs/assets/84630752/0d1abcac-587e-4dde-987c-473834c3d2a9)



   --> Tree : This function will display all the files and folders in the tree structureand will use the recursion to traverse to each level of the directory. 
   

![tree structure](https://github.com/siddhapurahet/File-Organization-using-nodeJs/assets/84630752/897e9aee-5163-4fc3-9ae5-54e329983c2f)


  


