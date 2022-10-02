import styled from "styled-components";

export const MovieDetailStyle = styled.div`

section{
    border: 1px solid black;
    background-color: rgba(205, 205, 130, 0.355);
    width: 1170px;
    margin: 0 auto;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 15px;
}
h1{
    padding-left: 115px;
}
.firstcontent{
    display: flex;
    padding: 20px 0px;
}
.fixedheading{
    width: 150px;
    font-weight: 600;
}
.content{
    /* border: 1px solid black; */
    width: 300px;
    border-bottom: 1px solid black;
}
.firstcontentfirst{
    display: flex;
    padding: 0 80px;
}
.secondcontent{
    display: flex;
    padding: 30px 79px;
}
.secondcontent .party{
    font-weight: 600;
}
.partycontent{
    margin-left: 20px;
    border-bottom: 1px solid black;
    width: 700px;
}

.styleinfo{
    display: flex;
    padding: 10px 110px;
}
.styleinfoone{
    /* border: 1px solid black; */
    width: 385px;
    padding: 10px;
    /* border-bottom: 1px solid black; */
}
.style{
    border: 1px solid black;
}
.styleinfoone p{
    padding-left: 10px;
    font-weight: 600;
}
.emb{
    display: flex;
    justify-content: space-around;
}
.emblab{
    font-weight: 600;
    margin: 20px 0;
    text-align: center;
    /* width: 50px; */
}
.embcon{
    margin: 30px 0;
    border-bottom: 1px solid black;
    width: 100px;
    text-align: center;
}
`

export const MovieListingStyle = styled.div`
      
      h1{
        text-align: center;
      }
.jobcard{
    display: flex;
    /* border: 1px solid black; */
    width: 1800px;
    margin: 0 auto;
    justify-content: space-between;
}
.jobcard div{
    border: 1px solid black;
    width: 500px;
   /* text-align: center; */
}
.jobcard div p{
    text-align: center;
    font-weight: 600;
}

`

export const MovieCardStyle = styled.div`



.card{
    display: flex;
    /* border: 1px solid black; */
    width: 1800px;
    margin: 0 auto;
    justify-content: space-between;
}
.card div{
    border: 1px solid black;
    width: 500px;
}
.card .detail input{
  
}
.card div p{
    text-align: center;
    /* font-weight: 600; */
}

.first_div{
    background-color: red;
    width: 100px;
    height: 3px;
    margin: 50px 50px;
}
.second_div{
    background-color: red;
    width: 200px;
    height: 3px;
    margin: 50px 50px;
}
.third_div{
    background-color: red;
    width: 300px;
    height: 3px;
    margin: 50px 50px;
}
.fourth_div{
    background-color: red;
    width: 400px;
    height: 3px;
    margin: 50px 50px;
}
`

export const StyledCardStyle = styled.div`


* {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
    .aligned label {
      display: block;
      padding: 8px 10px 0 0;
      float: left;
      width: 200px;
      word-wrap: break-word;
      line-height: 1;
      font-weight: 300;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    }
    select {
      height: 28px;
      background-color: beige;
      border: 1px solid;
      border-color: #00000042;
      font-size: 15px;
      padding: 0px 10px;
      color: rgba(0, 0, 0, 0.815);
    }
    .form-row {
      overflow: hidden;
      padding: 14px;
      font-size: 17px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.137);
    }
    .form {
      border: 1px solid rgba(0, 0, 0, 0.384);
      padding: 23px;
      background-color: beige;
    }
    .aligned input {
      background-color: beige;
      border: 1px solid;
      border-color: #00000042;
      height: 24px;
      width: 230px;
      color: black;
    }
    #placement{
        height: 130px;
    }
    .aligned a{
        font-size: 15px;
        color: black;
        margin: 6px 12px;
        font-weight: 200;
    }
    .fa-plus:before{
        padding-top: 3px;
    }
    .form button{
        margin-top: 30px;
        background-color: black;
        color: white;
        border: 1px solid black;
        border-radius: 3px;
        padding: 5px 10px;
        font-size: 16px;
        font-size: 16px;
        cursor: pointer;
    }
    .heading{
        font-weight: 300;
        font-family: 'Courier New', Courier, monospace;
        text-align: left;
        margin-left: 16px;
    }
    .toaligned{
      display: flex;
    }
    .align{
        display: flex;
        justify-content: space-between;
        gap: 380px;
        text-align: left;
    }

`
