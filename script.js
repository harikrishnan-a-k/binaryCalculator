
        function clearRes(){
            document.querySelector('#res').innerText='';
        }
        function setValue(val){
            document.querySelector('#res').innerText+=val;
        }
        function evaluate(){
            let input= document.querySelector('#res').innerText;
            let operands=input.match(/[01]+/g);
            let [b1,b2]=operands;
            num1=parseInt(b1,2);
            num2=parseInt(b2,2);
            let operator=input.match(/[\+\-\*\/]/)[0];
            let ans=parseInt(eval(num1+operator+num2));
            document.querySelector('#res').innerText=ans.toString(2);
        }
  document.querySelectorAll('button').forEach(function(button){
      button.addEventListener('click',function(e){
          let val=e.target.innerText;
          console.log(val);
          switch(val){
                case 'C':clearRes();
                        break;
                case '=': evaluate();
                            break;
                default: setValue(val);
          }
      })
  })      