import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  Form  from 'react-bootstrap/Form';
import  Table  from 'react-bootstrap/Table';
import  Button  from 'react-bootstrap/Button';
import'bootstrap/dist/css/bootstrap.css';
class FormView extends Component {
    state = {
        studentList:[],
        rollNumber:'',
        name:'',
        age:'',
        standard:'',
        idValue:0,
        updateButton:false,
        updateStudentId:null
    }

    // componentWillMount() {
    //     console.log("[componentWillMount]");
    //     let oldState = [...this.state.studentList];
    //     console.log(this.state.studentList);
    //     this.setState({studentList:oldState});
    //     console.log(oldState);
    // }

    // componentDidMount() {
    //     console.log("[componentDidMount]"); 
    //     // console.log(this.state.studentList);
    //     let oldState = [...this.state.studentList];
    //     this.setState({studentList:oldState});
    //     console.log(this.state.studentList);
    //     console.log(oldState);
    // }

    componentWillUnmount() {

    }

    onChangeRollNumberHandeller = (event) => {
        
        this.setState({rollNumber:event.target.value});
        // console.log(this.state.studentList);
    }

    onChangeNameHandeller = (event) => {
        this.setState({name:event.target.value});
        // console.log(this.state.name);
    }

    onChangeAgeHandeller = (event) => {
        this.setState({age:event.target.value});
        // console.log(this.state.age);
    }

    onChangeStandardHandeller = (event) => {
        this.setState({standard:event.target.value});
        // console.log(this.state.standard);
    }

    onSubmitHandeller = (e) => {
        e.preventDefault();
        let id = this.state.idValue;
        id = id + 1;
        this.setState({idValue:id});
        let rollNumber = this.state.rollNumber;
        let Name = this.state.name;
        let Age = this.state.age;
        let standard = this.state.standard;
        // let obj = {
        //     id : id
        // };
        
        // let obj = {
        //     rollNumber:rollNumber,Name:Name,Age:Age,standard:standard,id:id
        // };

        let obj = {
            rollNumber,
            Name,
            Age,
            standard,
            id
          };
      
          let oldState = [...this.state.studentList];
          oldState.push(obj);
          // console.log(oldState);
          // oldState = oldState + obj;
          // console.log(oldState);
          // const newState = oldState.push(obj);
          // const copy = this.state.studentList;
        //   rollNumber='';name='';age='';standard='';

           rollNumber = '';
           Name = '';
           Age = '';
           standard = '';

          this.setState({ studentList: oldState });
          this.setState({ rollNumber: rollNumber });
          this.setState({ name: Name});
          this.setState({ age: Age });
          this.setState({ standard: standard });
        //   console.log(this.state.studentList);
    }

    checkOnSubmit = (event) => {
        // event.preventDefault();
  
    }

    deleteSelected = (id) => {
        const oldState = [...this.state.studentList];
        oldState.splice(id,1);
        // console.log(id);
        // console.log(oldState);
        // oldState.map((obj) => { 
        //     console.log(obj);
        //     if(obj.id == (id+1)) {
        //         obj.splice(id,1);
        //         console.log("Came In");
        //         // this.setState({studentList:oldState});
        //         // return;
        //     }
        // }); 
        this.setState({studentList:oldState});
        // return;
        // splice(id,1);
        // this.setState({studentList:oldState});
        // console.log(this.state.studentList)
    }

    editSelected = (id) => {
        let oldState = [...this.state.studentList];
        
        this.setState({updateStudentId:id});
        this.setState({updateButton:true});

        let newState = this.state.studentList[id];

        // console.log(oldState);
        // oldState.map((obj) => {
        //     console.log(obj.id);
        //     if(obj.id == id-1) {
        //         console.log(obj);
            let rollNumber = newState.rollNumber;
            let name = newState.Name;
            let age = newState.Age;
            let standard = newState.standard;

            

            this.setState({rollNumber:rollNumber});
            this.setState({name:name});
            this.setState({age:age});
            this.setState({standard:standard});
            // console.log(oldState);
        //     }
        // }); 
    }

    deleeteDataForStudent = () => {
        // e.preventDefault();

        // let oldState = [...this.state.studentList];
        
        const id = this.state.updateStudentId;

        const oldState = [...this.state.studentList];
        oldState.splice(id,1);
        this.setState({studentList:oldState});

        let RrollNumber = '';
          let NName = '';
          let AAge = '';
          let Sstandard = '';

          this.setState({ rollNumber: RrollNumber });
          this.setState({ name: NName});
          this.setState({ age: AAge });
          this.setState({ standard: Sstandard });

          this.setState({updateStudentId:null});
            this.setState({updateButton:false});

    }

    updateDataForStudent = (e) => {
        e.preventDefault();

        let oldState = [...this.state.studentList];
        
        const id = this.state.updateStudentId;
        // this.setState({updateStudentId:id});

        // this.setState({updateStudentId:id});
        // this.setState({updateButton:true});

        let newState = this.state.studentList[id];

        console.log("[updateDataForStudent] Came ");
        console.log(this.state.rollNumber);
        // oldState.map((obj) => {
            console.log(newState);
        //     if(obj.id == (id-1)) {
        //         console.log(obj);

            newState.rollNumber = this.state.rollNumber;
            newState.Name = this.state.name;
            newState.Age = this.state.age;
            newState.standard = this.state.standard;


            let rollNumber = this.state.rollNumber;
            let Name = this.state.name;
            let Age = this.state.age;
            let standard = this.state.standard;
            
            // let key = 2;
            this.setState(prevState => ({
                studentList: prevState.studentList.map(
                el => el.key === id? { ...el, ...newState }: el
                )
            }))

            this.setState({updateStudentId:null});
            this.setState({updateButton:false});


        //     this.setState({ rollNumber: rollNumber });
        //   this.setState({ name: Name});
        //   this.setState({ age: Age });
        //   this.setState({ standard: standard });

            // this.setState({name:name});
            // this.setState({age:age});
            // this.setState({standard:standard});

            // console.log(obj);
                
        //     }
        // }); 

        // let obj = {
        //     id : id
        // };
        
        // let obj = {
        //     rollNumber:rollNumber,Name:Name,Age:Age,standard:standard,id:id
        // };
          // console.log(oldState);
          // oldState = oldState + obj;
          // console.log(oldState);
          // const newState = oldState.push(obj);
          // const copy = this.state.studentList;
        //   rollNumber='';name='';age='';standard='';

          let RrollNumber = '';
          let NName = '';
          let AAge = '';
          let Sstandard = '';

          this.setState({ rollNumber: RrollNumber });
          this.setState({ name: NName});
          this.setState({ age: AAge });
          this.setState({ standard: Sstandard });
        //   console.log(this.state.studentList);
    }

    // onClick={this.onSubmitHandeller}

    render() {

        let  ButtonName
        if(this.state.updateButton) {
           ButtonName = (
                        <div>
                        <Button variant="primary" type="submit" onClick={this.updateDataForStudent} >
                            Update
                        </Button> 
                        <Button className="ml-4" variant="danger" onClick={this.deleeteDataForStudent} >Delete</Button> </div>
          );
                    
        }
        else {
            ButtonName= (  <Button variant="primary" type="submit" >
                Submit
            </Button> 
            );
        }

        // console.log(this.state.studentList);

        let StudentData = (
            this.state.studentList.map((list,index) => {
                // console.log(list);
                return (
                    <tr key={list.id}>
                        <td>{list.id}</td>
                        <td>{list.Name}</td>
                        <td>{list.rollNumber}</td>
                        <td>{list.Age}</td>
                        <td>{list.standard}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => this.deleteSelected(index)} >Delete</button>
                            <button className="btn btn-primary ml-2" onClick={() => this.editSelected(index)} >Edit</button>
                        </td>
                    </tr>
                );
            })
        );

        return (
            <div className="container">
                <div class="m-atuo mt-2"><h1>Student Lists</h1></div>
                <div className="col-sm-8 border text-left p-2 float-left mt-5 w-100">
                    <Table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Roll Number</th>
                                <th>Age</th>
                                <th>Standard</th>
                            </tr>
                        </thead>
                        <tbody>
                            {StudentData}
                        </tbody>
                    </Table>
                </div>
                    <div className="col-sm-4 border text-left p-3 float-right mt-5 w-100">
                    <Form onSubmit={this.onSubmitHandeller}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Roll Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Roll Number" value={this.state.rollNumber} autoComplete="off"
                            onChange={this.onChangeRollNumberHandeller} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name"  value={this.state.name} autoComplete="off"  onChange={this.onChangeNameHandeller}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter Age"  value={this.state.age} autoComplete="off"  onChange={this.onChangeAgeHandeller} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Class</Form.Label>
                            <Form.Control type="text" placeholder="Enter class"  value={this.state.standard} autoComplete="off"  onChange={this.onChangeStandardHandeller} />
                        </Form.Group>
                        {ButtonName}
                    </Form>
                </div>
            </div>
        );
    }
}



export default FormView;