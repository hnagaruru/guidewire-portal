package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPollutionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPPollutionLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPPollutionLimType {
  public DirectBOPPollutionLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPPollutionCov getBOPPollutionCov() {
    return (productmodel.BOPPollutionCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPPollutionCov getCoverage() {
    return (productmodel.BOPPollutionCov)getClause();
  }
  
  
}