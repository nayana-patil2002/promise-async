 
 let cl=console.log;
 
  const blogForm=document.getElementById("blogForm");
  const titleControl=document.getElementById("title");
  const contentControl=document.getElementById("content");
  const blogContainer=document.getElementById("blogContainer");


 const blogArr=[
    {
      title:"Angular",
      content:"Angular is a popular and powerful framework for building web applications of any scale",
      id:"123"
    },
    {
      title:"Javascript",
      content:"Javascrip is a popular and powerful framework for building web applications of any scale",
      id:"123"
    },
    {
      title:"Html",
      content:"Html is a popular and powerful framework for building web applications of any scale",
      id:"123"
    },
 ]


  const generateUuid= () =>{
     return (
       String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
     ).replace(/[xy]/g, (character) => {
       const random = (Math.random() * 16) | 0;
       const value = character === "x" ? random : (random & 0x3) | 0x8;
       return value.toString(16);
    });
   };



   const creteCards = (arr) =>{
        let result=""

             arr.forEach(ele=>{
               result+=`
                 <div class="card mb-5">

                    <div class="card-header">
                        <h2>${ele.title}</h2>
                    </div>
                    <div class="card-body">
                        <p>${ele.content}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <button type="button" class="btn btn-primary bg-success">Edit</button>
                        <button type="button" class="btn btn-primary bg-danger">Remove</button>
                    </div>
                </div>
               
               
               `
             })

             blogContainer.innerHTML=result
   }


   const fetchBlogs =(data)=>{
     setTimeout(()=>{
      //get the data in database
        let error=Math.random() >=0.5 ? false: true;
        if(!error){
          creteCards(data)
        }else{
          cl("Something went wrong while fetching data")
        }
     }, 900)
   }


   const createBlog = (blog)=>{
    //post the data in database
      setTimeout(() => {
          let error=Math.random() >= 0.5 ? false: true;
          if(!error){
            blogArr.push(blog)
            fetchBlogs(blogArr)
          }else{
            cl("Something went wrong while creating Blog")
          }
       
      }, 1000);
   }

  const onBlodAdd = (eve) =>{
     eve.preventDefault();

      let blogObj = {
             title:titleControl.value,
             content:contentControl.value,
             blogId:generateUuid(),
      }
      createBlog(blogObj) 
      // cl(blogArr)
      blogForm.reset();
      
  }




 blogForm.addEventListener("submit", onBlodAdd)