package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPMineSubCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPMineSubLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPMineSubLimType {
  public DirectBOPMineSubLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPMineSubCov getBOPMineSubCov() {
    return (productmodel.BOPMineSubCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPMineSubCov getCoverage() {
    return (productmodel.BOPMineSubCov)getClause();
  }
  
  
}