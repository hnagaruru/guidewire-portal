package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovD.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectHOPCovDDirectLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectHOPCovDDirectLimitType {
  public DirectHOPCovDDirectLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPCovD getCoverage() {
    return (productmodel.HOPCovD)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPCovD getHOPCovD() {
    return (productmodel.HOPCovD)getClause();
  }
  
  
}