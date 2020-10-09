

////////---------------------
//var App = React.createClass({
//    getInitialState: function () {
//        return { data: '' };
//    },
//    componentWillMount: function () {
//        //debugger;
//        var xhr = new XMLHttpRequest();
//        xhr.open('get', this.props.url, true);
//        xhr.onload = function () {
//            var response = JSON.parse(xhr.responseText);

//            this.setState({ data: response.Data });
//        }.bind(this);
//        xhr.send();
//    },

//    render: function () {
//        return (
//            <h2>{this.state.data}</h2>
//        );
//    }
//});

//ReactDOM.render(<App url="/Home/GetMessageNew" />, document.getElementById('content'));

////-------------------------

//var HelloWorld = React.createClass({
//    render: function () {
//        return (
//            <div> hello {this.props.name} </div>
//        );
//    }
//});
//ReactDOM.render(
//    <HelloWorld name="Ankit" />,
//    document.getElementById('content')
//);

//////////////--------------------------
//var CommentBox = React.createClass({
//    render: function () {
//        return (
//            <div className="commentBox">
//                <h1>Header</h1>
//                <h2>Content</h2>
//                Hello, world! This is Ankit Champaneria from JSX.
//            </div>
//        );
//    }
//});
//ReactDOM.render(
//    <CommentBox />,
//    document.getElementById('content')
//);


