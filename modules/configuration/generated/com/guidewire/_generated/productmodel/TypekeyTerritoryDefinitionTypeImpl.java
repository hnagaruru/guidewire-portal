package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLTerritory.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyTerritoryDefinitionTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.TerritoryDefinition> implements productmodel.TypekeyTerritoryDefinitionType {
  public TypekeyTerritoryDefinitionTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
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