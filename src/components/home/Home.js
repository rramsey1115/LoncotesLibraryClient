export const Home = () => {
    return (
    <section className="container" style={{marginTop:30}}>
        <div style={{marginTop:30}}> 
            <h1>📖 Welcome to Loncotes County Library 📖</h1>
        </div>
        <div style={{marginTop:30}}>
            <h4>Full-Stack React App built by Ryan Ramsey for Nashville Software School</h4>
            <p style={{fontSize:20}}>
                This application tracks data bout users, library materials, checkouts, overdue fees, and library inventory. 
                This application is imagined to be used only by library employees for the purposes of this project. 
            </p>
            <p style={{fontSize:20}}>
                This project was built to improve skills using C# endpoints connected to a postgreSQL database.
                pgAdmin was used to manage data. The client side was built using React and Reactstrap, 
                designed with simplicity and clarity in mind, 
                as the main focus was the back-end functionality. 
            </p>
        </div>
        <div align="left">
            <table style={{marginTop:30}}>
                <thead>
                    <tr><th><h4>Skills Used:</h4></th></tr>
                </thead>
                <tbody>
                <tr>
                    <td width="150"><img width="80" src="https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png" alt="C#" title="C#"/></td>
                    <td width="150"><img width="80" src="https://user-images.githubusercontent.com/25181517/121405754-b4f48f80-c95d-11eb-8893-fc325bde617f.png" alt=".NET Core" title=".NET Core"/></td>               
                    <td width="150"><img width="80" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL"/></td>
                    <td width="150"><img width="80" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></td>
                    <td width="150"><img width="80" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub"/></td>
                </tr>
                <tr>
                    <td width="150"><img width="80" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code"/></td>
                    <td width="150"><img width="80" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></td>
                    <td width="150"><img width="80" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></td>
                    <td width="150"><img width="80" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></td>
                    <td width="150"><img width="80" src="https://user-images.githubusercontent.com/25181517/186711335-a3729606-5a78-4496-9a36-06efcc74f800.png" alt="Swagger" title="Swagger"/></td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>)
}