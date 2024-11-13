const response = {
  "ok": true,
  "participant": {
      "uuid": "24fd7730-09ce-4e7e-be3f-a243202fccb0",
      "winner": false,
      "received": false,
      "is_invalid": false,
      "promotion_uuid": "5d72302b-789b-4450-a798-9436338c87e1",
      "listener_uuid": "52503ee5-6e3d-4a2a-8a0d-7e780d1d209d",
      "origin": "50d0657e-cf92-494a-ac20-1f5767e7dc46",
      "register_origin": "hotsite-frame",
      "timestamp_uuid": "490fc3e9-c675-4d08-868f-5b510bf2bbe1",
      "listener": {
          "uuid": "52503ee5-6e3d-4a2a-8a0d-7e780d1d209d",
          "fullname": "Gelvazio Camargo",
          "cpf": "061.023.149-99",
          "birthdate": "1986-07-19",
          "gender": "male",
          "facebook_picture_url": null,
          "facebook_token": null,
          "origin": null,
          "cellphone": "(47) 9 8863-0404",
          "last_verification": "2023-09-15T22:29:00.000Z",
          "address_uuid": "0ae03a00-2fca-4dc6-89a7-57d97baead31",
          "timestamp_uuid": "ed58f4e6-3f57-45e8-8064-d97a0357d98d",
          "instagram_uuid": null,
          "address": {
              "uuid": "0ae03a00-2fca-4dc6-89a7-57d97baead31",
              "cep": "89160-328",
              "country": "Brasil",
              "state": "SC",
              "city": "Rio do Sul",
              "neighborhood": "Santana",
              "street": "Estrada São José",
              "number": "540",
              "latitude": -27.2163185,
              "longitude": -49.6428769,
              "timestamp_uuid": "c1b890e7-7fb8-4b0b-9631-31cc34736384"
          }
      }
  }
}

function callApiAmanda(porta){
  
  let body = {};
  let method = "GET";
  let token = "";
  if(porta == "verify"){
    body = {
      "host":"https://www.google.com",
      "company":"50d0657e-cf92-494a-ac20-1f5767e7dc46",
      "hotsite_uuid":"8d9ec5ea-50d6-433b-8a2d-27a081888833"
    }   
    
    method = "POST";
  } else if(porta == "participant"){
    method = "POST";
    token = document.querySelector("#token_retorno").value;
    promotion_uuid = document.querySelector("#promotion_uuid").value;
    body = `{
        "promotion_uuid":"` + promotion_uuid + `",
        "answers":[
           {
              "survey_uuid":"582a8daa-1e5e-4978-85b3-463e3a015194",
              "content":"Amanda FM 101,5",
              "question_uuid":"d9c58e89-87d6-4bf3-85e3-7ce8c21ad509",
              "listener_uuid":"52503ee5-6e3d-4a2a-8a0d-7e780d1d209d"
           },
           {
              "survey_uuid":"aa8c12d8-7b67-4da9-9372-1948a0c973ac",
              "content":"festa",
              "title":null,
              "question_uuid":"468c5065-2254-48a7-8eaa-6613d97553cc",
              "listener_uuid":"52503ee5-6e3d-4a2a-8a0d-7e780d1d209d"
           },
           {
              "survey_uuid":"aa8c12d8-7b67-4da9-9372-1948a0c973ac",
              "content":"15/09/2023 06:28",
              "title":null,
              "question_uuid":"468c5065-2254-48a7-8eaa-6613d97553cc",
              "listener_uuid":"52503ee5-6e3d-4a2a-8a0d-7e780d1d209d"
           }
        ],
        "listener_uuid":"52503ee5-6e3d-4a2a-8a0d-7e780d1d209d",
        "origin":"50d0657e-cf92-494a-ac20-1f5767e7dc46",
        "register_origin":"hotsite-frame"     
    }`;
  }

    callApi(method, porta, body, function(data) {
        console.log("retorno api Amanda");

        console.log(data);

        document.querySelector("#id_retorno").innerHTML = JSON.stringify(data);
        
        if(porta == "verify"){
          document.querySelector("#token_retorno").value = data.token;
          document.querySelector("#promotion_uuid").value = data.promotion.uuid;
        } else if(porta == "participant"){
          document.querySelector("#id_retorno_participant").innerHTML = JSON.stringify(data);
        }

    }, token);
}