class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="menu">
                <button class="dropbutton">
                    <span style='font-size:35px; margin-bottom: 7px;'>&#9776;</span>
                </button>
                <nav>
                    <div class="acasa" >
                        <a href="index.html">Acasa</a>
                    </div>
                    <div id="ex" class="exemple">
                        <a href="./exemple.html">Produse</a>
                    </div>
                    <div class="personal">
                        <a href="./personal.html">Personal</a>
                    </div>
                    <div class="contact">
                        <a href="./contact.html">Contact</a>
                    </div>
                </nav>
            </div>        
            `
    }
}
class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
        <p>&copy; 2025 DIA.Webdesign</p>
        <div class="email_phone">
            <img src="./symbols/icons8-email-48.png" alt="" style="margin-right: 15px;">
            <a href="mailto:info@diawebdesign.com">info@diawebdesign.com</a>
        </div>

        <div class="links">
            <p style="margin-right: 10px; height: fit-content;">Social Profile</p> 
            <a href="https://www.linkedin.com/in/petru-demian-b8306262/" target = '_blank'>  
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" height="25px" />
            </a>
    
        </div>
    </footer>   
        `
    }
}
customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
