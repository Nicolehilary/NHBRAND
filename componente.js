class Componente extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const div = document.createElement("div");
    div.className = "card mb-3 mt-3";
    div.innerHTML = `
    <div class="row">
    <div class="col-md-4 mb-4">
          <div class="card">
            <img src="./image/CONJUNTO ESMERALDA.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">CONJUNTO ESMERALDA</h5>
              <p class="card-text">Em alfaiataria, tamanho unico</p>
              <p class="card-text">Preço: R$ 149,90</p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>

        
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="./image/CONJUNTO SOL.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">CONJUNTO SOL</h5>
              <p class="card-text">Tecido crepe, veste até um 44.</p>
              <p class="card-text">Preço: R$ 89,90</p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
            <div class="card">
              <img src="./image/CONJUNTO JADE.jpeg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">CONJUNTO JADE</h5>
                <p class="card-text">Tecido crepe, veste até um 44.</p>
                <p class="card-text">Preço: R$ 189,90</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="./image/VESTIDO SICILIA.jpeg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">VESTIDO SICILIA</h5>
                <p class="card-text">Tecido Alfaiataria, tamanho único.</p>
                <p class="card-text">Preço: R$ 190,00</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="./image/CONJUNTO LUA.jpeg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">CONJUNTO LUA</h5>
                <p class="card-text">Tecido Linho, veste até um 40.</p>
                <p class="card-text">Preço: R$ 200,00</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="./image/CONJUNTO RUBI.jpeg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">CONJUNTO RUBI</h5>
                <p class="card-text">Tecido Linho, tamanho único.</p>
                <p class="card-text">Preço: R$ 120,90</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="./image/VESTIDO JASMIM.jpeg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">VESTIDO JASMIM</h5>
                <p class="card-text">Tecido Alfaiataria, veste até um 42.</p>
                <p class="card-text">Preço: R$ 150,85</p>
                <a href="#" class="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>

        
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="./image/CONJUNTO HILARY.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">CONJUNTO HILARY</h5>
              <p class="card-text">Conjunto em alfaiataria premium, veste até um 42.</p>
              <p class="card-text">Preço: R$ 169,90</p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
      </div>
    `;
    this.appendChild(div);
  }

}

customElements.define("componente-novo", Componente);