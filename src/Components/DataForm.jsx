function DataForm(params) {
   return(
    <div>
        <form action="" > 
        <label for="avatar">
             <input type="file" id="avatar" name="avatar" accept="image/png" />
             </label> <br />

            <label for="nom">
                 votre nom :
                <input type="text" name="nom" id="nom" />
                </label> <br />

                <label for="mail">
                    Entrez votre adresse mail :
                <input type="email" id="mail" name="mail"/>
                </label>
                <br />
                <button>Connection </button>
        </form>
    </div>
   ); 
}
export default DataForm