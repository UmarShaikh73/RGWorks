const pop = document.getElementById('pop_con');
const pop_lang = document.getElementById('pop_lang');
const lang = document.getElementById('lang');

lang.addEventListener('click', () => {
   pop.style.display='block';
   pop_lang.style.display='block';
});

document.getElementById('close1').addEventListener('click', () => {
   pop.style.display='none';
   pop_lang.style.display='none';
});


// const pop_pro = document.getElementById('pop_pro');

// document.getElementById('id11').addEventListener('click', () => {
//    pop.style.display='block';
//    pop_pro.style.display='block';
// });

// document.getElementById('close2').addEventListener('click', () => {
//    pop.style.display='none';
//    pop_pro.style.display='none';
// });







//change text...

const eng  = document.getElementById("eng");
const hindi = document.getElementById('hindi');
const guj = document.getElementById('guj');

// All Elements By ids


const id1 = document.getElementById('id1');   
const id2 = document.getElementById('id2'); 
const id21 = document.getElementById('id21'); 
const id3 = document.getElementById('id3');  
const id31 = document.getElementById('id31');  
const id4 = document.getElementById('id4');  
const id5 = document.getElementById('id5');  
const id6 = document.getElementById('id6');  
const id7 = document.getElementById('id7');  
const address = document.getElementById('idaddress');  
const id9 = document.getElementById('id9');  
const id10 = document.getElementById('id10');  



eng.addEventListener('click', () => {
   lang.innerText="Language??";
  id1.innerText="Paste filling machine pump";
  id2.innerText="Product<span>&</span>";
  id21.innerText="It's description";
  id3.innerText="It is a Paste Filling machine's pump. Used in packging of bottle or a tube or a pouch, depending on the product. cream and paste are mainly use with this pump. product comes with fullly polished metallic shine.";
  id31.innerText="Pics of Product";
  id4.innerText="Controls:-";
  id5.innerText="About us";
  id6.innerText="We are Ahemedabad, Gujarat based producer.";
  id7.innerText="Our full Address";
  address.innerText="";
  id9.innerText="Contact Us on";
  id10.innerHTML='Created and maintaind By <br />Umar Shaikh. <a href="#" id="id11" class="pop_up">see profile</a>';
   pop.style.display='none';
   pop_lang.style.display='none';
});

hindi.addEventListener('click', () => {
  lang.innerText="भाषा??";
  id1.innerText="पेस्ट फीलिंग मशीन पंप";
  id2.innerHTML="उत्पाद(Product) <span>&</span>";
  id21.innerHTML="वर्णन";
  id3.innerText="यह एक पेस्ट फिलिंग मशीन का पंप है। उत्पाद के आधार पर बोतल या ट्यूब या पाउच की पैकिंग में प्रयुक्त होता है। इस पंप के साथ मुख्य रूप से क्रीम और पेस्ट का उपयोग किया जाता है। उत्पाद पूरी तरह से पॉलिश धातु चमक के साथ आता है।";
  id31.innerText="उत्पाद की तस्वीरें(Pics of Product)";
  id4.innerText="नियंत्रणक:-";
  id5.innerText="हमारे बारे में";
  id6.innerText="हम अहमदाबाद, गुजरात स्थित निर्माता हैं।";
  id7.innerText="हमारा पूरा पता";
  address.innerHTML="1, निकोलस रेजीडेंसी,<br />इंडिया गेट सोसाइटी के पास,<br />कालूपुर टावर के पास,<br />स्माइलखेज, ​​अहमदाबाद<br />गुजरात-380055";
  id9.innerText="हमसे संपर्क करें";
  id10.innerHTML="उमर शेख द्वारा बनाया <br /> और संभाला गया <a href='#' id='id11' class='pop_up'>प्रोफ़ाइल देखें</a> ";
   // की

   pop.style.display='none';
   pop_lang.style.display='none';
});

guj.addEventListener('click', () => {
  lang.innerText="ભાષા??";
  id1.innerText="પેસ્ટ ફિલિંગ મશીનો પંપ";
  id2.innerHTML="ઉત્પાદન(Product)<span>&</span>";
  id21.innerText="વર્ણન";
  id3.innerText="આ પેસ્ટ ફિલિંગ મશીનનો પંપ છે. ઉત્પાદનના આધારે બોટલ અથવા ટ્યુબ અથવા પાઉચના પેકિંગમાં વપરાય છે. આ પમ્પ સાથે મુખ્યત્વે ક્રીમ અને પેસ્ટનો ઉપયોગ થાય છે. ઉત્પાદન સંપૂર્ણ પોલિશ્ડ મેટાલિક ચમકે સાથે આવે છે.";
  id31.innerText="ઉત્પાદનની તસવીરો (Pics of Product)";
  id4.innerText="નિયંત્રક";
  id5.innerText="અમારા વિશે";
  id6.innerText="અમે અમદાવાદ, ગુજરાત આધારિત ઉત્પાદક છીએ.";
  id7.innerText="અમારું સંપૂર્ણ સરનામું";
  address.innerText="1, નિકોલાસ રેસિડેન્સી,<br />નજીકમાં ભારત ગેટ સોસાયટી,<br />નજીકના કાલુપુર ટાવર,<br />સ્માઇલખેજ, અમદાવાદ<br />GUJARAT-380055";
  id9.innerText="અમારો સંપર્ક કરો";
  id10.innerHTML="ઉમર શેખ દ્વારા બનાવેલું<br /> અને જાળવી  રાખવામાં આવી છે<a href='#' id='id11' class='pop_up'>પ્રોફાઇલ જુઓ</a> ";
   pop.style.display='none';
   pop_lang.style.display='none';
});


const rest_btn = document.getElementById('rest-btn');
let rest_show = 0;

rest_btn.addEventListener('click', () => {
   if(rest_show===0) {
      document.getElementById('rest-img').style.display='block';
      rest_btn.innerText = 'show less..';
      rest_show=1;
   }
   else {
      document.getElementById('rest-img').style.display='none';
      rest_btn.innerText = 'show more...';  
      rest_show=0; 
   }
});

var logo_speed = 0;

document.getElementById('logo').addEventListener('click', () => {
   if(logo_speed === 0) {
      document.getElementById('rec1').style.animation = 'hit 0.1s infinite';
      document.getElementById('gear').style.animation = 'rotate 1.5s infinite forwards';
      document.getElementById('rec3').style.animation = 'go3 0.25s infinite forwards';
      document.getElementById('rec4').style.animation = 'go4 0.25s infinite forwards';
      document.getElementById('rec6').style.animation = 'go6 0.25s infinite forwards';
      document.getElementById('rec7').style.animation = 'go7 0.25s infinite forwards';
      document.getElementById('rec8').style.animation = 'go8 0.25s infinite forwards';
      document.getElementById('rec9').style.animation = 'go9 0.25s infinite forwards';
      document.getElementById('rec10_2').style.animation = 'go10 0.25s infinite forwards';   
      logo_speed = 1;
   }
   else {
      document.getElementById('rec1').style.animation = 'hit 0.98s infinite';
      document.getElementById('gear').style.animation = 'rotate 6s infinite forwards';
      document.getElementById('rec3').style.animation = 'go3 0.98s infinite forwards';
      document.getElementById('rec4').style.animation = 'go4 0.98s infinite forwards';
      document.getElementById('rec6').style.animation = 'go6 0.98s infinite forwards';
      document.getElementById('rec7').style.animation = 'go7 0.98s infinite forwards';
      document.getElementById('rec8').style.animation = 'go8 0.98s infinite forwards';
      document.getElementById('rec9').style.animation = 'go9 0.98s infinite forwards';
      document.getElementById('rec10_2').style.animation = 'go10 0.98s infinite forwards';   
      logo_speed = 0;
   
   }
});