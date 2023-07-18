package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPFuncPerPropCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPFuncPerPropLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPFuncPerPropLimType {
  public DirectBOPFuncPerPropLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPFuncPerPropCov getBOPFuncPerPropCov() {
    return (productmodel.BOPFuncPerPropCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPFuncPerPropCov getCoverage() {
    return (productmodel.BOPFuncPerPropCov)getClause();
  }
  
  
}