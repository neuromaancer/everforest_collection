api.Hints.style(`
border: solid 1px #859289; 
color:#D3C6AA; 
background: initial; 
background-color: #2D353B; 
font-family: Cascadia Mono; 
`);
api.Hints.style(`
border: solid 1px #859289 !important; 
padding: 1px !important; 
color: #83C092 !important;
background: #2D353B !important;
font-family: Cascadia Mono !important;
`, "text");
api.Visual.style('marks', 'background-color: #83C09299;');
api.Visual.style('cursor', 'background-color: #D3C6AA;');

/* set theme */
settings.theme = `
.sk_theme {
  font-family: Cascadia Mono, Cascadia Mono, Input Sans Condensed, Charcoal, sans-serif;
  font-size: 10pt;
  background: #2D353B;
  color: #ebdbb2;
}

.sk_theme tbody {
  color: #b8bb26;
}

.sk_theme input {
  color: #d9dce0;
}

.sk_theme .url {
  color: #38971a;
}

.sk_theme .annotation {
  color: #b16286;
}

#sk_omnibar {
  width: 60%;
  left: 20%;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
}

.sk_omnibar_middle {
  top: 15%;
  border-radius: 10px;
}


.sk_theme .omnibar_highlight {
  color: #ebdbb2;
}

.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
  background: #2D353B;
}

.sk_theme #sk_omnibarSearchResult {
  max-height: 60vh;
  overflow: hidden;
  margin: 0rem 0rem;
}

#sk_omnibarSearchResult>ul {
  padding: 1.0em;
  padding-top: 0;
}

.sk_theme #sk_omnibarSearchResult ul li {
  margin-block: 0.5rem;
  padding-left: 0.4rem;
  overflow: hidden;
}

#sk_omnibarSearchResult li.focused div.url {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.sk_theme #sk_omnibarSearchResult ul li .url {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.sk_theme #sk_omnibarSearchResult ul li.focused {
  background: #475258;
  border-color: #475258;
  border-radius: 12px;
  position: relative;
}


#sk_omnibarSearchArea>input {
  display: inline-block;
  width: 100%;
  flex: 1;
  font-size: 20px;
  margin-bottom: 0;
  padding: 0px 0px 0px 0.5rem;
  background: transparent;
  border-style: none;
  outline: none;
  padding-left: 18px;
}

#sk_banner {
  background: #3D484D;
  color: #D3C6AA;
  border-color: #3D484D;
  left: unset;
  right: 10rem;
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding: 1rem;
  transition: top ease-out .1s;
}

#sk_tabs {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  overflow: auto;
  z-index: 2147483000;
  box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.3);
  margin-left: 1rem;
  margin-top: 1.5rem;
  border: solid 1px #2D353B;
  border-radius: 15px;
  background-color: #2D353B;
  padding-top: 10px;
  padding-bottom: 10px;

}

#sk_tabs div.sk_tab {
  vertical-align: bottom;
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 0px;
  background: #2D353B;

  margin: 0px;
  box-shadow: 0px 0px 0px 0px rgba(245, 245, 0, 0.3);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3) !important;

  /* padding-top: 2px; */
  border-top: solid 0px black;
  margin-block: 0rem;
}


#sk_tabs div.sk_tab:not(:has(.sk_tab_hint)) {
  background-color: #475258 !important;
  border: 1px solid #475258;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  margin-left: 1.8rem;
  padding-left: 0rem;
  margin-right: 0.7rem;
}


#sk_tabs div.sk_tab_title {
  display: inline-block;
  vertical-align: middle;
  font-size: 10pt;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 12px;
  color: #ebdbb2;
}

#sk_tabs div.sk_tab_icon>img {
  display: block;
}

#sk_tabs.vertical div.sk_tab_hint {
  position: inherit;
  left: 8pt;
  margin-top: 3px;
  border: solid 1px #859289;
  color: #D3C6AA;
  background: initial;
  background-color: #272822;
  font-family: Cascadia Mono;
}

#sk_tabs.vertical div.sk_tab_wrap {
  display: inline-flex;
  align-items: center;
  margin-left: 0pt;
  margin-top: 0px;
  padding-left: 15px;
}

#sk_tabs.vertical div.sk_tab_title {
  min-width: 100pt;
  max-width: 20vw;
}

#sk_usage,
#sk_popup,
#sk_editor {
  overflow: auto;
  position: fixed;
  width: 80%;
  max-height: 80%;
  top: 10%;
  left: 10%;
  text-align: left;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  z-index: 2147483298;
  padding: 1rem;
  border: 1px solid #2D353B;
  border-radius: 10px;
}

#sk_keystroke {
  padding: 6px;
  position: fixed;
  float: right;
  bottom: 0px;
  z-index: 2147483000;
  right: 0px;
  background: #2D353B;
  color: #fff;
  border: 1px solid #181818;
  border-radius: 10px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
}

#sk_status {
  position: fixed;
  /* top: 0; */
  bottom: 0;
  right: 39%;
  z-index: 2147483000;
  padding: 8px 8px 8px 8px;
  border-radius: 5px;
  border: 1px solid #2D353B;
  font-size: 12px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
  /* margin-bottom: 1rem; */
  width: 20%;
  margin-bottom: 1rem;
}


#sk_omnibarSearchArea {
  border-bottom: 0px solid #2D353B;
  margin: 0.8rem 1rem !important;
}


#sk_omnibarSearchArea .resultPage {
  display: inline-block;
  font-size: 12pt;
  font-style: italic;
  width: auto;
}

#sk_omnibarSearchResult li div.url {
  font-weight: normal;
  white-space: nowrap;
  color: #aaa;
}

.sk_theme .omnibar_highlight {
  color: #A7C080;
  font-weight: bold;
}

.sk_theme .omnibar_folder {
  border: 1px solid #188888;
  border-radius: 5px;
  background: #188888;
  color: #aaa;
  box-shadow: 1px 1px 5px rgba(0, 8, 8, 0.3);
}

.sk_theme .omnibar_timestamp {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 5px;
  color: #aaa;
  box-shadow: 1px 1px 5px rgba(0, 8, 8, 0.3);
}

#sk_omnibarSearchResult li div.title {
  text-align: left;
  max-width: 100%;
  white-space: nowrap;
  overflow: clip;
}

.sk_theme .separator {
  color: #2D353B;
}

.sk_theme .prompt {
  color: #7A8478;
  border-radius: 10px;
  padding-left: 4px;
  /* padding: ; */
  font-weight: bold;
  display: inline-flex !important;
  align-items: center;
}

.sk_theme .prompt .separator {
  display: none;
  width: 0;
  color: transparent;
}

#sk_status,
#sk_find {
  font-size: 10pt;
  font-weight: bold;
  text-align: center;
  padding-right: 8px;
  width: auto;
}

#sk_status span[style*="border-right: 1px solid rgb(153, 153, 153);"] {
  display: none;
}

.expandRichHints span.annotation {
  color: #D3C6AA;
  padding-left: 8px;
}

#sk_editor {
  background: #2D353B !important;
  color: #D3C6AA;
}

.normal-mode .ace_hidden-cursors .ace_cursor {
  border-color: #9DA9A0;
}

.normal-mode .ace_cursor {
  background: #9DA9A099;
}

.ace-chrome .ace_cursor {
  color: #9DA9A099;
}

.ace-chrome .ace_marker-layer .ace_selection {
  background-color: #543A4899 !important;
}

.ace-chrome .ace_gutter {
  background: #2D353B;
}

.ace_gutter-cell {
  color: #7A8478;
}

.ace-chrome .ace_print-margin {
  background: transparent;
}

.ace-chrome .ace_marker-layer .ace_active-line {
  background: #343F44;
}

.ace-chrome .ace_gutter-active-line {
  color: #9DA9A0;
  background: #2D353B;
}
`;

