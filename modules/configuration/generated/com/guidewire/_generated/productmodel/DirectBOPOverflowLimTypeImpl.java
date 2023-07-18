package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPOverflowCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPOverflowLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPOverflowLimType {
  public DirectBOPOverflowLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPOverflowCov getBOPOverflowCov() {
    return (productmodel.BOPOverflowCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPOverflowCov getCoverage() {
    return (productmodel.BOPOverflowCov)getClause();
  }
  
  
}