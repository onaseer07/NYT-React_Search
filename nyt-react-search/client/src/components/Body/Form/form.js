import React from ('react');
import Button from ('./button');
import Input from ('./input');

const Form = ()=>{
    <form>
        <label for='topic'>Topic</label>
        <Input id='topic' type='text' name='topic' value='' />
        <br/>
        <label for='startYr'>Start Year</label>
        <Input type='date' name='startYr' value='' />
        <br/>
        <label for='endYr'>End Year</label>
        <Input id='endYr' type='date' name='endYr' value='' />
        <br/>
        <Button id='submit' type='submit' btnValue='Search' />
    </form>
};

export default Form;