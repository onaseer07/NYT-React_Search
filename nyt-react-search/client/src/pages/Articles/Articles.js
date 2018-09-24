import React, {Component} from 'react';
import Body from '../../components/Body/index';
import API from '../../utils/API';


class Articles extends Component {
    state = {
        articles: [],
        title:'',
        url:'',
        date:''
    };

    componentDidMount() {
        this.loadArticles();
      }

      loadArticles = () => {
        API.getArticles()
            .then(res => this.setState({
                books: res.data,
                title: '',
                url: '',
                date: ''
            }))
            .catch(err => console.log(err));
      };

      deleteBook = id =>{
          API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.url) {
          API.saveArticle({
            title: this.state.title,
            url: this.state.url,
            date: this.state.date
          })
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
        }
      };

      render() {
          return (
              <Body.SearchBody />
          );
      }


}

export default Articles;