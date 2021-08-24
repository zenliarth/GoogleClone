const appGoogle = document.querySelector(".appGoogle");
appGoogle.style.backgroundColor = "#FFF";
appGoogle.style.display = "flex";
appGoogle.style.flexDirection = "column";
appGoogle.style.width = "100%";
appGoogle.style.height = "100%";
appGoogle.style.position = "absolute";
appGoogle.style.margin = 0;

const header = document.createElement("div");
appGoogle.appendChild(header);
header.style.height = "100%";
header.style.height = "50px";

const headerLinks = document.createElement("div");
header.appendChild(headerLinks);
headerLinks.style.display = "flex";
headerLinks.style.justifyContent = "flex-end";
headerLinks.style.alignItems = "center";
headerLinks.style.marginTop = "12px";

const linkGmail = document.createElement("a");
linkGmail.href = "http://www.gmail.com";
linkGmail.innerText = "Gmail";
linkGmail.style.marginRight = "15px";
linkGmail.style.fontSize = "13px";
headerLinks.appendChild(linkGmail);

const linkImagens = document.createElement("a");
linkImagens.href = "#";
linkImagens.innerText = "Imagens";
linkImagens.style.marginRight = "30px";
linkImagens.style.fontSize = "13px";
headerLinks.appendChild(linkImagens);

const linkMenuPontilhado = document.createElement("img");
linkMenuPontilhado.src = "./imagens/appmenu.gif";
linkMenuPontilhado.style.color = "gray";
linkMenuPontilhado.style.width = "18px";
linkMenuPontilhado.style.marginRight = "25px";
headerLinks.appendChild(linkMenuPontilhado);

const btnLogin = document.createElement("button");
btnLogin.innerText = "Fazer login";
btnLogin.style.marginRight = "18px";
btnLogin.style.padding = "10px 25px";
btnLogin.style.fontSize = "0.875rem";
btnLogin.style.color = "#fff";
btnLogin.style.border = "none";
btnLogin.style.borderRadius = "4px";
btnLogin.style.cursor = "pointer";
headerLinks.appendChild(btnLogin);
/* MEIO DO HTML -  CONTÉM A LOGO */
const midBody = document.createElement("div");
appGoogle.appendChild(midBody);
midBody.style.flexGrow = "1";

const divLogo = document.createElement("div");
midBody.appendChild(divLogo);
divLogo.style.display = "flex";
divLogo.style.justifyContent = "center";
divLogo.style.alignItems = "center";
divLogo.style.marginTop = "70px";
divLogo.style.width = "100%";

const imgLogo = document.createElement("img");
imgLogo.src = "./imagens/logo.png";
imgLogo.style.minWidth = "200px";
imgLogo.style.width = "270px";
divLogo.appendChild(imgLogo);

const divSearchPrincipal = document.createElement("div");
divSearchPrincipal.style.display = "flex";
divSearchPrincipal.style.justifyContent = "center";
divSearchPrincipal.style.marginTop = "25px";
midBody.appendChild(divSearchPrincipal);

const divSearch = document.createElement("div");
divSearch.style.display = "flex";
divSearch.style.justifyContent = "center";
divSearch.style.alignItems = "center";
divSearch.style.height = "42px";
divSearch.style.borderRadius = "20px";
divSearch.classList.add("hover");
divSearchPrincipal.appendChild(divSearch);

const divImgSearch = document.createElement("div");
divImgSearch.style.display = "flex";
divImgSearch.style.justifyContent = "center";
divImgSearch.style.alignItems = "center";
divImgSearch.style.border = "1px solid rgba(0,0,0,0.1)";
divImgSearch.style.borderRight = "none";
divImgSearch.style.height = "42px";
divImgSearch.style.padding = "0px 15px";
divImgSearch.style.borderTopLeftRadius = "45%";
divImgSearch.style.borderBottomLeftRadius = "45%";
divSearch.appendChild(divImgSearch);

const divInputSearch = document.createElement("div");
divInputSearch.style.display = "flex";
divInputSearch.style.justifyContent = "center";
divInputSearch.style.alignItems = "center";
divInputSearch.style.border = "1px solid rgba(0,0,0,0.1)";
divInputSearch.style.borderRight = "none";
divInputSearch.style.borderLeft = "none";
divSearch.appendChild(divInputSearch);

const divMicroSearch = document.createElement("div");
divMicroSearch.style.display = "flex";
divMicroSearch.style.justifyContent = "center";
divMicroSearch.style.alignItems = "center";
divMicroSearch.style.border = "1px solid rgba(0,0,0,0.1)";
divMicroSearch.style.borderLeft = "none";
divMicroSearch.style.height = "42px";
divMicroSearch.style.padding = "0px 20px";
divMicroSearch.style.borderTopRightRadius = "45%";
divMicroSearch.style.borderBottomRightRadius = "45%";
divSearch.appendChild(divMicroSearch);

const imgSearch = document.createElement("img");
imgSearch.src = "./imagens/lupa.png";
imgSearch.style.width = "20px";
imgSearch.style.cursor = "pointer";
divImgSearch.appendChild(imgSearch);

const inputSearch = document.createElement("input");
inputSearch.type = "text";
inputSearch.style.width = "450px";
inputSearch.style.height = "40px";
inputSearch.style.border = "none";
inputSearch.style.outline = "none";
inputSearch.style.color = "rgba(0,0,0,0.87)";
inputSearch.style.fontSize = "16px";
inputSearch.focus();
divInputSearch.appendChild(inputSearch);

const microSearch = document.createElement("img");
microSearch.src = "./imagens/microfone.png";
microSearch.style.width = "15px";
microSearch.style.cursor = "pointer";
divMicroSearch.appendChild(microSearch);

/* PESQUISA GOOGLE / ESTOU COM SORTE */

const divPesquisaPrincipal = document.createElement("div");
divPesquisaPrincipal.style.display = "flex";
divPesquisaPrincipal.style.justifyContent = "center";
divPesquisaPrincipal.style.alignItems = "center";
divPesquisaPrincipal.style.margin = "20px 0px 0px 0px";
midBody.appendChild(divPesquisaPrincipal);

const pesquisa = document.createElement("button");
pesquisa.innerText = "Pesquisa Google";
pesquisa.style.width = "135px";
pesquisa.style.height = "38px";
pesquisa.style.margin = "10px";
pesquisa.style.padding = "0 13px";
pesquisa.style.fontSize = "14px";
pesquisa.style.color = "#3c4043";
pesquisa.style.backgroundColor = "#F8F9FA";
pesquisa.style.border = "none";
pesquisa.style.borderRadius = "5px";
pesquisa.style.cursor = "pointer";
divPesquisaPrincipal.appendChild(pesquisa);

const estouComSorte = document.createElement("button");
estouComSorte.innerText = "Estou com sorte";
estouComSorte.style.width = "130px";
estouComSorte.style.height = "38px";
estouComSorte.style.fontSize = "14px";
estouComSorte.style.backgroundColor = "#F8F9FA";
estouComSorte.style.border = "none";
estouComSorte.style.borderRadius = "5px";
estouComSorte.style.color = "#3c4043";
estouComSorte.style.cursor = "pointer";
divPesquisaPrincipal.appendChild(estouComSorte);

/* PARAGRAFO DISPONIBILIZADO PELO GOOGLE */

const divParagrafo = document.createElement("div");
divParagrafo.style.display = "flex";
divParagrafo.style.justifyContent = "center";
divParagrafo.style.alignItems = "center";
divParagrafo.style.fontSize = "13px";
divParagrafo.style.marginTop = "5px";
midBody.appendChild(divParagrafo);

const paragrafo = document.createElement("p");
paragrafo.innerText = "Disponibilizado pelo Google em: ";
paragrafo.style.marginRight = "10px";
divParagrafo.appendChild(paragrafo);
const linkParagrafo = document.createElement("a");
linkParagrafo.href = "#";
linkParagrafo.innerText = "English";
linkParagrafo.style.color = "blue";
divParagrafo.appendChild(linkParagrafo);

/* FOOTER */

const footerPrincipal = document.createElement("div");
footerPrincipal.style.display = "flex";
footerPrincipal.style.flexDirection = "column";
footerPrincipal.style.flexWrap = "nowrap";
footerPrincipal.style.width = "100%";
footerPrincipal.style.fontSize = "14px";
footerPrincipal.style.backgroundColor = "rgba(0,0,0,0.05)";
appGoogle.appendChild(footerPrincipal);

const footerRegiao = document.createElement("div");
footerRegiao.innerText = "Brasil";
footerRegiao.style.padding = "15px 30px";
footerRegiao.style.color = "#0000008A";
footerRegiao.style.borderBottom = "1px solid #dadce0";
footerPrincipal.appendChild(footerRegiao);

const divFooterLinks = document.createElement("div");
divFooterLinks.style.display = "flex";
divFooterLinks.style.justifyContent = "space-Between";
divFooterLinks.style.width = "100%";
divFooterLinks.classList.add("footer-media");
footerPrincipal.appendChild(divFooterLinks);

const footerLinksLeft = document.createElement("div");
footerLinksLeft.style.padding = "15px 30px";
divFooterLinks.appendChild(footerLinksLeft);

const linkSobre = document.createElement("a");
linkSobre.innerText = "Sobre";
linkSobre.style.marginRight = "30px";
linkSobre.style.color = "#70757a";
footerLinksLeft.appendChild(linkSobre);
const linkPublicidade = document.createElement("a");
linkPublicidade.innerText = "Publicidade";
linkPublicidade.style.marginRight = "30px";
linkPublicidade.style.color = "#70757a";
footerLinksLeft.appendChild(linkPublicidade);
const linkNegocios = document.createElement("a");
linkNegocios.innerText = "Negócios";
linkNegocios.style.marginRight = "30px";
linkNegocios.style.color = "#70757a";
footerLinksLeft.appendChild(linkNegocios);
const linkComoPesquisa = document.createElement("a");
linkComoPesquisa.innerText = "Como Funciona a Pesquisa";
linkComoPesquisa.style.color = "#70757a";
footerLinksLeft.appendChild(linkComoPesquisa);

const footerLinksRight = document.createElement("div");
footerLinksRight.style.padding = "15px 30px";
divFooterLinks.appendChild(footerLinksRight);

const linkPrivacidade = document.createElement("a");
linkPrivacidade.innerText = "Privacidade";
linkPrivacidade.style.marginRight = "30px";
linkPrivacidade.style.color = "#70757a";
footerLinksRight.appendChild(linkPrivacidade);
const linkTermos = document.createElement("a");
linkTermos.innerText = "Termos";
linkTermos.style.marginRight = "30px";
linkTermos.style.color = "#70757a";
footerLinksRight.appendChild(linkTermos);
const linkConfig = document.createElement("a");
linkConfig.innerText = "Configurações";
linkConfig.style.color = "#70757a";
linkConfig.style.marginRight = "5px";
footerLinksRight.appendChild(linkConfig);
