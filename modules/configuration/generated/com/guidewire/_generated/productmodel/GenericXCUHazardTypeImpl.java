package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/XCUHazardsAllowed.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericXCUHazardTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericXCUHazardType {
  public GenericXCUHazardTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.XCUHazardsAllowed getCondition() {
    return (productmodel.XCUHazardsAllowed)getClause();
  }
  
  @java.lang.Override
  public productmodel.XCUHazardsAllowed getXCUHazardsAllowed() {
    return (productmodel.XCUHazardsAllowed)getClause();
  }
  
  
}