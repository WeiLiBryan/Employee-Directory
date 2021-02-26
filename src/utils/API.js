import axios from "axios";

export default {
    findUser: function() {
        return axios.get({
            url: 'https://randomuser.me/api/?results=50', 
            dataType: 'json',
            success: function(data) {
                return {
                    image: data.results.picture.thumbnail,
                    name: data.results.name.first + " " + data.results.name.last,
                    phone: data.results.phone,
                    email: data.results.email,
                    dob: data.results.dob.date
                }
            }
        })
    }
}