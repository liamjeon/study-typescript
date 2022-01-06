{
  /*
    *Type Aliases
    사용자가 타입을 정의할 수 있다! 
    */
   type Text = string;
   const name: Text = 'liam';
   const address: Text = 'korea';
   type Num = number;
   type Student = {
       name: string;
       age: number;
   };
   const student:Student = {
       name: 'liam',
       age: 30,
   };

   //String Literal Types
   type Name = 'name';
   let liamName: Name;
   liamName = 'name';
   type JSON = 'json';
   const json:JSON = 'json';
     
}
