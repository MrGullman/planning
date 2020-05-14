class Work {

  constructor(){
    this.date = moment().tz("Europe/Stockholm");
    this.date.locale("sv")
    this.today = this.date.format("YYYYMMDD");
    this.url = "../resources/includes/work.json";

    this.workDataValue(this.today);
  }

  get worksData(){
    return 'kalle';
  }

  // data(dataValue){
  //   return dataValue.workData;
  // }

  workDataValue(date) {

    var workAry = [];

    return fetch(this.url)
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      // let d = data;

      // console.log(d);

      Object.keys(data).forEach(function (item) {

        if(item == date){
          console.log(data[item]); // value
          const values = data[item];

          for(let i = 0; i < values.length; i++){
            workAry.push(values[i]);
            console.log(values[i]);

          }

        }

      });
      this.wo = workAry;
    })

    // let request = new Request(this.url, {
    //   method: 'GET',
    //   mode: 'cors'
    // });

    // const response = await fetch(request);

    // const responseData = await response.json()

    // // console.log(responseData);
    // // return responseData;

    // return responseData.workData;

    // const response = await fetch("../resources/includes/work.json");
    // const data = await response.json();
    // return data;
  }





    // const result = asyncData()

    // return result.then(data => data);

}