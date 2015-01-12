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

    $scope.lv = {
  "Levantamientos": {
    "Levantamiento": {
      "Generales": {
        "Formato": "_dataFormato" ,
        "NumRegistro": "_dataNumRegistro" ,
        "FechaRegistro": "_dataFechaRegistro" ,
        "EsAdministrador": "_dataEsAdministrador" ,
        "Estado": "_dataEstado" ,
        "Municipio": "_dataMunicipio" ,
        "NombreEdificio": "_dataNombreEdificio" ,
        "Institucion": "_dataInstitucion" ,
        "Calle": "_dataCalle" ,
        "NumExt": "_dataNumExt" ,
        "NumInt": "_dataNumInt" ,
        "Colonia": "_dataColonia" ,
        "Localidad": "_dataLocalidad" ,
        "CP": "_dataCP" ,
        "Lat_grados": "_dataLat_grados" ,
        "Lat_min": "_dataLat_min" ,
        "Lat_seg": "_dataLat_seg" ,
        "Lng_grados": "_dataLng_grados" ,
        "Lng_min": "_dataLng_min" ,
        "Lng_seg": "_dataLng_seg" 
      },
      "ECPP": {
        "ECP": {
          "CantidadPersonalTI": "_dataCantidadPersonalTI" ,
          "FK_IdPeriodoSustitucion__INFRA": "_dataFK_IdPeriodoSustitucion__INFRA" ,
          "FK_IdAnio_Alias_Sustitucion__GRAL": "_dataFK_IdAnio_Alias_Sustitucion__GRAL" ,
          "UsuarioConPC": "_dataUsuarioConPC" ,
          "UsuariosSinPC": "_dataUsuariosSinPC" ,
          "CantidadEscritorio": "_dataCantidadEscritorio" ,
          "FK_IdTipoProcesador_Alias_Escritorio__TICS": "_dataFK_IdTipoProcesador_Alias_Escritorio__TICS" ,
          "FK_IdTipoRAM_Alias_Escritorio__TICS": "_dataFK_IdTipoRAM_Alias_Escritorio__TICS" ,
          "FK_IdTipoDiscoDuro_Alias_Escritorio__TICS": "_dataFK_IdTipoDiscoDuro_Alias_Escritorio__TICS" ,
          "CantidadLaptops": "_dataCantidadLaptops" ,
          "FK_IdTipoProcesador_Alias_Laptops__TICS": "_dataFK_IdTipoProcesador_Alias_Laptops__TICS" ,
          "FK_IdTipoRAM_Alias_Laptops__TICS": "_dataFK_IdTipoRAM_Alias_Laptops__TICS" ,
          "FK_IdTipoDiscoDuro_Alias_Laptops__TICS": "_dataFK_IdTipoDiscoDuro_Alias_Laptops__TICS" ,
          "SistemasOperativosTI": [{
                      "FK_IdSistemaOperativo__TICS": "_dataFK_IdSistemaOperativo__TICS" ,
                      "Instalado": "_dataInstalado" 
                    }],
          "OfficeTI": [{
                      "FK_IdOffice__TICS": "_dataFK_IdOffice__TICS" ,
                      "Instalado": "_dataInstalado" 
                    }],
          "OtroSoftware": [{
                      "Descripcion": "_dataDescripcion" ,
                      "Instalado": "_dataInstalado" 
                    }],
          "CatidadTablets": "_dataCatidadTablets" ,
          "CantidadEquiposMac": "_dataCantidadEquiposMac" 
        },
        "Perifericos": {
          "ImpresorasLaserBNCantidad": "_dataImpresorasLaserBNCantidad" ,
          "ImpresorasLaserBNCapRed": "_dataImpresorasLaserBNCapRed" ,
          "ImpresorasLaserBNCapRedCuantas": "_dataImpresorasLaserBNCapRedCuantas" ,
          "ImpresorasLaserColorCantidad": "_dataImpresorasLaserColorCantidad" ,
          "ImpresorasLaserColorCapRed": "_dataImpresorasLaserColorCapRed" ,
          "ImpresorasLaserColorCapRedCuantas": "_dataImpresorasLaserColorCapRedCuantas" ,
          "CantidadScanners": "_dataCantidadScanners" ,
          "CantidadNoBreaks": "_dataCantidadNoBreaks" ,
          "TiempoRespaldo": "_dataTiempoRespaldo" ,
          "CantidadLectoresCodeBar": "_dataCantidadLectoresCodeBar" ,
          "MultifuncionalesCantidad": "_dataMultifuncionalesCantidad" ,
          "MultifuncionalCapRed": "_dataMultifuncionalCapRed" ,
          "MultifuncionalCapRedCuantas": "_dataMultifuncionalCapRedCuantas" ,
          "CantidadKioscos": "_dataCantidadKioscos" ,
          "TelefoniaTI": [{
                      "CantidadLineas": "_dataCantidadLineas" ,
                      "CantidadExt": "_dataCantidadExt" ,
                      "FK_IdTipoTelefonia__TICS": "_dataFK_IdTipoTelefonia__TICS" 
                    }],
          "FK_IdTipoComunicacionInalambrica__TICS": "_dataFK_IdTipoComunicacionInalambrica__TICS" ,
          "EquipoRadioComunicacion": "_dataEquipoRadioComunicacion" ,
          "CantidadEquipoRadio": "_dataCantidadEquipoRadio" 
        },
        "BodegaEvidencias": {
          "BodegaLaptops": "_dataBodegaLaptops" ,
          "BodegaImpresoras": "_dataBodegaImpresoras" ,
          "BodegaScanners": "_dataBodegaScanners" ,
          "BodegaMultifuncionales": "_dataBodegaMultifuncionales" ,
          "BodegaTelefonos": "_dataBodegaTelefonos" 
        },
        "ServiciosPericiales": {
          "PericialesPCLaptops": "_dataPericialesPCLaptops" ,
          "PericialesImpresoras": "_dataPericialesImpresoras" ,
          "PericialesScanners": "_dataPericialesScanners" ,
          "PericialesMultifuncionales": "_dataPericialesMultifuncionales" ,
          "PericialesTelefonos": "_dataPericialesTelefonos" ,
          "PericialesVideo": "_dataPericialesVideo" ,
          "PericialesAudio": "_dataPericialesAudio" 
        },
        "SalasJuicioOral": {
          "JuiciosPCLaptops": "_dataJuiciosPCLaptops" ,
          "JuiciosImpresoras": "_dataJuiciosImpresoras" ,
          "JuiciosScanners": "_dataJuiciosScanners" ,
          "JuiciosMultifuncionales": "_dataJuiciosMultifuncionales" ,
          "JuiciosVideo": "_dataJuiciosVideo" ,
          "JuiciosAudio": "_dataJuiciosAudio" ,
          "JuiciosServidores": "_dataJuiciosServidores" ,
          "JuiciosServidoresAlmacenamiento": "_dataJuiciosServidoresAlmacenamiento" ,
          "JuiciosServidoresDisponible": "_dataJuiciosServidoresDisponible" ,
          "JuiciosServidoresCrecimiento": "_dataJuiciosServidoresCrecimiento" 
        }
      },
      "ECCC": {
        "Servidores": {
          "ServidoresAplicaciones": "_dataServidoresAplicaciones" ,
          "SAProcesadores": "_dataSAProcesadores" ,
          "SAMemoriaRAM": "_dataSAMemoriaRAM" ,
          "SACapacidad": "_dataSACapacidad" ,
          "SAAlmacenamientoMaximo": "_dataSAAlmacenamientoMaximo" ,
          "ServidoresDataBase": "_dataServidoresDataBase" ,
          "DBProcesadores": "_dataDBProcesadores" ,
          "DBMemoriaRAM": "_dataDBMemoriaRAM" ,
          "DBCapacidad": "_dataDBCapacidad" ,
          "DBAlmacenamientoMaximo": "_dataDBAlmacenamientoMaximo" ,
          "ServidoresWEB": "_dataServidoresWEB" ,
          "WEBProcesadores": "_dataWEBProcesadores" ,
          "WEBMemoriaRAM": "_dataWEBMemoriaRAM" ,
          "WEBCapacidad": "_dataWEBCapacidad" ,
          "WEBAlmacenamientoMaximo": "_dataWEBAlmacenamientoMaximo" ,
          "DispositivoAlmacenamientoTI": [{
                      "FK_IdTipoDispositivoAlmacenamiento__TICS": "_dataFK_IdTipoDispositivoAlmacenamiento__TICS" ,
                      "Descripcion": "_dataDescripcion" 
                    }],
          "TieneServidorAlmacenamiento": "_dataTieneServidorAlmacenamiento" ,
          "ServidorAlmacenamiento": [{
                      "Capacidad": "_dataCapacidad" ,
                      "EspacioDisponible": "_dataEspacioDisponible" ,
                      "CrecimientoAnual": "_dataCrecimientoAnual" 
                    }],
          "ServidorDataBase": [{
                      "FK_IdTipoDataBase__TICS": "_dataFK_IdTipoDataBase__TICS" ,
                      "TamanioActual": "_dataTamanioActual" ,
                      "EspacioDisponible": "_dataEspacioDisponible" ,
                      "CrecimientoAnual": "_dataCrecimientoAnual" 
                    }],
          "SistemasOperativosServer": [{
                      "FK_IdSistemaOperativo__TICS": "_dataFK_IdSistemaOperativo__TICS" ,
                      "Instalado": "_dataInstalado" 
                    }]
        },
        "Seguridad": {
          "TieneSoftwareAntivirus": "_dataTieneSoftwareAntivirus" ,
          "FK_IdTipoSoftwareSeguridad_Alias_Antivirus__TICS": "_dataFK_IdTipoSoftwareSeguridad_Alias_Antivirus__TICS" ,
          "TieneAntimalware": "_dataTieneAntimalware" ,
          "FK_IdTipoSoftwareSeguridad_Alias_Antimalware__TICS": "_dataFK_IdTipoSoftwareSeguridad_Alias_Antimalware__TICS" ,
          "TieneAntispyware": "_dataTieneAntispyware" ,
          "FK_IdTipoSoftwareSeguridad_Alias_Antispyware__TICS": "_dataFK_IdTipoSoftwareSeguridad_Alias_Antispyware__TICS" ,          
          "TieneEncripcion": "_dataTieneEncripcion" ,
          "EncripcionDescripcion": "_dataEncripcionDescripcion" ,
          "TieneParches": "_dataTieneParches" ,
          "ParchesDescripcion": "_dataParchesDescripcion" ,
          "TipoSeguridadCorporativa": "_dataTipoSeguridadCorporativa" 
        },
        "RedesYComunicaciones": {
          "FK_IdTipoDireccionamientoIP__TICS": "_dataFK_IdTipoDireccionamientoIP__TICS" ,
          "NumeroIPAdmin": "_dataNumeroIPAdmin" ,
          "PerifericoTI": [{
                      "FK_IdTipoPeriferico__TICS": "_dataFK_IdTipoPeriferico__TICS" ,
                      "Cantidad": "_dataCantidad" ,
                      "Tipo": "_dataTipo" ,
                      "Capacidad": "_dataCapacidad" ,
                      "Utilizado": "_dataUtilizado" 
                    }],
          "TieneCertificacionCableado": "_dataTieneCertificacionCableado" ,
          "CertificadoCableado": "_dataCertificadoCableado" ,
          "FK_IdTipoCategoriaCableado__TICS": "_dataFK_IdTipoCategoriaCableado__TICS" ,
          "TieneElectricaTierraFisica": "_dataTieneElectricaTierraFisica" ,
          "ServicioInternet": "_dataServicioInternet" ,
          "AnchoBanda": "_dataAnchoBanda" ,
          "TieneVideoconferencia": "_dataTieneVideoconferencia" ,
          "TieneLocalizacionSatelital": "_dataTieneLocalizacionSatelital" ,
          "LocalizacionSatelitalDescripcion": "_dataLocalizacionSatelitalDescripcion" ,
          "InterconeccionNSJP": "_dataInterconeccionNSJP" ,
          "InterconeccionNSJPDetalle": [{
                      "FK_IdInmuebleInstitucion__INM": "_dataFK_IdInmuebleInstitucion__INM" ,
                      "Medio": "_dataMedio" ,
                      "FK_IdTipoSeguridad__TICS": "_dataFK_IdTipoSeguridad__TICS" 
                    }],
          "TieneRedInalambricaLAN": "_dataTieneRedInalambricaLAN" 
        }
      },
      "SistemaDeGestion": {
        "SistemaDeGestionExterno": {
          "Sistemas": {
            "TieneSistemasGestion": "_dataTieneSistemasGestion" ,
            "SistemaGestion": [{
                          "FK_IdTipoSistemaGestion__TICS": "_dataFK_IdTipoSistemaGestion__TICS" ,
                          "Nombre": "_dataNombre" ,
                          "CantidadUsuarios": "_dataCantidadUsuarios" ,
                          "Administrador": "_dataAdministrador" ,
                          "FK_IdTipoSistema__TICS": "_dataFK_IdTipoSistema__TICS" ,
                          "TieneInteroperabilidad": "_dataTieneInteroperabilidad" ,
                          "SistemaInteroperabilidad": "_dataSistemaInteroperabilidad" ,
                          "DependenciaInteroperatibilidad": "_dataDependenciaInteroperatibilidad" ,
                          "TieneExpedienteUnicoCausa": "_dataTieneExpedienteUnicoCausa" ,
                          "SistemasGestionArea": [{
                                                      "FK_IdAreasUsuarias__TICS": "_dataFK_IdAreasUsuarias__TICS" 
                                                    }]
                        }],
            "AplicacionesInstitucionales": [{
                                      "Descripcion": "_dataDescripcion" 
                                    }],
            "AplicacionesDonacion": [{
                          "Descripcion": "_dataDescripcion" 
                        }],
            "EquipamientosSegunSETEC": "_dataEquipamientosSegunSETEC" ,
            "ProyectoTICRelacionadoNSJP": "_dataProyectoTICRelacionadoNSJP" ,
            "MontoInversionEjercida": "_dataMontoInversionEjercida" ,
            "FK_IdTipoRecurso__TICS": "_dataFK_IdTipoRecurso__TICS" ,
            "ValidacionSETEC": "_dataValidacionSETEC" ,
            "Comentario": "_dataComentario" 
          }
        }
      }
    }
  }};

  $scope.gen = $scope.lv.Levantamientos.Levantamiento.Generales;
  $scope.ecp = $scope.lv.Levantamientos.Levantamiento.ECPP.ECP;
  $scope.per = $scope.lv.Levantamientos.Levantamiento.ECPP.Perifericos;
  $scope.boev = $scope.lv.Levantamientos.Levantamiento.ECPP.BodegaEvidencias;
  $scope.sepe = $scope.lv.Levantamientos.Levantamiento.ECPP.ServiciosPericiales;
  $scope.saju = $scope.lv.Levantamientos.Levantamiento.ECPP.SalasJuicioOral;
  $scope.serv = $scope.lv.Levantamientos.Levantamiento.ECCC.Servidores;
  $scope.segu = $scope.lv.Levantamientos.Levantamiento.ECCC.Seguridad;


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
