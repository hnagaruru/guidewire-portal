package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPCAEqBldgRecCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPCAEqBldgRecLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPCAEqBldgRecLimitType {
  public DirectBOPCAEqBldgRecLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPCAEqBldgRecCov getBOPCAEqBldgRecCov() {
    return (productmodel.BOPCAEqBldgRecCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPCAEqBldgRecCov getCoverage() {
    return (productmodel.BOPCAEqBldgRecCov)getClause();
  }
  
  
}