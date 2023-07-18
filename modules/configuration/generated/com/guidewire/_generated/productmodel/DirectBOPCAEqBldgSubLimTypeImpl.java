package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPCAEqBldgSubCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPCAEqBldgSubLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPCAEqBldgSubLimType {
  public DirectBOPCAEqBldgSubLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPCAEqBldgSubCov getBOPCAEqBldgSubCov() {
    return (productmodel.BOPCAEqBldgSubCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPCAEqBldgSubCov getCoverage() {
    return (productmodel.BOPCAEqBldgSubCov)getClause();
  }
  
  
}