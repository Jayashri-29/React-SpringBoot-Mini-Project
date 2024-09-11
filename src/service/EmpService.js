import axios from "axios";
class EmpService{
    addEmp(emp)
    {
        return axios.post("http://localhost:8081/saveemp",emp);
    }
    getEmp()
    {
        return axios.get("http://localhost:8081/getemp");
    }
    delemp(eid)
    {
        return axios.get("http://localhost:8081/delemp/"+eid);
    }
    getById(eid)
    {
        return axios.get("http://localhost:8081/searchemp/"+eid);
    }
    updateEmpById(emp,eid)
    {
        return axios.put("http://localhost:8081/updemp/"+eid,emp);
    }
    searchempbyName(name)
    {
        return axios.get("http://localhost:8081/searchbyname/"+name);
    }
}
export default new EmpService();