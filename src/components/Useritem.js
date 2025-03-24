import react from 'react'
const Useritem = (props) => {
    const {id, name} = props.user;
    return(
        <div>
            <table>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                </tr>
            </table>
        </div>
    );
};
export default Useritem;