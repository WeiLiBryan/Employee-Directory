import React from "react";

function Table() {
    return (
        <table class="table table-striped">
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
                <tr>
                    <th scope="row">Image1</th>
                    <td>Mark ZUxkk</td>
                    <td>1010-2020-33030</td>
                    <td>e@mdo</td>
                    <td>12-15-1998</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;