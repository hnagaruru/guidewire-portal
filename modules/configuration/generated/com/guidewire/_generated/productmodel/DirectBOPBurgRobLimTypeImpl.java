package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBurgRobCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPBurgRobLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPBurgRobLimType {
  public DirectBOPBurgRobLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPBurgRobCov getBOPBurgRobCov() {
    return (productmodel.BOPBurgRobCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPBurgRobCov getCoverage() {
    return (productmodel.BOPBurgRobCov)getClause();
  }
  
  
}