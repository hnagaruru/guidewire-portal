package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/XCUHazardsAllowed.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyXCULocationOperationTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.XCUSite> implements productmodel.TypekeyXCULocationOperationType {
  public TypekeyXCULocationOperationTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
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