angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location) {

  $scope.menu = [
  {
    page:'1',
    ready: false,
    title:'Titulo',
  } , 
  {
    page:'2',
    ready: false,
    title:'Titulo 2',
  } , 
  {
    page:'3',
    ready: false,
    title:'Titulo 3',
  } , 
  ];

  $scope.listInmuebles = [
    {
      listLevantamiento: [
        
         
      ]
    }
    ];

    $scope.lev = 
    {
        "capacidadRedImpLsrBN":false ,
        "capacidadRedImpLsrBNValue":0 ,
        "capacidadRedImpLsrClr":true ,
        "capacidadRedImpLsrClrValue":1 ,
        "capacidadRedMulti":false ,
        "capacidadRedMultiValue":0 ,

          "combo1": {
            "value": 0,
            "options": [
            {"label":"entre 3 y 5 años" , "value": 1} , 
            {"label":"entre 5 y 7 años" , "value": 2} , 
            {"label":"más de 7 años" , "value": 3}
            ]
          } ,
          "combo2": {
            "value": 3,
            "options": [
            {"label":"2010" , "value": 1} , 
            {"label":"2011" , "value": 2} , 
            {"label":"2012" , "value": 3} , 
            {"label":"2013" , "value": 4} , 
            ]
          }
          ,
          "comboTelefonicaFija": {
            "value": 0,
            "options": [
            {"label":"PBX" , "value": 1} , 
            {"label":"VoIP" , "value": 2} , 
            {"label":"NA" , "value": 3}  
            ]
          }
          ,
          "comboSistemaRadioFrecuencia": {
            "value": 0,
            "options": [
            {"label":"Celular" , "value": 1} , 
            {"label":"Radio Frecuencia" , "value": 2} , 
            {"label":"NA" , "value": 3}  
            ]
          }
          ,
          "comboDispositivosAlmacenamiento": {
            "value": 2,
            "options": [
            {"label":"En servidor" , "value": 1} , 
            {"label":"CD/DVD" , "value": 2} , 
            {"label":"NA" , "value": 3}  
            ]
          }
          ,
          "comboSoftwareSeguridad1": {
            "value": 0,
            "options": [
            {"label":"Norton" , "value": 1} , 
            {"label":"AVG" , "value": 2} , 
            {"label":"Kaspersky" , "value": 3}  
            ]
          },
          "comboSoftwareSeguridad2": {
            "value": 0,
            "options": [
            {"label":"Norton" , "value": 1} , 
            {"label":"AVG" , "value": 2} , 
            {"label":"Kaspersky" , "value": 3}  
            ]
          },
          "comboSoftwareSeguridad3": {
            "value": 0,
            "options": [
            {"label":"Norton" , "value": 1} , 
            {"label":"AVG" , "value": 2} , 
            {"label":"Kaspersky" , "value": 3}  
            ]
          },
          "comboSoftwareSeguridad4": {
            "value": 0,
            "options": [
            {"label":"Norton" , "value": 1} , 
            {"label":"AVG" , "value": 2} , 
            {"label":"Kaspersky" , "value": 3}  
            ]
          },
          "comboSoftwareSeguridad5": {
            "value": 0,
            "options": [
            {"label":"Norton" , "value": 1} , 
            {"label":"AVG" , "value": 2} , 
            {"label":"Kaspersky" , "value": 3}  
            ]
          }
          ,
          "radioDireccionamientoIP": {
            "value": 0,
            "options": [
            {"label":"Estatico" , "value": 1} , 
            {"label":"Dinamico" , "value": 2}   
            ]
          }
          ,
          "comboDesicionTipo1": {
            "value": 0,
            "options": [
            {"label":"Si" , "value": 1} , 
            {"label":"No" , "value": 2} ,
            {"label":"No aplica" , "value": 3}    
            ]
          }
          ,
          "comboSistemaGestion": {
            "value": 0,
            "options": [
            {"label":"Tipo1" , "value": 1} , 
            {"label":"Tipo2" , "value": 2} ,
            {"label":"No aplica" , "value": 3}    
            ]
          }
          ,
          "comboArqSistemaGestion": {
            "value": 0,
            "options": [
            {"label":"Web" , "value": 1} , 
            {"label":"Cliente/Servidor" , "value": 2} ,
            {"label":"No aplica" , "value": 3}    
            ]
          }
          ,
          "comboFuenteRecursos": {
            "value": 0,
            "options": [
            {"label":"Estatales" , "value": 1} , 
            {"label":"Subsidio SETEC" , "value": 2} ,
            {"label":"No aplica" , "value": 3}    
            ]
          }
        };

    $scope.listInmuebles = [
      {
        listLevantamiento: [
          $scope.lev 
        ]
      }
      ];

  $scope.selectLevantamiento = function(lev){
    $scope.lev = lev;
    $location.path('/app/page/0');
  };

  $scope.doLogin = function() {



    $location.path('/dashboard');
  };


  $scope.logOut = function(){
    $location.path('/');
  };

  $scope.goValidar = function(){

  };

  $scope.goSincronizar = function(){

  };

  $scope.goDashboard = function() {
    $location.path('/dashboard');
  };

  $scope.goPage = function(page) {
    $location.path('/app/page/'+page);
  };

})
;
