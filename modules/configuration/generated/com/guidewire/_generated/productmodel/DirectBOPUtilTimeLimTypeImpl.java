package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPUtilTimeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPUtilTimeLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPUtilTimeLimType {
  public DirectBOPUtilTimeLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPUtilTimeCov getBOPUtilTimeCov() {
    return (productmodel.BOPUtilTimeCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPUtilTimeCov getCoverage() {
    return (productmodel.BOPUtilTimeCov)getClause();
  }
  
  
}