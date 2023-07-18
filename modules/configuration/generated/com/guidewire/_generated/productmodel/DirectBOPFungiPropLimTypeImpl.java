package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPFungiPropCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPFungiPropLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPFungiPropLimType {
  public DirectBOPFungiPropLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPFungiPropCov getBOPFungiPropCov() {
    return (productmodel.BOPFungiPropCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPFungiPropCov getCoverage() {
    return (productmodel.BOPFungiPropCov)getClause();
  }
  
  
}