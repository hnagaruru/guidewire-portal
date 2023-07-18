package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPMechBreakdownCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPMechBreakdownLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPMechBreakdownLimType {
  public DirectBOPMechBreakdownLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPMechBreakdownCov getBOPMechBreakdownCov() {
    return (productmodel.BOPMechBreakdownCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPMechBreakdownCov getCoverage() {
    return (productmodel.BOPMechBreakdownCov)getClause();
  }
  
  
}