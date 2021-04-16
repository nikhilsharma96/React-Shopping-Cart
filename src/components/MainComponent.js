import React from 'react';
import { Card, CardImg, CardTitle, CardSubtitle,  CardText, CardBody, Row, Col } from 'reactstrap'

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isLoaded:true,
            items:[]
        };
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result)
              this.setState({
                isLoaded: true,
                items: result
              });
            },)
        }
    
    render(){
        console.log(this.state.items);
        const display = this.state.items.map((item) =>{
            return (
                <div key={item.id}>
                    <Card>
                        <CardSubtitle tag="h6" className=" text-muted">{item.category}</CardSubtitle>
                        <CardTitle tag="h5">{item.title}</CardTitle>
                        <CardBody>    
                            <CardImg width="10%" src={item.image}></CardImg>
                            {/* <CardText>{item.description}</CardText> */}
                        </CardBody>
                    </Card>
                </div>
            )
        })
        return (
            <div>
                <h1>MainComponent</h1>
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-9 col-8">
                            {display}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;