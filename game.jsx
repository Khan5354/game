import React,{Component} from "react";

class Game extends Component{
    state = {
        pics1: ["https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",],
        pics2: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mY_cvo6-XP-Fivsf9qUh_gIIDBZunOhq2Q&usqp=CAU.jpg",],
        pics3: ["https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
       pics4:["https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",],
        pics5:["https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",],
       pics6: ["https://images.pexels.com/photos/2546945/pexels-photo-2546945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",],
    playerName:[{name:""}],
    currentIndex: 0,
    view:0,
    errors:0,
    countError:0,

    };


    handleChange = (e) => {
        console.log(e.currentTarget);
        let s1 = { ...this.state};
        s1.playerName[e.currentTarget.name] = e.currentTarget.value;
        this.setState(s1);
    };

    handleStartGame = () =>{
        let s1 = { ...this.state};
        s1.view = 1;
        this.setState(s1);
    };
    
    handleDog = (pics) =>{
        let s1 = { ...this.state};
        s1.currentIndex = 1;
        this.setState(s1);
    };

    handleLoin = (pics) =>{
        let s1 = { ...this.state};
        s1.currentIndex = 2;
        this.setState(s1);
    };

    handleCat = (pics) =>{
        let s1 = { ...this.state};
        s1.currentIndex=3;
        this.setState(s1);

    };


    resetTest = () =>{
        let s1 = { ...this.state};
        s1.view = 0;
        s1.countError=0;
        s1.currentIndex=0;
        this.setState(s1);
    };

    
    handleElephant = (pics) =>{
        let s1 = { ...this.state};
        s1.currentIndex=4;
        this.setState(s1);

    };
    handleTiger = (pics) =>{
        let s1 = { ...this.state};
        s1.currentIndex=5;
        this.setState(s1);

    };
    handleDeer = (pics) =>{
        let s1 = { ...this.state};
        s1.view=2;
        this.setState(s1);

    };


    handleError1 = (pics) =>{
        let s1 = { ...this.state};
        s1.errors=1;
        s1.countError++;
        this.setState(s1);

    };
    handleError2 = (pics) =>{
        let s1 = { ...this.state};
        s1.errors=2;
        s1.countError++;
        this.setState(s1);

    };
handleError3 = (pics) =>{
    let s1 = { ...this.state};
    s1.errors=3;
    s1.countError++;
    this.setState(s1);

};
handleError4 = (pics) =>{
    let s1 = { ...this.state};
    s1.errors=4;
    s1.countError++;
    this.setState(s1);

};
handleError5 = (pics) =>{
    let s1 = { ...this.state};
    s1.errors=5;
    s1.countError++;
    this.setState(s1);

};
handleError6 = (pics) =>{
    let s1 = { ...this.state};
    s1.errors=6;
    s1.countError++;
    this.setState(s1);

};



   showResult = () =>{
       let { countError, playerName } = this.state;
       return (
           <div className="container">
               <br/>
               <br/>
               <div className="row">
                   <div className="col-4"></div>
                   <h1 className="text-warning">{playerName.name} your test result</h1>
                   <h3 className="text-primary">Test Score is : 6 / 6</h3>
                   <div className="col-8">
                   <h3>So many errers in your test : {countError}</h3>
                   <button className="btn btn-primary m-3"onClick={()=>this.resetTest()}>Try Again</button>
                    </div>
               </div>
           </div>
       );

   };



    showQuestion = () =>{
        let { pics1, pics2, pics3,pics4,pics5,pics6, currentIndex, playerName ,countError, errors} = this.state;
            console.log(countError);
        return (
            <div className="container border">
                <h4 className="text-center">Player Name : {playerName.name} </h4>
                  {currentIndex === 0 ? (
                   <div className="col  text-center ">
                   <img style={{width:"450px"}} src={pics1} value={pics1}></img>
                   <div className="row text-center">
                   <div className="col  text-center"> 
                   <br/>
                   <h4>Q.1 What is this</h4>
                      <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleDog()}>Dog</button>
                      <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError1()}>Cat</button>
                     
                      <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError1()}>Tiger</button>
                      <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError1()}>Deer</button>                      
                      {errors === 1 ? <h5 className="text-danger">Worng Answer</h5> : ""}
                      </div>
                      </div>
               </div>
                  ) : ( currentIndex === 1 ) ? (
                    <div className="col  text-center ">
                    <img style={{width:"450px"}} src={pics2} value={pics2}></img>
                    <div className="row text-center">
                    <div className="col  text-center"> 
                    <h4>Q.2 What is this</h4>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError2()}>Dog</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleLoin()}>Loin</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError2()}>Tiger</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError2()}>Deer</button> 
                       {errors === 2 ? <h5 className="text-danger">Worng Answer</h5> : ""}                     
                       </div>
                       </div>
                </div>
                  )  : (currentIndex === 2) ? (
                    <div className="col  text-center ">
                    <img style={{width:"450px" , height:"320px"}} src={pics3} value={pics3}></img>
                    <div className="row text-center">
                    <div className="col  text-center"> 
                    <h4>Q.3 What is this</h4>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError3()}>Dog</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError3()}>Loin</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleCat()}>Cat</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError3()}>Deer</button> 
                       {errors === 3 ? <h5 className="text-danger">Worng Answer</h5> : ""}                     
                       </div>
                       </div>
                </div>
                      
                  )  : (currentIndex === 3) ? (
                    <div className="col  text-center ">
                    <img style={{width:"400px" , height:"320px"}} src={pics4} value={pics4}></img>
                    <div className="row text-center">
                    <div className="col  text-center"> 
                    <h4>Q.4 What is this</h4>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError4()}>Dog</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleElephant()}>Elephant</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError4()}>Cat</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError4()}>Deer</button>
                       {errors === 4 ? <h5 className="text-danger">Worng Answer</h5> : ""}                      
                       </div>
                       </div>
                </div>

                )  : (currentIndex === 4) ? (
                    <div className="col  text-center ">
                    <img style={{width:"450px" , height:"350px"}} src={pics5} value={pics5}></img>
                    <div className="row text-center">
                    <div className="col  text-center"> 
                    <h4>Q.5 What is this</h4>
                       <button className="btn btn-primary text-light m-2"  onClick={()=>this.handleError5()} >Dog</button>
                       <button className="btn btn-primary text-light m-2" onClick={()=>this.handleError5()} >Elephant</button>
                       <button className="btn btn-primary text-light m-2" onClick={()=>this.handleError5()} >Cat</button>
                       <button className="btn btn-primary text-light m-2"  onClick={()=>this.handleTiger()}>Tiger</button> 
                       {errors === 5 ? <h5 className="text-danger">Worng Answer</h5> : ""}                     
                       </div>
                       </div>
                </div>

                )  : (currentIndex === 5) ? (
                    <div className="col  text-center ">
                    <img style={{width:"450px" , height:"350px"}} src={pics6} value={pics6}></img>
                    <div className="row text-center">
                    <div className="col  text-center"> 
                    <h4>Q.6 What is this</h4>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError6()}>Dog</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError6()}>Elephant</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleError6()}>Cat</button>
                       <button className="btn btn-primary text-light m-2 "  onClick={()=>this.handleDeer()}>Deer</button>
                       {errors === 6 ? <h5 className="text-danger">Worng Answer</h5> : ""}                      
                       </div>
                       </div>
                </div>

                )

                
                : "" }

            </div>
        );

    };
 
    

    render () {
        let { name, view }= this.state;

        return (
            <div className="container m-4">

                
                {  view === 0 ? (
                <div className="row">
                    <h1 className="text-primary text-center">Welcome to the Quiz Comptition</h1>
                <div className="col-4"></div>
                <div className="col-4">
                <div className="form-group">
                <label className="m-3">Name</label>
                <input type="text" className="form-control"
                 id="name" name="name"
                 value={name}
                 placeholder="Enter Name" 
                 onChange={this.handleChange} />
                
            </div>
            <br/>
            <button className="btn btn-primary text-center" onClick={()=>this.handleStartGame()}>Start Game</button>
               </div>
               </div>
            ) :  (view===1) ?  this.showQuestion()  
            :  (view===2) ? this.showResult() :"" }
 
            </div>
        

        );
    };
}
    export default Game;