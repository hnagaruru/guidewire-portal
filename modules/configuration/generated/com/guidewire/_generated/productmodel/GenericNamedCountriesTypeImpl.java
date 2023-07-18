package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLTerritory.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericNamedCountriesTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericNamedCountriesType {
  public GenericNamedCountriesTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.GLTerritory getCondition() {
    return (productmodel.GLTerritory)getClause();
  }
  
  @java.lang.Override
  public productmodel.GLTerritory getGLTerritory() {
    return (productmodel.GLTerritory)getClause();
  }
  
  
}