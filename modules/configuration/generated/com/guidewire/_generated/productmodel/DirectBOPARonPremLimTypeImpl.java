package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPReceivablesCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPARonPremLimTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPARonPremLimType {
  public DirectBOPARonPremLimTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPReceivablesCov getBOPReceivablesCov() {
    return (productmodel.BOPReceivablesCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPReceivablesCov getCoverage() {
    return (productmodel.BOPReceivablesCov)getClause();
  }
  
  
}