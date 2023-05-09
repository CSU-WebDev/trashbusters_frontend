import Spinner from 'react-bootstrap/Spinner';

export default function CustomSpinner(props) {
    return (
        <div id="spinnerDiv">
            <Spinner id='spinner' animation="border" variant="dark" />
        </div>
    )
}