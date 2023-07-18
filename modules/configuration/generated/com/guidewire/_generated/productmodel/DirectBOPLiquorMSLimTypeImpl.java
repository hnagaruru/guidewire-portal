package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPLiquorCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPLiquorMSLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPLiquorMSLimType {
  public DirectBOPLiquorMSLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPLiquorCov getBOPLiquorCov() {
    return (productmodel.BOPLiquorCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPLiquorCov getCoverage() {
    return (productmodel.BOPLiquorCov)getClause();
  }
  
  
}