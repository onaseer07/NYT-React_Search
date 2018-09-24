import React from ('react');
import Form from ('./Form/form');
import Container from ('./container');

const Body = {
    SearchBody: ()=>{
        <React.Fragment>
            {/* Container Title */}
            <Container className='container'>
                <Container className='row'>
                    <Container className='col-lg-12 containerTitle'> 
                        Search
                    </Container>
                </Container>
            {/*Form*/}
            
                <Container className="row">
                    <Form />
                </Container>
            </Container>
        </React.Fragment>     
    },
    Results: ()=>{
        <React.Fragment>
            {/* Container Title */}
            <Container className='container'>
                <Container className='row'>
                        <Container className='col-lg-12 containerTitle'> 
                            Results
                        </Container>
                    </Container>
            

                {/* Results */}
                <Container className='col-lg-12'>
                    {...props}
                </Container>
            </Container>

        </React.Fragment>
    },
    savedArticles: ()=>{
        <React.Fragment>
        {/* Container Title */}
        <Container className='container'>
            <Container className='row'>
                    <Container className='col-lg-12 containerTitle'> 
                        Saved Articles
                    </Container>
                </Container>
        

            {/* Saved Articles */}
            <Container className='col-lg-12'>
                {...props}
            </Container>
        </Container>
    </React.Fragment>
    }
};

export default Body;