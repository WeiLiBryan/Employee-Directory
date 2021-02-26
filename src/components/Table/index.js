import React from "react";

function Table(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(({ id, name, image, phone, email, dob }, index) => {
                    <tr>
                        <th scope="row">{image}</th>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>{dob}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}

export default Table;